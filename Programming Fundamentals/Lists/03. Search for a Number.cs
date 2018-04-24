using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp23
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = Console.ReadLine().Split().Select(x=>int.Parse(x)).ToList();
            int[] numforfuncions = Console.ReadLine().Split().Select(x => int.Parse(x)).ToArray();

            numbers.RemoveRange(0, numforfuncions[1]);

            if (numbers.Contains(numforfuncions[2]))
            {
                Console.WriteLine("YES!");
            }
            else
            {
                Console.WriteLine("NO!");
            }
        }
    }
}
