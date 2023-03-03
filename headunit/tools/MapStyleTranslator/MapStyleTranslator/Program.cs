using MapStyleTranslator.Style;
using Newtonsoft.Json.Linq;

namespace MapStyleTranslator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var sourceFile = @"theme_point.json";
            var outputFile = @"style.js";
            var layersPath = "props.mapStyle.layers";
            var themeName = "lightTheme";

            var source = File.ReadAllText(sourceFile);
            var json = JToken.Parse(source);
            foreach (var part in layersPath.Split('.'))
            {
                json = json[part];
            }

            List<LayerStyle> layers = new List<LayerStyle>();
            foreach (var layer in json)
            {
                var parsed = LayerStyle.Read(layer);
                if (parsed is null) continue;
                layers.Add(parsed);
            }

            JsBuilder builder = new JsBuilder(themeName, layers);
            var result = builder.Get();
            File.WriteAllText(outputFile, result);
        }
    }
}