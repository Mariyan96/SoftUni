using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp11
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            DateTime givenDatetime = DateTime.ParseExact(input, "d-M-yyyy",CultureInfo.InvariantCulture);
            Console.WriteLine(givenDatetime.DayOfWeek);
        }
    }
   
}