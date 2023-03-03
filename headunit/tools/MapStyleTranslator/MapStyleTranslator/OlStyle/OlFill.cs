using System.Globalization;
using MapStyleTranslator.Abstractions;

namespace MapStyleTranslator.OlStyle
{
    public class OlFill
    {
        public double[]? Color { get; set; }
    }

    public class OlFillObjectTranslator : IJsTranslator<OlFill>
    {
        public string Translate(OlFill source)
        {
            List<string> properties = new List<string>();
            if (source.Color is not null)
            {
                properties.Add("color: " + Utils.GetColorAsCode(source.Color));
            }
            var props = "{" + string.Join(',', properties) + "}";
            return string.Format("new {0}({1})", OlConsts.OlStyleFill, props);
        }
    }

    public class OlFillFluentTranslator : IJsTranslator<OlFill>
    {
        public string Translate(OlFill source)
        {
            List<string> actions = new List<string>();
            if (source.Color is not null)
            {
                actions.Add("setColor(" + Utils.GetColorAsCode(source.Color) + ")");
            }
            return "." + string.Join('.', actions);
        }
    }
}
