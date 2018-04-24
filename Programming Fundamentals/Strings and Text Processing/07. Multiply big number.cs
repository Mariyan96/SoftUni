using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;

namespace ConsoleApp26
{
    class Program
    {
        static void Main(string[] args)
        {
            string first = Console.ReadLine();
            int second = int.Parse(Console.ReadLine());
            int sum = 0;
            int reminder = 0;
            StringBuilder result = new StringBuilder();

            for (int i = first.Length - 1; i >= 0; i--)
            {
                sum = ((first[i] - '0') * second) + reminder;
                reminder = 0;

                if (sum > 9)
                {
                    result.Append(sum % 10);
                    reminder = sum / 10;
                }
                else
                {
                    result.Append(sum % 10);

                }
                if (i == 0 & reminder != 0)
                {
                    result.Append(reminder);
                }
            }


            Console.WriteLine(result.ToString().TrimEnd('0').ToCharArray().Reverse().ToArray());
        }
    }
}
