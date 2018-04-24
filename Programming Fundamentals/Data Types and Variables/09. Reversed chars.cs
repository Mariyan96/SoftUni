using System;

namespace ConsoleApp7
{
    class Program
    {
        static void Main(string[] args)
        {
            //First name
            //Last name
            //Age(0...100)
            //Gender(m or f)
            //Personal ID number(e.g. 8306112507)
            //Unique employee number(27560000…27569999)

            string firstName = Console.ReadLine();
            string secondName = Console.ReadLine();
            string third = Console.ReadLine();
            Console.WriteLine($"{third}{secondName}{firstName}");

        }
    }
}
