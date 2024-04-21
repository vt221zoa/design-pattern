using System;

namespace task1
{
    class Program
    {
        static void Main(string[] args)
        {
            string filePath = "logs.txt";

            FileWriter fileWriter = new FileWriter(filePath);

            ILogger fileLogger = new FileLoggerAdapter(fileWriter);

            Random rand = new Random();
            int num1 = rand.Next(1, 11);
            int num2 = rand.Next(1, 11);
            int result = num1 * num2;

            Console.WriteLine($"Calculate the result of {num1}*{num2} ");

            string userInput = Console.ReadLine();
            int userResult;
            if (int.TryParse(userInput, out userResult))
            {
                if (userResult == result)
                {
                    Console.ForegroundColor = ConsoleColor.Green;
                    Console.WriteLine("Correct!");
                    Console.ResetColor();
                    fileLogger.Log($"User answered correctly: {num1}*{num2} = {userResult}");
                }
                else
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine("Incorrect result.");
                    Console.ResetColor();
                    fileLogger.Error($"User answered incorrectly: {num1}*{num2}={userResult}, correct answer is {result}");
                }
            }
            else
            {
                Console.ForegroundColor = ConsoleColor.DarkYellow;
                Console.WriteLine("Invalid format. Please enter a valid number.");
                Console.ResetColor();
                fileLogger.Warn($"User entered invalid format: {userInput}");
            }

            fileWriter.Close();
        }
    }
}