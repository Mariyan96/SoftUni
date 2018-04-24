using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp23
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = Console.ReadLine().Split().Select(x => int.Parse(x)).ToList();
            int count = 1;
            int maxcount = 0;
            int longestInt = 0;
            for (int i = 1; i < numbers.Count; i++)
            {
                if (numbers[i]==numbers[i-1])
                {
                    count++;
                }
                else
                {
                    count = 1;

                }
                if (count>maxcount)
                {
                    maxcount = count;
                    longestInt = numbers[i-1];
                }
            }

            for (int i = 0; i < maxcount; i++)
            {
                Console.Write($"{longestInt} ");
            }
            Console.WriteLine();
        }
    }
}
