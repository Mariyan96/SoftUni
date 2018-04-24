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
           
            string[] inputOfWords = Console.ReadLine()
                .Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
                .ToArray();

            string first = inputOfWords[0];
            string second = inputOfWords[1];
            int fLenght =first.Distinct().Count();
            int sLenght = second.Distinct().Count(); 

            if (fLenght==sLenght)
            {
                Console.WriteLine("true");
            }
            else
            {
                Console.WriteLine("false");
            }

        }


    }
}
