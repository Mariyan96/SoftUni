using System;
using System.Numerics;

namespace ConsoleApp4
{
    class Program
    {
        static void Main(string[] args)
        {

            //1 centuries = 100 years = 36524 days = 876576 
            //hours = 52594560 minutes = 3155673600 seconds = 3155673600000 
            //milliseconds = 3155673600000000 
            //microseconds = 3155673600000000000 nanoseconds

            int centuries = int.Parse(Console.ReadLine());
            int years = centuries * 100;
            int days =(int)( years * 365.2422);
            int hours = (days * 24);
            long minutes = hours * 60;
            long seconds = minutes * 60;
            long miliseconds = seconds * 1000;
            BigInteger microseconds = miliseconds * 1000;
            BigInteger nanoseconds = microseconds * 1000;

            Console.WriteLine($"{centuries} centuries = {years} years = " +
                $"{days} days = {hours} hours = {minutes} minutes = {seconds} seconds = {miliseconds} milliseconds = {microseconds} microseconds = {nanoseconds} nanoseconds");


        }
    }
}
