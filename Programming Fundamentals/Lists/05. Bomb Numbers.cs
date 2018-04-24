using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp23
{
    class Program
    {
        static void Main(string[] args)
        {
            List <int> numbers= Console
                .ReadLine()
                .Split()
                .Select(x => int.Parse(x))
                .ToList();
            int [] specialnumberandpower = Console
                .ReadLine()
                .Split()
                .Select(x => int.Parse(x))
                .ToArray();
            int specialnumber = specialnumberandpower[0];
            int power = specialnumberandpower[1];
            for (int i = 0; i < numbers.Count; i++)
            {
                if (numbers[i]==specialnumber)
                {
                    for (int j = 1; j <= power; j++)
                    {
                        if (i<j)
                        {
                            
                        }
                        else
                        {

                            numbers[i - j] = 0;

                        }
                    }
                    for (int k = 1; k <= power; k++)
                    {

                        if (k + i > numbers.Count - 1)
                        {
                            break;
                        }
                        else
                        {
                           numbers[i + k]=0;
                        }
                    }
                    numbers[i] = 0;
                    
                }
            }
            int sum = numbers.Sum();
            Console.WriteLine(sum);
        }
    }
}
