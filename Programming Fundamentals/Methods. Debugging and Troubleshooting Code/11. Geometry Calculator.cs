using System;

namespace ConsoleApp10
{
    class Program
    {
        static void Main(string[] args)
        {
            double result = 0.0;
            double a = 0.0;
            double h = 0.0;
            string figureType = Console.ReadLine().ToLower();
            switch (figureType)
            {
                case "triangle":
                    a = double.Parse(Console.ReadLine());
                    h = double.Parse(Console.ReadLine());
                    result = AreaOfTriangle(a,h);
                    break;
                case "circle":
                    a = double.Parse(Console.ReadLine());
                    result = AreaOfCircle(a);
                    break;
                case "square":
                    a = double.Parse(Console.ReadLine());
                    result = AreaOfSquare(a);
                    break;
                case "rectangle":
                    a = double.Parse(Console.ReadLine());
                    h = double.Parse(Console.ReadLine());
                    result = AreaOfRectangle(a,h);
                    break;
            }
            Console.WriteLine($"{result:f2}");
        }

        static double AreaOfTriangle(double a, double h)
        {
            double triangle = (a * h) / 2;
            return triangle;
        }
        static double AreaOfRectangle(double a, double h)
        {
            double rectangle = a * h;
            return rectangle;
        }
        static double AreaOfSquare(double a)
        {
            double Area = (a * a);
            return Area;
        }
        static double AreaOfCircle(double a)
        {
            double circle = Math.PI * a * a;
            return circle;
        }
    }
}
