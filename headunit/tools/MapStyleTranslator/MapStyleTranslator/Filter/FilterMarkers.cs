namespace MapStyleTranslator.Filter
{
    public static class FilterMarkers
    {
        public const string Exists = "has";
        public const string DoesNotExist = "!has";

        public const string Equality = "==";
        public const string Inequality = "!=";
        public const string GreaterThan = ">";
        public const string GreaterThanOrEqual = ">=";
        public const string LessThan = "<";
        public const string LessThanOrEqual = "<=";

        public const string SetInclusion = "in";
        public const string SetExclusion = "!in";

        public const string LogicalAnd = "all";
        public const string LogialOr = "any";
        public const string LogicalNor = "none";
    }
}
