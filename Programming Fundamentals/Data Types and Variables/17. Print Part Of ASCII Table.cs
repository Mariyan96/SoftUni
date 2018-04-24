using System;

namespace ConsoleApp7
{
    class Program
    {
        static void Main(string[] args)
        {
            int first = int.Parse(Console.ReadLine());
            int second   = int.Parse(Console.ReadLine());

            char firstchar = (char)first;

            for (char i = firstchar; i <= (char)second; i++)
            {
                Console.Write($"{i} ");
            }
        }
    }
}
