using Newtonsoft.Json.Linq;

namespace MapStyleTranslator.Filter
{
    public class ComparisonFilter : IFilter
    {
        public static readonly string[] Markers = new string[] { 
            FilterMarkers.Equality, 
            FilterMarkers.Inequality, 
            FilterMarkers.GreaterThan, 
            FilterMarkers.GreaterThanOrEqual, 
            FilterMarkers.LessThan,
            FilterMarkers.LessThanOrEqual 
        };

        private ComparisonFilter(string cmp, string property, JToken value)
        {
            this.Comparator = cmp;
            this.Property = property;
            this.Value = value;
        }

        public string Comparator { get; }

        public string Property { get; }

        public JToken Value { get; }

        public static bool TryParse(JArray source, out IFilter? result)
        {
            if (source is null || source.Count < 3)
            {
                result = null;
                return false;
            }

            var marker = source[0].ToString();
            if (Markers.Contains(marker))
            {
                result = new ComparisonFilter(marker, source[1].ToString(), source[2]);
                return true;
            }

            result = null;
            return false;
        }
    }
}
