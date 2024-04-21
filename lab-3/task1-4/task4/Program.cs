

using task4;

class Program
{
    static void Main(string[] args)
    {
        ITextReader realReader = new SmartTextReader();

        ITextReader logger = new SmartTextChecker(realReader);

        ITextReader locker = new SmartTextReaderLocker(realReader, @"restricted.*");

        string filePath = "example.txt";
        logger.ReadText(filePath);

        string restrictedFilePath = "restricted_example.txt";
        locker.ReadText(restrictedFilePath);
    }
}

