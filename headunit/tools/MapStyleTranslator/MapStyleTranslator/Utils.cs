using System.Globalization;
using System.Text.RegularExpressions;
using Newtonsoft.Json.Linq;

namespace MapStyleTranslator
{
    public static class Utils
    {
        public static string GetColorAsCode(double[] color)
        {
            return "[" + string.Join(",", color.Select(x => x.ToJsNumber())) + "]";
        }

        public static string ToJsNumber(this double source)
        {
            return source.ToString(CultureInfo.InvariantCulture);
        }

        public static string ToJsString(this string source)
        {
            return string.Format("\"{0}\"", source.Escape());
        }

        public static string ToJsBool(this bool source)
        {
            return source.ToString().ToLower();
        }

        public static string Escape(this string source)
        {
            return source.Replace("\"", "\\\"");
        }

        public static double[]? GetColor(JToken source)
        {
            if (source.Type == JTokenType.String) return GetColor(source.ToString());
            return null;
        }

        public static double[] GetColor(string source)
        {
            if (source.StartsWith("hsl"))
            {
                var matches = Regex.Match(source, @"hsla?\((\d+),\s?(\d+)%,\s?(\d+)%,?\s?([\d.]+)?\)");
                var h = int.Parse(matches.Groups[1].Value);
                float s = float.Parse(matches.Groups[2].Value) / 100f;
                float l = float.Parse(matches.Groups[3].Value) / 100f;
                float a = 1;
                if (!string.IsNullOrEmpty(matches.Groups[4].Value))
                {
                    a = float.Parse(matches.Groups[4].Value, CultureInfo.InvariantCulture);
                }
                return HslaToRgba(h, s, l, a);
            }
            else if (source.StartsWith("rgb"))
            {
                var matches = Regex.Match(source, @"rgba?\((\d+),\s?(\d+),\s?(\d+),?\s?([\d.]+)?\)");
                var r = int.Parse(matches.Groups[1].Value);
                var g = int.Parse(matches.Groups[2].Value);
                var b = int.Parse(matches.Groups[3].Value);
                double a = 1;
                if (!string.IsNullOrEmpty(matches.Groups[4].Value))
                {
                    a = double.Parse(matches.Groups[4].Value, CultureInfo.InvariantCulture);
                }
                return new double[] { r, g, b, a };
            }
            //else if (source.StartsWith("#"))
            //{
            //    source = source.Replace("#", "");

            //    int r = 0;
            //    int g = 0;
            //    int b = 0;

            //    if (source.Length == 6)
            //    {
            //        //#RRGGBB
            //        r = int.Parse(source.Substring(0, 2), NumberStyles.AllowHexSpecifier);
            //        g = int.Parse(source.Substring(2, 2), NumberStyles.AllowHexSpecifier);
            //        b = int.Parse(source.Substring(4, 2), NumberStyles.AllowHexSpecifier);
            //    }
            //    else if (source.Length == 3)
            //    {
            //        //#RGB
            //        r = int.Parse(source[0].ToString() + source[0].ToString(), NumberStyles.AllowHexSpecifier);
            //        g = int.Parse(source[1].ToString() + source[1].ToString(), NumberStyles.AllowHexSpecifier);
            //        b = int.Parse(source[2].ToString() + source[2].ToString(), NumberStyles.AllowHexSpecifier);
            //    }

            //    return new double[] { r, g, b, 1d };
            //}
            else
            {
                var color = System.Drawing.ColorTranslator.FromHtml(source);
                return new double[] { color.R, color.G, color.B, 255d / (double)color.A };
            }
        }

        private static double[] HslaToRgba(int H, float S, float L, float alpha)
        {
            byte r = 0;
            byte g = 0;
            byte b = 0;

            if (S == 0)
            {
                r = g = b = (byte)(L * 255);
            }
            else
            {
                float v1, v2;
                float hue = (float)H / 360;

                v2 = (L < 0.5) ? (L * (1 + S)) : ((L + S) - (L * S));
                v1 = 2 * L - v2;

                r = (byte)(255 * HueToRGB(v1, v2, hue + (1.0f / 3)));
                g = (byte)(255 * HueToRGB(v1, v2, hue));
                b = (byte)(255 * HueToRGB(v1, v2, hue - (1.0f / 3)));
            }

            return new double[] { r, g, b, alpha };
        }

        private static float HueToRGB(float v1, float v2, float vH)
        {
            if (vH < 0)
                vH += 1;

            if (vH > 1)
                vH -= 1;

            if ((6 * vH) < 1)
                return (v1 + (v2 - v1) * 6 * vH);

            if ((2 * vH) < 1)
                return v2;

            if ((3 * vH) < 2)
                return (v1 + (v2 - v1) * ((2.0f / 3) - vH) * 6);

            return v1;
        }
    }
}
