using System.Text.RegularExpressions;
using MapStyleTranslator.Abstractions;
using MapStyleTranslator.Style;
using Newtonsoft.Json.Linq;

namespace MapStyleTranslator.OlStyle
{
    public class OlStyle
    {
        public OlFill? Fill { get; set; }

        public OlStroke? Stroke { get; set; }

        public OlText? Text { get; set; }

        public void ApplyStyles(IEnumerable<StyleProperty> props)
        {
            foreach (var prop in props)
            {
                if (prop.Name == "fill-color")
                {
                    EnsureFillCreated();
                    var opacity = props.FirstOrDefault(x => x.Name == "fill-opacity");
                    Fill!.Color = Utils.GetColor(prop.Value);
                    if (opacity is not null)
                    {
                        Fill.Color[3] *= GetOpacity(opacity.Value);
                    }
                }
                else if (/*prop.Name == "fill-outline-color" || */prop.Name == "line-color")
                {
                    EnsureStrokeCreated();
                    var opacity = props.FirstOrDefault(x => x.Name == "line-opacity");
                    Stroke!.Color = Utils.GetColor(prop.Value);
                    if (opacity is not null)
                    {
                        Stroke.Color[3] *= GetOpacity(opacity.Value);
                    }
                }
                else if (prop.Name == "line-width")
                {
                    EnsureStrokeCreated();
                    Stroke!.Width = double.Parse(prop.Value.ToString());
                }
                else if (prop.Name == "text-size")
                {
                    EnsureTextCreated();
                    Text!.Font = prop.Value.ToString() + "px Arial";
                    Text.Placement = "line";
                }
                else if (prop.Name == "text-field")
                {
                    EnsureTextCreated();
                    var str = prop.Value.ToString().Replace("\n", "\\n").Replace("\r", "\\r");
                    var replacement = Regex.Replace(str, "{([\\w\\d:_-]+)}", "\" + feature.get(\"$1\") + \"");
                    Text.Text = "\"" + replacement + "\"";
                }
                else if (prop.Name == "text-color")
                {
                    EnsureTextCreated();
                    var opacity = props.FirstOrDefault(x => x.Name == "text-opacity");
                    Text!.Fill = new OlFill();
                    Text!.Fill!.Color = Utils.GetColor(prop.Value);
                    if (opacity is not null && Text!.Fill!.Color != null)
                    {
                        Text!.Fill!.Color[3] *= GetOpacity(opacity.Value);
                    }
                }
                else
                {
                    //Console.WriteLine("Unknown property " + prop.Name);
                }
            }
        }

        private static double GetOpacity(JToken value)
        {
            if (value.Type == JTokenType.String) return double.Parse(value.ToString());
            return 1;
        }

        public static OlStyle Parse(params IEnumerable<StyleProperty>[] props)
        {
            var result = new OlStyle();

            foreach (var prop in props)
            {
                result.ApplyStyles(prop);
            }

            return result;
        }

        private OlFill EnsureFillCreated()
        {
            if (Fill is null) Fill = new OlFill();
            return Fill;
        }
        private OlStroke EnsureStrokeCreated()
        {
            if (Stroke is null) Stroke = new OlStroke();
            return Stroke;
        }
        private OlText EnsureTextCreated()
        {
            if (Text is null) Text = new OlText();
            return Text;
        }
    }

    public class OlStyleTranslator : IJsTranslator<OlStyle>
    {
        private readonly IJsTranslator<OlFill> fillTranslator;
        private readonly IJsTranslator<OlStroke> strokeTranslator;
        private readonly IJsTranslator<OlText> textTranslator;

        public OlStyleTranslator(
            IJsTranslator<OlFill> fillTranslator, 
            IJsTranslator<OlStroke> strokeTranslator, 
            IJsTranslator<OlText> textTranslator)
        {
            this.fillTranslator = fillTranslator;
            this.strokeTranslator = strokeTranslator;
            this.textTranslator = textTranslator;
        }

        public string Translate(OlStyle source)
        {
            List<string> properties = new List<string>();
            if (source.Fill is not null)
            {
                properties.Add("fill: " + fillTranslator.Translate(source.Fill));
            }
            if (source.Stroke is not null)
            {
                properties.Add("stroke: " + strokeTranslator.Translate(source.Stroke));
            }
            if (source.Text is not null)
            {
                properties.Add("text: " + textTranslator.Translate(source.Text));
            }
            var props = "{" + string.Join(',', properties) + "}";
            return string.Format("new {0}({1})", OlConsts.OlStyleStyle, props);
        }
    }
}
