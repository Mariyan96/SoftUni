using System;
using System.Numerics;

namespace ConsoleApp10
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());
            BigInteger factorial = 1;
            for (int i = 1; i <= number; i++)
            {
                factorial *= i;
            }
            int count = 0;
            while (true)
            {
                BigInteger lastdigit = factorial % 10;
               
                if (lastdigit==0)
                {
                    count++;
                    factorial /= 10;
                   
                }
                else
                {
                    break;
                }      
            }
            Console.WriteLine(count);
        }
    }
}
