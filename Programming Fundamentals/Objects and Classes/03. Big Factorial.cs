using System;
using System.Numerics;

namespace ConsoleApp24
{
    class Program
    {
        static void Main(string[] args)
        {
            BigInteger finalNumber = 1;
            int n = int.Parse(Console.ReadLine());

            for (int i = 1; i <= n; i++)
            {
                finalNumber *= i;
            }
            Console.WriteLine(finalNumber);
        }
    }
}
