using System;

namespace ConsoleApp10
{
    class Program
    {
        static void Main(string[] args)
        {
            int numberToBegin = int.Parse(Console.ReadLine());
            
            Console.WriteLine(CalculatitingFibonaci(numberToBegin));
        }
        static int CalculatitingFibonaci(int number)
        {
            int firstbefore = 0;
            int secondbefore = 1;
            int fibonaci = 1;
            int count = 0;
            while (count!=number)
            {
                fibonaci = firstbefore + secondbefore;
                firstbefore = secondbefore;
                secondbefore = fibonaci;
                count++;
            }
            return fibonaci;
        }
    }
}
