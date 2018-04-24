using System;

namespace ConsoleApp10
{
    class Program
    {
        static void Main(string[] args)
        {
            string currentNumber =Console.ReadLine();
            
            string result = ReversingOrderDouble(currentNumber);
            Console.WriteLine(result);
        }
        static string ReversingOrderDouble(string number)
        {
            int numberLenght = number.Length-1;
            string result = null;
                for (int i = numberLenght; i >= 0; i--)
                {
                    char currentsymbol = number[i];
                    result += currentsymbol;
                }
            return result;
        }
    }
}
