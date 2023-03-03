using MapStyleTranslator.Abstractions;
using MapStyleTranslator.Style;

namespace MapStyleTranslator.OlStyle
{
    public class OlStyle
    {
        public OlFill? Fill { get; set; }

        public OlStroke? Stroke { get; set; }

        public OlText? Text { get; set; }

        public void ApplyStyles(IEnumerable<StyleProperty> props)
        {
            var fillColor = props.FirstOrDefault(x => x.Name == "fill-color");
            if (fillColor is not null)
            {
                EnsureFillCreated();
                Fill!.Color = Utils.GetColor(fillColor.Value, Fill!.Color);
            }

            var fillOpacity = props.FirstOrDefault(x => x.Name == "fill-opacity");
            if (fillOpacity is not null)
            {
                EnsureFillCreated();
                Fill!.Color = Utils.BlendOpacity(Fill!.Color, double.Parse(fillOpacity.Value.ToString()));
            }
            var lineColor = props.FirstOrDefault(x => x.Name == "line-color");
            if (lineColor is not null)
            {
                EnsureStrokeCreated();
                Stroke!.Color = Utils.GetColor(lineColor.Value, Stroke!.Color);
            }

            //var lineOpacity = props.FirstOrDefault(x => x.Name == "line-opacity");
            //if (lineOpacity is not null)
            //{
            //    EnsureStrokeCreated();
            //    Stroke!.Color = Utils.BlendOpacity(Stroke!.Color, double.Parse(lineOpacity.Value.ToString()));
            //}

            foreach (var prop in props)
            {
                //if (prop.Name == "fill-color")
                //{
                //    EnsureFillCreated();
                //    Fill!.Color = Utils.GetColor(prop.Value, Fill!.Color);
                //}
                //else if (prop.Name == "fill-opacity")
                //{
                //    EnsureFillCreated();
                //    Fill!.Color = Utils.BlendOpacity(Fill!.Color, double.Parse(prop.Value.ToString()));
                //}
                //else if (prop.Name == "fill-outline-color" || prop.Name == "line-color")
                //{
                //    EnsureStrokeCreated();
                //    Stroke!.Color = Utils.GetColor(prop.Value, Stroke!.Color);
                //}
                //else if (prop.Name == "line-width")
                //{
                //    EnsureStrokeCreated();
                //    Stroke!.Width = double.Parse(prop.Value.ToString());
                //}
                //else if (prop.Name == "line-opacity")
                //{
                //    EnsureStrokeCreated();
                //    Stroke!.Color = Utils.BlendOpacity(Stroke!.Color, double.Parse(prop.Value.ToString()));
                //}
                if (prop.Name == "text-size")
                {
                    EnsureTextCreated();
                    Text!.Text = "test";
                    Text!.Font = prop.Value.ToString() + "px Arial";
                }
                else if (prop.Name == "text-color")
                {
                    EnsureTextCreated();
                    Text!.Fill = new OlFill();
                    Text!.Fill!.Color = Utils.GetColor(prop.Value, Text!.Fill!.Color);
                }
                else
                {
                    //Console.WriteLine("Unknown property " + prop.Name);
                }
            }
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
