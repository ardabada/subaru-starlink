using Newtonsoft.Json.Linq;

namespace MapStyleTranslator.Filter
{
    public static class FilterFactory
    {
        public static IFilter? Parse(JToken? filter)
        {
            return Parse(filter as JArray);
        }
        public static IFilter? Parse(JArray? filter)
        {
            if (filter is null) return null;

            IFilter? result;
            if (ExistentialFilter.TryParse(filter, out result)) return result;
            if (ComparisonFilter.TryParse(filter, out result)) return result;
            if (SetMembershipFilter.TryParse(filter, out result)) return result;
            if (CombinedFilter.TryParse(filter, out result)) return result;

            return null;
        }
    }
}
