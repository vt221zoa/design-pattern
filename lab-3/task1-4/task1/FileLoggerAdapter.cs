namespace task1
{
    public class FileLoggerAdapter : ILogger
    {
        public readonly FileWriter fileWriter;

        public FileLoggerAdapter(FileWriter fileWriter)
        {
            this.fileWriter = fileWriter;
        }

        public void Log(string message)
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine($"Log: {message}");
            Console.ResetColor();
            fileWriter.WriteLine($"Log: {message}");
        }

        public void Error(string message)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine($"Error: {message}");
            Console.ResetColor();
            fileWriter.WriteLine($"Error: {message}");
        }

        public void Warn(string message)
        {
            Console.ForegroundColor = ConsoleColor.DarkYellow;
            Console.WriteLine($"Warning: {message}");
            Console.ResetColor();
            fileWriter.WriteLine($"Warning: {message}");
        }
    }
}
