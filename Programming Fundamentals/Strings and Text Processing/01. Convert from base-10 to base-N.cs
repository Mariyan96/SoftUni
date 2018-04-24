using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;

namespace ConsoleApp26
{
    class Program
    {
        static void Main(string[] args)
        {
            string [] input = Console.ReadLine().Split().ToArray();
            

            int toConvertIn = int.Parse(input[0]);
            BigInteger number =BigInteger.Parse( input[1]);
            string result = null;
            int count = 0;
            List<BigInteger> rem = new List<BigInteger>();
            while (number>0)
            {
                rem.Add(number % toConvertIn);
                count++;
                number /= toConvertIn;
            }
            rem.TrimExcess();
            rem.Reverse();
            for (int i = 0; i < count; i++)
            {
                result += rem[i].ToString();
            }

            Console.WriteLine(result);

        }
    }
}
