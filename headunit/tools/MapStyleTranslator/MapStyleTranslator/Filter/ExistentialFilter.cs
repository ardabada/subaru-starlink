using Newtonsoft.Json.Linq;

namespace MapStyleTranslator.Filter
{
    public class ExistentialFilter : IFilter
    {
        public static readonly string[] Markers = new string[] { 
            FilterMarkers.Exists, 
            FilterMarkers.DoesNotExist 
        };

        private ExistentialFilter(string fn, string key)
        {
            this.Function = fn;
            this.Key = key;
        }

        public string Function { get; }

        public string Key { get; }

        public static bool TryParse(JArray source, out IFilter? result)
        {
            if (source is null || source.Count < 2)
            {
                result = null;
                return false;
            }

            var marker = source[0].ToString();
            if (Markers.Contains(marker))
            {
                result = new ExistentialFilter(marker, source[1].ToString());
                return true;
            }

            result = null;
            return false;
        }
    }
}
