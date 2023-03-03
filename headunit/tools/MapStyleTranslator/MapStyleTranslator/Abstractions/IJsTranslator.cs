namespace MapStyleTranslator.Abstractions
{
    public interface IJsTranslator<in T>
    {
        string Translate(T source);
    }
}
