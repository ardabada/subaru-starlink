using MapStyleTranslator.Filter;
using Newtonsoft.Json.Linq;

namespace MapStyleTranslator.Style
{
    public class LayerStyle
    {
        public string? Id { get; set; }

        public string? Type { get; set; }

        public int? MaxZoom { get; set; }

        public int? MinZoom { get; set; }

        public string? Source { get; set; }

        public string? SourceLayer { get; set; }

        public IFilter? Filter { get; set; }

        public List<StyleProperty>? Paint { get; set; }

        public List<StyleProperty>? Layout { get; set; }

        public bool IsVisible
        {
            get
            {
                if (Layout is null) return true;
                return !Layout.Any(x => x.Name == "visibility" && x.Value.ToString() == "none");
            }
        }

        public static LayerStyle? Read(JToken? source)
        {
            if (source is null) return null;

            var result = new LayerStyle();
            result.Id = source["id"]?.ToString();
            result.Type = source["type"]?.ToString();
            result.Filter = FilterFactory.Parse(source["filter"]);
            result.MaxZoom = source["maxzoom"]?.ToObject<int>();
            result.MinZoom = source["minzoom"]?.ToObject<int>();
            result.Source = source["source"]?.ToString();
            result.SourceLayer = source["source-layer"]?.ToString();
            result.Paint = StyleProperty.Read(source["paint"]);
            result.Layout = StyleProperty.Read(source["layout"]);

            return result;
        }
    }
}
