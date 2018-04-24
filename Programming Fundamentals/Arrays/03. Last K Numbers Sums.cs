using System;

namespace ConsoleApp15
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int k = int.Parse(Console.ReadLine());
            long sum = 1;
            long[] matrixOfNumbers = new long[n];
            matrixOfNumbers[0] = 1;
            for (int i = 1; i < n; i++)
            {
                for (int j = i - k; j < i - 1; j++)
                {
                    if (j < 0)
                    {
                        continue;
                    }
                    sum += matrixOfNumbers[j];
                }
                matrixOfNumbers[i] = sum;

            }
            for (int i = 0; i < n; i++)
            {
                Console.WriteLine(matrixOfNumbers[i]);
            }
        }
    }
}
