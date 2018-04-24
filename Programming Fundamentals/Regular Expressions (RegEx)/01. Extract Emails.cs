using System;
using System.Text.RegularExpressions;

namespace ConsoleApp27
{
    class Program
    {
        static void Main(string[] args)
        {
            string text = Console.ReadLine();
            string findEmail = @"(^|(?<=\s))([a-z0-9]+)([_\.-]?[a-z0-9])+@([a-z0-9])+([-.][a-z0-9]+)*\.([a-z0-9]+)([-.][a-z-0-9]+)*";
            MatchCollection matches = Regex.Matches(text, findEmail);
            foreach (Match m in matches)
            {
                Console.WriteLine(m.Value);
            }

        }
    }
}
