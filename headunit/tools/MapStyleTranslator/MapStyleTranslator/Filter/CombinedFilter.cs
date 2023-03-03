using Newtonsoft.Json.Linq;

namespace MapStyleTranslator.Filter
{
    public class CombinedFilter : IFilter
    {
        public static readonly string[] Markers = new string[] { FilterMarkers.LogialOr, FilterMarkers.LogicalAnd, FilterMarkers.LogicalNor };

        private CombinedFilter(string fn, IFilter[] filters)
        {
            this.Function = fn;
            this.Filters = filters;
        }

        public string Function { get; }

        public IFilter[] Filters { get; }

        public static bool TryParse(JArray source, out IFilter? result)
        {
            if (source is null || source.Count <= 1)
            {
                result = null;
                return false;
            }

            var marker = source[0].ToString();
            if (Markers.Contains(marker))
            {
                result = new CombinedFilter(marker, source.Skip(1).Select(x => FilterFactory.Parse(x)).Where(x => x is not null).Cast<IFilter>().ToArray());
                return true;
            }

            result = null;
            return false;
        }
    }
}
