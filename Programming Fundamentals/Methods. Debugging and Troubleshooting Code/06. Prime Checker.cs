using System;

namespace ConsoleApp10
{
    class Program
    {
        static void Main(string[] args)
        {
            long numberToBegin = long.Parse(Console.ReadLine());
            Console.WriteLine(IsPrime(numberToBegin));
        }

        static bool IsPrime(long number)
        {
            if (number==0||number==1)
            {
                return false;
            }
            

            for (int i = 2; i <= Math.Sqrt(number); i++)
            {
                if (number%i==0)
                {
                    return false;
                }
                

            }

            return true;
        }
    }
}
