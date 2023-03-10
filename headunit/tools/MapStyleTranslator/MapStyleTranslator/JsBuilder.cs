using System.Text;
using MapStyleTranslator.Abstractions;
using MapStyleTranslator.Filter;
using MapStyleTranslator.OlStyle;
using MapStyleTranslator.Style;

namespace MapStyleTranslator
{
    public class JsBuilder
    {
        private const string padding = "    ";

        private readonly IJsTranslator<OlStyle.OlStroke> strokeTranslator;
        private readonly IJsTranslator<OlStyle.OlFill> fillTranslator;
        private readonly IJsTranslator<OlStyle.OlStyle> styleTranslator;
        private readonly string functionName;
        private readonly List<LayerStyle> layers;

        private string featureVariableName = "feature";
        private string layerVariableName = "layer";
        private string classVariableName = "cls";
        private string zoomVariableName = "zoom";
        private string geomFeatureVariableName = "geom";
        private string requestedFeatureVariable = "_f";
        private List<string> features = new List<string>();

        public JsBuilder(string functionName, List<LayerStyle> layers)
        {
            this.functionName = functionName;
            this.layers = layers;
            this.strokeTranslator = new OlStyle.OlStrokeObjectTranslator();
            this.fillTranslator = new OlStyle.OlFillObjectTranslator();
            this.styleTranslator = new OlStyle.OlStyleTranslator(fillTranslator, strokeTranslator, new OlStyle.OlTextObjectTranslator(fillTranslator, strokeTranslator));
        }

        public string Get()
        {
            var layers = GetLayerIfs();

            StringBuilder builder = new StringBuilder();

            builder.AppendLine("function zoomFromResolution(resolution) {");
            builder.AppendLine(padding + "return Math.log2(156543.03392804097) - Math.log2(resolution);");
            builder.AppendLine("}");

            builder.AppendLine($"function {functionName}({featureVariableName}, resolution)");
            builder.AppendLine("{");
            builder.AppendLine(padding + $"var {zoomVariableName} = zoomFromResolution(resolution);");
            builder.AppendLine($"{padding}var {layerVariableName} = {featureVariableName}.get('layer');");
            builder.AppendLine($"{padding}var {classVariableName} = {featureVariableName}.get('class');");
            builder.AppendLine($"{padding}var {geomFeatureVariableName} = feature.getGeometry().getType();");

            for (int i = 0; i < features.Count; i++)
            {
                builder.AppendLine($"{padding}var {requestedFeatureVariable}{i} = {featureVariableName}.get('{features[i]}');");
            }

            builder.AppendLine();
            builder.Append(layers);

            builder.Append("}");

            return builder.ToString();
        }

        private string GetFilterCondition(IFilter filter)
        {
            if (filter is ExistentialFilter existentialFilter) return _FilterCondition(existentialFilter);
            else if (filter is ComparisonFilter comparisonFilter) return _FilterCondition(comparisonFilter);
            else if (filter is SetMembershipFilter setMembershipFilter) return _FilterCondition(setMembershipFilter);
            else if (filter is CombinedFilter combinedFilter) return _FilterCondition(combinedFilter);
            else return "false";
        }

        private string _FilterCondition(ExistentialFilter filter)
        {
            return GetFeatureVariable(filter.Key) + (filter.Function == FilterMarkers.DoesNotExist ? "!" : "=") + "==undefined";
        }
        private string _FilterCondition(ComparisonFilter filter)
        {
            var value = filter.Value.ToString();
            if (filter.Value.Type == Newtonsoft.Json.Linq.JTokenType.String)
            {
                value = value.ToJsString();
            }
            return string.Format("{0}{1}{2}", GetFeatureVariable(filter.Property), filter.Comparator, value);
        }
        private string _FilterCondition(SetMembershipFilter filter)
        {
            return string.Format("{0}[{1}].includes({2})", filter.Function == FilterMarkers.SetExclusion ? "!" : string.Empty, string.Join(',', filter.Set.Select(x => x.ToJsString())), GetFeatureVariable(filter.Key));
        }
        private string _FilterCondition(CombinedFilter filter)
        {
            var conditions = filter.Filters.Select(x => (filter.Filters.Length > 1 ? "(" : "") + GetFilterCondition(x) + (filter.Filters.Length > 1 ? ")" : ""));
            if (filter.Function == FilterMarkers.LogicalNor) return "false";
            var func = filter.Function == FilterMarkers.LogicalAnd ? "&&" : "||";
            return string.Join(func, conditions);
        }

        private string GetFeatureVariable(string feature)
        {
            if (feature == "$type") return geomFeatureVariableName;
            if (feature == "layer") return layerVariableName;
            if (feature == "class") return classVariableName;
            var index = features.IndexOf(feature);
            if (index < 0)
            {
                features.Add(feature);
                return GetFeatureVariable(feature);
            }
            return "_f" + index;
        }

        private string GetLayerIfs()
        {
            StringBuilder builder = new StringBuilder();
            int layerGroupNumber = 0;
            //int visibleLayerNumber = 0;
            var visibleLayers = layers.Where(x => x.IsVisible).GroupBy(x=>x.SourceLayer);
            //foreach (var layer in visibleLayers)
            //{
            //    if (layer.Filter is null) continue;

            //    visibleLayerNumber++; 
            //    var keyword = visibleLayerNumber > 1 ? "else if" : "if";
            //    var filter = layerVariableName + " == \"" + layer.SourceLayer + "\"";
            //    string[] zoomFilters = new string[]
            //    {
            //        layer.MinZoom is not null ? "zoom >= " + layer.MinZoom : string.Empty,
            //        layer.MaxZoom is not null ? "zoom <= " + layer.MaxZoom : string.Empty
            //    };
            //    var zoomFilter = string.Join("&&", zoomFilters.Where(x => !string.IsNullOrEmpty(x)));
            //    if (!string.IsNullOrEmpty(zoomFilter))
            //    {
            //        filter = "(" + filter + ") && (" + zoomFilter + ")";
            //    }
            //    builder.AppendLine($"{padding}{keyword} ({filter}) {{");



            //    builder.AppendLine(padding + "}");
            //}
            foreach (var layerGroup in visibleLayers)
            {
                layerGroupNumber++;
                var keyword = layerGroupNumber > 1 ? "else if" : "if";

                builder.AppendLine($"{padding}{keyword} ({layerVariableName} == \"{layerGroup.Key}\") {{");
                int layerNumber = 0;
                foreach (var layer in layerGroup)
                {
                    string condition = "true";
                    if (layer.Filter is not null) condition = GetFilterCondition(layer.Filter);
                    layerNumber++;

                    string[] zoomFilters = new string[]
                    {
                        layer.MinZoom is not null ? "zoom >= " + layer.MinZoom : string.Empty,
                        layer.MaxZoom is not null ? "zoom <= " + layer.MaxZoom : string.Empty
                    };
                    var zoomFilter = string.Join(" && ", zoomFilters.Where(x => !string.IsNullOrEmpty(x)));
                    if (!string.IsNullOrEmpty(zoomFilter))
                    {
                        condition = "(" + condition + ") && (" + zoomFilter + ")";
                    }
                    builder.AppendLine(padding + padding + (layerNumber > 1 ? "else if" : "if") + " (" + condition + ") {");

                    int zoomNumber = 0;
                    var styles = StyleProperty.GetZoomProperties(layer.Paint, layer.Layout);
                    var zoomedStyles = styles.OrderBy(x => x.Key).Where(x => x.Key != -1).ToList();
                    for (int i = 0; i < zoomedStyles.Count; i++)
                    {
                        var style = zoomedStyles[i];
                        var olStyle = OlStyle.OlStyle.Parse(style.Value);
                        var translatedStyle = styleTranslator.Translate(olStyle);
                        if (i != zoomedStyles.Count - 1)
                        {
                            builder.AppendLine(padding + padding + padding + (zoomNumber > 1 ? "else if" : "if") + "(zoom <= " + style.Key + ") return " + translatedStyle + ";");
                        }
                        else
                        {
                            builder.AppendLine(padding + padding + padding + "else return " + translatedStyle + ";");
                        }
                    }
                    //foreach (var style in zoomedStyles)
                    //{
                    //    zoomNumber++;
                    //    var olStyle = OlStyle.OlStyle.Parse(style.Value);
                    //    var translatedStyle = styleTranslator.Translate(olStyle);
                    //    builder.AppendLine(padding + padding + padding + (zoomNumber > 1 ? "else if" : "if") + "(zoom <= " + style.Key + ") return " + translatedStyle + ";");
                    //}
                    //if (zoomNumber > 1)
                    //{
                    //    var olStyle = OlStyle.OlStyle.Parse(styles.First().Value);
                    //    var translatedStyle = styleTranslator.Translate(olStyle);
                    //    builder.AppendLine(padding + padding + padding + "else return " + translatedStyle + ";");
                    //}
                    var defaultZoom = styles.ContainsKey(-1);
                    if (defaultZoom)
                    {
                        var olStyle = OlStyle.OlStyle.Parse(styles[-1]);
                        var translatedStyle = styleTranslator.Translate(olStyle);
                        builder.AppendLine(padding + padding + padding + "return " + translatedStyle + ";");
                    }

                    builder.AppendLine(padding + padding + "}");
                }

                builder.AppendLine(padding + "}");
            }

            return builder.ToString();
        }
    }
}
