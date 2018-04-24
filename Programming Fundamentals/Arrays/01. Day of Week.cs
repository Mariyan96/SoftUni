using System;

namespace ConsoleApp10
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] daysofWeek = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" };

            int numberofDay = int.Parse(Console.ReadLine());

            if (numberofDay>=1&&numberofDay<=7)
            {
                Console.WriteLine(daysofWeek[numberofDay-1]);
            }
            else
            {
                Console.WriteLine("Invalid day!");
            }
        }
    }
}
