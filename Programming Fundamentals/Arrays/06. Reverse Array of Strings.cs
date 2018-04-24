using System;
using System.Linq;

namespace ConsoleApp15
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            string[] stringarr = input.Split(' ');

            Array.Reverse(stringarr);

            string result = string.Join(" ", stringarr);
            Console.WriteLine(result);

        }
    }
}
