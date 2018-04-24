using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace ConsoleApp30
{
    class Program
    {
        static void Main(string[] args)
        {
            string pattern1 = @"([a-zA-Z]+)(\<|\\|\|).+(\<|\\|\|)([A-Za-z]+)";
            string input1 = Console.ReadLine();
            string start = null ;
            string end = null; ;
            MatchCollection special = Regex.Matches(input1, pattern1);
            foreach (Match match in special)
            {
                start = match.Groups[1].Value;
                end = match.Groups[4].Value;
            }
            string input2 = Console.ReadLine();
            string pattern2 = $@"{start}(.*?){end}";
            MatchCollection result = Regex.Matches(input2, pattern2);
            if (result.Count == 0||special.Count==0)
            {
                Console.WriteLine("Empty result");
            }
            else
            {
                foreach (Match match in result)
                {
                    Console.Write(match.Groups[1].Value);
                }
                Console.WriteLine();
            }
        }
    }
}
