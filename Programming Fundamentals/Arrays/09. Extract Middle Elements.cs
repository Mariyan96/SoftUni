using System;
using System.Linq;

namespace ConsoleApp15
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string[] stringArr = input.Split(' ');
            int[] numbers = stringArr.Select(int.Parse).ToArray();
            int arrlenght = numbers.Length;
            int index = 0;
            if (arrlenght==1)
            {
                Console.WriteLine($"{{ {numbers[0]} }}");
            }
            else if (arrlenght%2==0)
            {
                index = (arrlenght / 2)-1;
                Console.WriteLine($"{{ {numbers[index]} }}, {{ {numbers[index+1]} }}");
            }
            else if (arrlenght%2==1)
            {
                index = arrlenght / 2-1;
                Console.WriteLine($"{{ {numbers[index]} }}, {{ {numbers[index+1]} }}, {{ {numbers[index+2]} }}");
            }
        }
    }
}
