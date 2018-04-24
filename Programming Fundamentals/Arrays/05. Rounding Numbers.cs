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
            double[] numbers = stringarr.Select(double.Parse).ToArray();


            for (int i = 0; i < numbers.Length; i++)
            {
                double currentnumber = numbers[i];
                numbers[i] = Math.Round(numbers[i], MidpointRounding.AwayFromZero);
                Console.WriteLine($"{currentnumber} => {numbers[i]}");
            }

        }
    }
}
