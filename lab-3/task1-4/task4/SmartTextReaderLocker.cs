using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace task4
{
    public class SmartTextReaderLocker : ITextReader
    {
        private readonly ITextReader textReader;
        private readonly Regex regex;

        public SmartTextReaderLocker(ITextReader textReader, string pattern)
        {
            this.textReader = textReader;
            regex = new Regex(pattern);
        }

        public string[][] ReadText(string filePath)
        {
            if (regex.IsMatch(filePath))
            {
                Console.WriteLine("Access denied!" + Path.GetFileName(filePath));
                return new string[0][];
            }
            else
            {
                return textReader.ReadText(filePath);
            }
        }
    }
}
