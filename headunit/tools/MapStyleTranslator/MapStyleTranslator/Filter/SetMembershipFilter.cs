using Newtonsoft.Json.Linq;

namespace MapStyleTranslator.Filter
{
    public class SetMembershipFilter : IFilter
    {
        public static readonly string[] Markers = new string[] { 
            FilterMarkers.SetInclusion, 
            FilterMarkers.SetExclusion 
        };

        private SetMembershipFilter(string fn, string key, string[] set)
        {
            this.Function = fn;
            this.Key = key;
            this.Set = set;
        }

        public string Function { get; }

        public string Key { get; }

        public string[] Set { get; }

        public static bool TryParse(JArray source, out IFilter? result)
        {
            if (source is null || source.Count <= 2)
            {
                result = null;
                return false;
            }

            var marker = source[0].ToString();
            if (Markers.Contains(marker))
            {
                result = new SetMembershipFilter(marker, source[1].ToString(), source.Skip(2).Select(x => x.ToString()).ToArray());
                return true;
            }

            result = null;
            return false;
        }
    }
}
