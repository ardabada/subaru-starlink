using Newtonsoft.Json.Linq;

namespace MapStyleTranslator.Style
{
    public class StyleProperty
    {
        public StyleProperty(double? zoom, string name, JToken value)
        {
            Zoom = zoom;
            Name = name;
            Value = value;
        }

        public double? Zoom { get; }

        public string Name { get; }

        public JToken Value { get; }

        public static List<StyleProperty> Read(JToken? source)
        {
            if (source is null) return new List<StyleProperty>();

            var obj = source as JObject;
            if (obj is null) return new List<StyleProperty>();

            var result = new List<StyleProperty>();
            foreach (var item in obj.Properties())
            {
                if (item.Value.Type == JTokenType.Object && item.Value["stops"] is not null)
                {
                    var stops = item.Value["stops"] as JArray;
                    if (stops is null) continue;

                    foreach (var stop in stops)
                    {
                        result.Add(new StyleProperty(stop[0]!.ToObject<double>(), item.Name, stop[1]!));
                    }
                }
                else
                {
                    result.Add(new StyleProperty(null, item.Name, item.Value));
                }
            }

            return result;
        }

        public static Dictionary<double, List<StyleProperty>> GetZoomProperties(params IEnumerable<StyleProperty>?[] properties)
        {
            var props = new List<StyleProperty>();
            foreach (var i in properties) if (i is not null) props.AddRange(i);
            Dictionary<double, List<StyleProperty>> result = new Dictionary<double, List<StyleProperty>>();

            var totalProps = props.Select(x => x.Name).Distinct().ToArray();
            var totalZooms = props.Select(x => x.Zoom).Distinct().ToArray();
            var ordered = props.OrderBy(x => x.Zoom).ToArray();
            foreach (var zoom in totalZooms)
            {
                foreach (var prop in totalProps)
                {
                    var i = ordered.FirstOrDefault(x => x.Name == prop && x.Zoom == zoom);
                    if (i is null)
                    {
                        i = ordered.FirstOrDefault(x => x.Name == prop && x.Zoom < zoom);
                    }
                    if (i is null)
                    {
                        i = ordered.FirstOrDefault(x => x.Name == prop && x.Zoom is null);
                    }

                    if (i is not null)
                    {
                        double targetZoom = zoom is null ? -1 : zoom.Value;
                        if (!result.ContainsKey(targetZoom)) result.Add(targetZoom, new List<StyleProperty>());
                        result[targetZoom].Add(new StyleProperty(zoom, prop, i.Value));
                    }
                }
            }
            if (totalZooms.Length > 1 && totalZooms.Any(x => x is null))
            {
                result.Remove(-1);
            }

            return result;
        }
    }
}
