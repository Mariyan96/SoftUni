using System;

namespace ConsoleApp10
{
    class Program
    {
        static void Main(string[] args)
        {
            string numberToRead = Console.ReadLine();
            
            string textToPrint = Reading(numberToRead);
            Console.WriteLine(textToPrint);
        }
        static string Reading(string currentNumber)
        {
            int lenghtOfnumber = currentNumber.Length - 1;
            string lastdigit = currentNumber.Substring(lenghtOfnumber);
            int lastDigitAsInt = int.Parse(lastdigit);
            string result = " ";

            switch (lastDigitAsInt)
            {
                case 0:
                    result = "zero";
                    break;
                case 1:
                    result = "one";
                    break;
                case 2:
                    result = "two";
                    break;
                case 3:
                    result = "three";
                    break;
                case 4:

                    result = "four";
                    break;
                case 5:
                    result = "five";
                    break;
                case 6:
                    result = "six";
                    break;
                case 7:
                    result = "seven";
                    break;
                case 8:
                    result = "eight";
                    break;
                case 9:
                    result = "nine";
                    break;

            }
            return result;
        }
    }
}
