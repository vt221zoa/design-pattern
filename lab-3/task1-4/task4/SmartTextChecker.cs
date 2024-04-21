using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace task4
{
    public class SmartTextChecker : ITextReader
    {
        private ITextReader textReader;

        public SmartTextChecker(ITextReader textReader)
        {
            this.textReader = textReader;
        }

        public string[][] ReadText(string filePath)
        {
            Console.WriteLine($"Opening file: {filePath}");
            string[][] result = textReader.ReadText(filePath);
            Console.WriteLine($"Successfully read file: {filePath}");
            Console.WriteLine($"Total lines: {result.Length}");
            int totalCharacters = 0;
            foreach (var line in result)
            {
                totalCharacters += line.Length;
            }
            Console.WriteLine($"Total characters: {totalCharacters}");
            Console.WriteLine($"Closing file: {filePath}");
            return result;
        }
    }
}
