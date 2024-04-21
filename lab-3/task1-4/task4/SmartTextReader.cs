using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace task4
{
    public class SmartTextReader : ITextReader
    {
        public string[][] ReadText(string filePath)
        {
            string[] lines = File.ReadAllLines(filePath);
            string[][] result = new string[lines.Length][];
            for (int i = 0; i < lines.Length; i++)
            {
                result[i] = lines[i].Split(' ');
            }
            return result;
        }
    }
}
