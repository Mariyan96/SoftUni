using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace ConsoleApp27
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine()
                .Split(' ').Select(x=>int.Parse(x)).ToArray();
            int toSkip = numbers[0];
            int  toTake= numbers[1];


            string text = Console.ReadLine();
            string patern = @"\|<([\w]{"+ toSkip + @"})([\w]{0," + toTake + @"})";

            MatchCollection Mathes = Regex.Matches(text, patern);
            List<string> result = new List<string>();
            foreach (Match m in Mathes)
            {
                result.Add(m.Groups[2].Value);
            }
            Console.WriteLine(string.Join(", ", result));
        }
    }
}
