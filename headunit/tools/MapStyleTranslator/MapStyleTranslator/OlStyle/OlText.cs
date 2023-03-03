using MapStyleTranslator.Abstractions;

namespace MapStyleTranslator.OlStyle
{
    public class OlText
    {
        public string? Font { get; set; }

        public double? MaxAngle { get; set; }

        public double? OffsetX { get; set; }

        public double? OffsetY { get; set; }

        public bool? Overflow { get; set; }

        public string? Placement { get; set; }

        public double? Scale { get; set; }

        public bool? RotateWithView { get; set; }

        public double? Rotation { get; set; }

        public string? Text { get; set; }

        public string? TextAlign { get; set; }

        public string? Justify { get; set; }

        public string? TextBaseline { get; set; }

        public OlFill? Fill { get; set; }

        public OlStroke? Stroke { get; set; }

        public OlFill? BackgroundFill { get; set; }

        public OlStroke? BackgroundStroke { get; set; }

        public double[]? Padding { get; set; }
    }

    public class OlTextObjectTranslator : IJsTranslator<OlText>
    {
        private readonly IJsTranslator<OlFill> fillTranslator;
        private readonly IJsTranslator<OlStroke> strokeTranslator;

        public OlTextObjectTranslator(IJsTranslator<OlFill> fillTranslator, IJsTranslator<OlStroke> strokeTranslator)
        {
            this.fillTranslator = fillTranslator;
            this.strokeTranslator = strokeTranslator;
        }

        public string Translate(OlText source)
        {
            Dictionary<string, string> properties = new Dictionary<string, string>();
            if (!string.IsNullOrEmpty(source.Font))
            {
                properties["font"] = source.Font.ToJsString();
            }
            if (source.MaxAngle is not null)
            {
                properties["maxAngle"] = source.MaxAngle.Value.ToJsNumber();
            }
            if (source.OffsetX is not null)
            {
                properties["offsetX"] = source.OffsetX.Value.ToJsNumber();
            }
            if (source.OffsetY is not null)
            {
                properties["offsetY"] = source.OffsetY.Value.ToJsNumber();
            }
            if (source.Overflow is not null)
            {
                properties["overflow"] = source.Overflow.Value.ToJsBool();
            }
            if (!string.IsNullOrEmpty(source.Placement))
            {
                properties["placement"] = source.Placement.ToJsString();
            }
            if (source.Scale is not null)
            {
                properties["scale"] = source.Scale.Value.ToJsNumber();
            }
            if (source.RotateWithView is not null)
            {
                properties["rotateWithView"] = source.RotateWithView.Value.ToJsBool();
            }
            if (source.Rotation is not null)
            {
                properties["rotation"] = source.Rotation.Value.ToJsNumber();
            }
            if (!string.IsNullOrEmpty(source.Text))
            {
                properties["text"] = source.Text.ToJsString();
            }
            if (!string.IsNullOrEmpty(source.TextAlign))
            {
                properties["textAlign"] = source.TextAlign.ToJsString();
            }
            if (!string.IsNullOrEmpty(source.Justify))
            {
                properties["justify"] = source.Justify.ToJsString();
            }
            if (!string.IsNullOrEmpty(source.TextBaseline))
            {
                properties["textBaseline"] = source.TextBaseline.ToJsString();
            }
            if (source.Fill is not null)
            {
                properties["fill"] = fillTranslator.Translate(source.Fill);
            }
            if (source.Stroke is not null)
            {
                properties["stroke"] = strokeTranslator.Translate(source.Stroke);
            }
            if (source.BackgroundFill is not null)
            {
                properties["backgroundFill"] = fillTranslator.Translate(source.BackgroundFill);
            }
            if (source.BackgroundStroke is not null)
            {
                properties["backgroundStroke"] = strokeTranslator.Translate(source.BackgroundStroke);
            }
            var props = "{" + string.Join(',', properties.Select(x => x.Key + ": " + x.Value)) + "}";
            return string.Format("new {0}({1})", OlConsts.OlStyleText, props);
        }
    }
}
