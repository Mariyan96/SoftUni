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
            string[] input = Console.ReadLine().Split().ToArray();
            string first = input[0];
            string second = input[1];
            int sum = 0;
            int currentindex = 0;

            if (first.Length!=second.Length)
            {
                for (int i = 0; i < Math.Min(first.Length, second.Length); i++)
                {
                    sum += first[i] * second[i];
                    currentindex = i+1;
                }
                if (first.Length>second.Length)
                {
                    for (int i = currentindex; i < first.Length; i++)
                    {
                        sum += first[i];
                    }
                }
                else
	            {
                    for (int i = currentindex; i < second.Length; i++)
                    {
                        sum += second[i];
                    }

                }
            }
            else
            {
                for (int i = 0; i < Math.Min(first.Length, second.Length); i++)
                {
                    sum += first[i] * second[i];
                }
            }
           
            Console.WriteLine(sum);
        }
    }
}
