using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;

namespace ConsoleApp26
{
    class Program
    {
        static void Main(string[] args)
        {
            string word = Console.ReadLine();
            string result = null;

            for (int i = 0; i < word.Length; i++)
            {
                result += GetUniCode(word[i]);
            }
            result = result.ToLower();
            Console.WriteLine(result);
        }

        private static string GetUniCode(char c)
        {
           
            return "\\u" + ((int)c).ToString("X4");
        }
    }
}
