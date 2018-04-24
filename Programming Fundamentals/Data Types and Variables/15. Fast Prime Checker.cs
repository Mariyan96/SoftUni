using System;

namespace ConsoleApp7
{
    class Program
    {
        static void Main(string[] args)
        {
            int currentnumber = int.Parse(Console.ReadLine());
            for (int i = 2; i <= currentnumber; i++)
            {
                bool isPrime = true;
                for (int j = 2; j <= Math.Sqrt(i); j++)
                {
                    if (i % j == 0)
                    {
                        isPrime = false;
                        break;
                    }
                }
                Console.WriteLine($"{i} -> {isPrime}");
            }

        }
    }
}
