using System;

namespace ConsoleApp10
{
    class Program
    {
        static void Main(string[] args)
        {
            double x1 = double.Parse(Console.ReadLine());
            double y1 = double.Parse(Console.ReadLine());
            double x2 = double.Parse(Console.ReadLine());
            double y2 = double.Parse(Console.ReadLine());
            Console.WriteLine(Comparing(x1,y1,x2,y2));

        }
        static string Comparing(double x1, double y1, double x2, double y2)
        {
            string result = "";

           double firstdot = Math.Sqrt((x1*x1)+(y1*y1));
          
           double seconddot = Math.Sqrt((x2 * x2) + (y2 * y2));


            if (firstdot<seconddot)
            {
                result=($"({x1}, {y1})");
            }
            else
            {
                result= ($"({x2}, {y2})");

            }
            return result;
        }
    }
}
