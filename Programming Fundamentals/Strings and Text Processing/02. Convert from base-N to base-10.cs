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
            string [] input = Console.ReadLine().Split().ToArray();
            

            int baseIn = int.Parse(input[0]);
            string number = input[1];
            int count = 0;
            double result = 0;
            count = number.Length - 1;

            for (int i = 0; i <number.Length ; i++)
            {
                result += Math.Pow(baseIn, count)*int.Parse(number[i].ToString());
                count--;
            }
            

            Console.WriteLine(result);

        }
    }
}
