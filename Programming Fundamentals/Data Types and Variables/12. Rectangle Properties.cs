using System;

namespace ConsoleApp7
{
    class Program
    {
        static void Main(string[] args)
        {
            double a = double.Parse(Console.ReadLine());
            double b = double.Parse(Console.ReadLine());
            double perimeter = a + a + b + b;
            double area = a * b;
            double diagonal = Math.Sqrt((a * a) + (b * b));
            Console.WriteLine(perimeter);
            Console.WriteLine(area);
            Console.WriteLine(diagonal);


        }
    }
}
