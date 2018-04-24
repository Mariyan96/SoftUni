using System;

namespace ConsoleApp10
{
    class Program
    {
        static void Main(string[] args)
        {
            Input();
        }
        static void Input()
        {
            Printing( Console.ReadLine());
        }
        static void Printing(string name)
        {
            Console.WriteLine($"Hello, {name}!");
        }
    }
}
