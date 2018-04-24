using System;
using System.Linq;

namespace ConsoleApp15
{
    class Program
    {
        static void Main(string[] args)
        {
            string array = Console.ReadLine();
            string[] stringarr = array.Split(' ');
            double[] numbers = stringarr.Select(double.Parse).ToArray();

            bool isEqual = false;

            for (int i = 0; i < numbers.Length; i++)
            {
                for (int j = i + 1; j < numbers.Length; j++)
                {
                    for (int k = 0; k < numbers.Length; k++)
                    {
                        double sum = numbers[i] + numbers[j];
                        if (sum == numbers[k])
                        {
                            Console.WriteLine($"{numbers[i]} + {numbers[j]} == {numbers[k]}");
                            isEqual = true;
                            break;
                        }
                    }
                }
            }

            if (isEqual == false)
            {
                Console.WriteLine("No");
            }
        }
    }
}
