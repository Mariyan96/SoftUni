using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;

namespace ConsoleApp24
{
    class Program
    {
        static void Main(string[] args)
        {
            int numberOfPoints = int.Parse(Console.ReadLine());
            Point[] points = new Point[numberOfPoints];

            string input;
            for (int i = 0; i < numberOfPoints; i++)
            {
                input = Console.ReadLine();
                int[] coordinates = input.Split().Select(x => int.Parse(x)).ToArray();
                Point currentPoint = new Point { X = coordinates[0], Y = coordinates[1] };
                points[i] = currentPoint;
            }
            double minDistance = double.MaxValue;
            Point closestfirst = new Point();
            Point closestsecond = new Point();

            for (int i = 0; i < points.Length; i++)
            {
                for (int k = i+1; k < points.Length; k++)
                {
                    double currentDist = GetDistance(points[i], points[k]);
                    if (currentDist < minDistance)
                    {
                        minDistance = currentDist;
                        closestfirst = points[i];
                        closestsecond = points[k];
                    }
                }
            }
            Console.WriteLine($"{minDistance:f3}");
            Console.WriteLine($"({closestfirst.X}, {closestfirst.Y})");
            Console.WriteLine($"({closestsecond.X}, {closestsecond.Y})");

        }

        private static double GetDistance(Point first,Point second)
        {
            double distance = Math.Sqrt(Math.Pow((first.X - second.X), 2) + Math.Pow((first.Y - second.Y), 2));

            return distance;
        }
    }
    class Point
    {
        public int X { get; set; }
        public int Y { get; set; }

    }
}
