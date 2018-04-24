using System;
using System.Linq;

namespace ConsoleApp15
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string[] stringarr = input.Split(' ');
            int[] array = stringarr.Select(int.Parse).ToArray();

            int count = 0;
            while (count!=array.Length-1)
            {
                for (int i = 0; i < array.Length-1; i++)
                {
                    array[i] = array[i] + array[i + 1];
                }
                count++;
                
            }
            Console.WriteLine(array[0]);
   
        }
    }
}
