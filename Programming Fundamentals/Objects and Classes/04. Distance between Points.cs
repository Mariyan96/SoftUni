using System;
using System.Linq;
using System.Numerics;

namespace ConsoleApp24
{
    class Program
    {
        static void Main(string[] args)
        {
            string input1 = Console.ReadLine();
            string input2 = Console.ReadLine();
            int[] firstPoint = input1.Split().Select(int.Parse).ToArray();
            int [] secondPoint = input2.Split().Select(int.Parse).ToArray();

            double distance = Math.Sqrt(Math.Pow((firstPoint[0] - secondPoint[0]), 2) + Math.Pow((firstPoint[1] - secondPoint[1]),2));
            Console.WriteLine($"{distance:f3}");
        }
    }
}
