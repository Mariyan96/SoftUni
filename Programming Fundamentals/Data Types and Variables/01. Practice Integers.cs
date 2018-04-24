using System;
using System.Numerics;

namespace ConsoleApp4
{
    class Program
    {
        static void Main(string[] args)
        {

            // -100
            // 128
            // - 3540
            // 64876
            // 2147483648
            // - 1141583228
            // - 1223372036854775808


            sbyte first = sbyte.Parse(Console.ReadLine());
            byte sfirst = byte.Parse(Console.ReadLine());
            short second = short.Parse(Console.ReadLine());
            long usecond = long.Parse(Console.ReadLine());
            long third = long.Parse(Console.ReadLine());
            long uthird = long.Parse(Console.ReadLine());
            long forth = long.Parse(Console.ReadLine());
            

            Console.WriteLine(first);
            Console.WriteLine(sfirst);
            Console.WriteLine(second);
            Console.WriteLine(usecond);
            Console.WriteLine(third);
            Console.WriteLine(uthird);
            Console.WriteLine(forth);
            


        }
    }
}
