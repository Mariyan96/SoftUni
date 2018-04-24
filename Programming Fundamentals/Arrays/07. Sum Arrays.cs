using System;
using System.Linq;

namespace ConsoleApp15
{
    class Program
    {
        static void Main(string[] args)
        {
            string firstInput = Console.ReadLine();
            string secondInput = Console.ReadLine();

            int[] firstArr = ParsingArrays(firstInput);
            int[] secondArr = ParsingArrays(secondInput);
            int[] resultArr;
            if (firstArr.Length>=secondArr.Length)
            {

               resultArr = new int[firstArr.Length];

            }
            else
            {
                resultArr = new int[secondArr.Length];
            }

            for (int i = 0; i < resultArr.Length; i++)
            {
                resultArr[i] = firstArr[i%firstArr.Length] + secondArr[i%secondArr.Length];
            }

            
            string result = string.Join(" ", resultArr);

            Console.WriteLine(result);
        }
        static int [] ParsingArrays(string array)
        {
            string[] currentArr = array.Split(' ');
            int[] currArrInt = currentArr.Select(int.Parse).ToArray();
            return currArrInt;
        }
    }
}
