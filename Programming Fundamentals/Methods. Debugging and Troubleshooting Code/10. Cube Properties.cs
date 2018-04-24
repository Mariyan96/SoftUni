using System;

namespace ConsoleApp10
{
    class Program
    {
        static void Main(string[] args)
        {
            double sideOfCube = double.Parse(Console.ReadLine());
            string typeOfParameter = Console.ReadLine().ToLower();
            double result = 0.0;

            switch (typeOfParameter)
            {
                case "face":
                   result= CalculatingFace(sideOfCube);
                    break;
                case "space":
                    result = CalculatingSpace(sideOfCube);
                    break;
                case "volume":
                    result = CalculatingVolume(sideOfCube);
                    break;
                case "area":
                    result = CalculatingArea(sideOfCube);
                    break;
            }
            Console.WriteLine($"{result:f2}");


        }

        static double CalculatingFace(double a)
        {
            double FaceDiagonal = Math.Sqrt(2 * (a * a));
            return FaceDiagonal;

        }
        static double CalculatingSpace(double a)
        {
            double SpaceDiagonal = Math.Sqrt(3 * (a * a));

            return SpaceDiagonal;
        }
        static double CalculatingVolume(double a)
        {
            double volume = a * a * a;
            return volume;
        }
        static double CalculatingArea(double a)
        {
            double Area = (a * a) * 6;
            return Area;
        }
    }
}
