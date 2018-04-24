using System;

namespace ConsoleApp10
{
    class Program
    {
        static void Main(string[] args)
        {
            double maxDistance = double.MinValue;
            double maxx1 = 0.0;
            double maxy1 = 0.0;
            double maxx2 = 0.0;
            double maxy2 = 0.0;

            for (int i = 1; i <= 2; i++)
            {
                double x1 = double.Parse(Console.ReadLine());
                double y1 = double.Parse(Console.ReadLine());
                double x2 = double.Parse(Console.ReadLine());
                double y2 = double.Parse(Console.ReadLine());
                double currentdistance = CalculatingDistance(x1, y1, x2, y2);

                if (currentdistance>=maxDistance)
                {
                    maxDistance = currentdistance;
                    maxx1 = x1;
                    maxx2 = x2;
                    maxy1 = y1;
                    maxy2 = y2;
                }
            }

            PrintCloserPoint(maxx1, maxy1, maxx2, maxy2);

            
            

          
               
        }
        static double CalculatingDistance(double x1, double y1, double x2, double y2)
        {

            double distance = Math.Sqrt(Math.Pow((x1-x2),2) + Math.Pow((y1-y2),2));

            return distance;
        }
        static void PrintCloserPoint(double x1, double y1, double x2, double y2)
        {
            double firstposition = Math.Sqrt((x1 * x1) + (y1 * y1));
            double secondpositon = Math.Sqrt((x2 * x2) + (y2 * y2));

            if (firstposition<=secondpositon)
            {
                Console.WriteLine($"({x1}, {y1})({x2}, {y2})");

            }
            else
            {
                Console.WriteLine($"({x2}, {y2})({x1}, {y1})");
            }

        }

    }
}
