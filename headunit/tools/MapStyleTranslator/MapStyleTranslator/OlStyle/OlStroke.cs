using MapStyleTranslator.Abstractions;

namespace MapStyleTranslator.OlStyle
{
    public class OlStroke
    {
        public double[]? Color { get; set; }

        public double? Width { get; set; }
    }

    public class OlStrokeObjectTranslator : IJsTranslator<OlStroke>
    {
        public string Translate(OlStroke source)
        {
            List<string> properties = new List<string>();
            if (source.Color is not null)
            {
                properties.Add("color: " + Utils.GetColorAsCode(source.Color));
            }
            if (source.Width is not null)
            {
                properties.Add("width: " + source.Width.Value.ToJsNumber());
            }
            var props = "{" + string.Join(',', properties) + "}";
            return string.Format("new {0}({1})", OlConsts.OlStyleStroke, props);
        }
    }

    public class OlStrokeFluentTranslator : IJsTranslator<OlStroke>
    {
        public string Translate(OlStroke source)
        {
            List<string> actions = new List<string>();
            if (source.Color is not null)
            {
                actions.Add("setColor(" + Utils.GetColorAsCode(source.Color) + ")");
            }
            if (source.Width is not null)
            {
                actions.Add("setWidth(" + source.Width.Value.ToJsNumber() + ")");
            }
            return "." + string.Join('.', actions);
        }
    }
}
