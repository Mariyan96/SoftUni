    using System;
    using System.Numerics;

    namespace ConsoleApp4
    {
        class Program
        {
            static void Main(string[] args)
            {
            int a = int.Parse(Console.ReadLine());
            int b = int.Parse(Console.ReadLine());
            
            Console.WriteLine($"Before: \na = {a} \nb = {b}");
            int c = 0;
            c = a;
            a = b;
            b = c;

            Console.WriteLine($"After: \na = {a} \nb = {b}");
            }
        }
    }
