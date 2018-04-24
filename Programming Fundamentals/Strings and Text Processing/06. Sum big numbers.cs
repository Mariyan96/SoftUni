using System;
using System.Collections.Generic;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            string first = Console.ReadLine();
            string second  = Console.ReadLine();
            int zerosInfront = Math.Abs(first.Length - second.Length);
            if (first.Length>second.Length)
            {
                second = new string('0', zerosInfront) + second;
            }
            else
            {
                first = new string('0', zerosInfront) + first;
            }
            char left='0';
            List<char> result = new List<char>();
            for (int i = first.Length-1; i >=0; i--)
            {
              
                int sumOfIndex = int.Parse(first[i].ToString()) 
                               + int.Parse(second[i].ToString())
                               + int.Parse(left.ToString());
                left = '0';

                if (sumOfIndex>9)
                {
                    left = '1';
                    result.Add(sumOfIndex.ToString()[1]);

                }
                else
                {
                    result.Add(sumOfIndex.ToString()[0]);
                }
                if (sumOfIndex>9&&i==0)
                {
                    result.Add('1');
                }
            }
            result.Reverse();
            Console.WriteLine(string.Join("",result));
        }
    }
}
