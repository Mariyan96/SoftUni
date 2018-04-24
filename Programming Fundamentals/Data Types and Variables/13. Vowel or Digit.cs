using System;

namespace ConsoleApp7
{
    class Program
    {
        static void Main(string[] args)
        {
            char thing = char.Parse(Console.ReadLine());

            if (thing =='a'||thing=='e'||thing=='i'||thing=='o'||thing=='u')
            {
                Console.WriteLine("vowel");
            }
            else if (char.IsNumber(thing))
            {
                Console.WriteLine("digit");
            }
            else
            {
                Console.WriteLine("other");
            }


        }   
    }
}
