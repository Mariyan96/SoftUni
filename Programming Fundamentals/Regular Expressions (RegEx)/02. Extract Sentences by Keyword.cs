using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace ConsoleApp27
{
    class Program
    {
        static void Main(string[] args)
        {
            string word = Console.ReadLine();
            string input = Console.ReadLine();
            string[] Allsentences = input.Split(new char[] { '.', '!', '?' }, StringSplitOptions.RemoveEmptyEntries).ToArray();
            string patern = $@"\b{word}\b";

            foreach (var sentence in Allsentences)
            {
                if (Regex.IsMatch(sentence,patern))
                {
                    Console.WriteLine(sentence);
                }
            }
        }
    }
}
