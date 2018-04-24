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
            int age = int.Parse(Console.ReadLine());
            string gender = Console.ReadLine();
            long number = long.Parse(Console.ReadLine());
            long UEnumber = long.Parse(Console.ReadLine());

            Console.WriteLine($"First name: {firstName}");
            Console.WriteLine($"Last name: {secondName}");
            Console.WriteLine($"Age: {age}");
            Console.WriteLine($"Gender: {gender}");
            Console.WriteLine($"Personal ID: {number}");
            Console.WriteLine($"Unique Employee number: {UEnumber}");


        }
    }
}
