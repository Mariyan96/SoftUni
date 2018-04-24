using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp23
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> numbers = Console.ReadLine().Split().ToList();
            long sum = 0;
            for (int i = 0; i < numbers.Count; i++)
            {
               int currentnumber=  reversingNumbers(numbers[i]);
                sum += currentnumber;

            }
            Console.WriteLine(sum);
        }
        static int reversingNumbers(string number)
        {
            string reversedNumberInString = "";
            for (int i = number.Length-1; i >= 0; i--)
            {
                char symbol = number[i];
                reversedNumberInString += symbol.ToString();
            }
            int reversedNum =int.Parse(reversedNumberInString);
            return reversedNum;
        }
    }
}
