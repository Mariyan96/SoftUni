using System;

namespace ConsoleApp8
{
    class Program
    {
        static void Main(string[] args)
        {
            double distanceinmeters = double.Parse(Console.ReadLine());
            double hours = double.Parse(Console.ReadLine());
            double minutes = double.Parse(Console.ReadLine());
            double seconds = double.Parse(Console.ReadLine());

            double allseconds = seconds + (minutes * 60) + (hours * 3600);
            double allhours = hours + (minutes / 60) + (seconds / 3600);
            double metersforsecond = distanceinmeters / allseconds;
            double miles = distanceinmeters / 1609.0 ;
            double milesperhour = miles / allhours;
            double kmperhour = (distanceinmeters / 1000.0) / allhours;

            Console.WriteLine($"{metersforsecond:f6}");
            Console.WriteLine($"{kmperhour:f6}");
            Console.WriteLine($"{milesperhour:f6}");




        }
    }
}
