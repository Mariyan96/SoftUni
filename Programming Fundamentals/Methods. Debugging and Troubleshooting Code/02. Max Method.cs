using System;

namespace ConsoleApp10
{
    class Program
    {
        static void Main(string[] args)
        {
            var first = int.Parse(Console.ReadLine());
            var second = int.Parse(Console.ReadLine());
            var third = int.Parse(Console.ReadLine());
            int firstOrSecond = GetMax(first, second);
            
            int HighestNumber = GetMax(firstOrSecond, third);
            Console.WriteLine(HighestNumber);
        }
        
            
        static int GetMax(int a, int b)
        {

            if (a>=b)
            {
                return a;
            }
            else
            {
                return b;
            }

        }
        
        

    }
}
