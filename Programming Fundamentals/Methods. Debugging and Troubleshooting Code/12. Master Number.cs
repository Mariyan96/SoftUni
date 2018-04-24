using System;

namespace ConsoleApp10
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());
            for (int i = 1; i <= number; i++)
            {
                if (IsPolindrome(i)==true)
                {
                    if (SumOfDigitsDevidiblebySeven(i)==true)
                    {
                            Console.WriteLine(i);
                    }
                }
            }
        }
        static bool IsPolindrome(int number)
        {
            string numberInString = number.ToString();
            int numberLenght = numberInString.Length;
            string Polidrome = null;
            for (int i = numberLenght - 1; i>=0 ; i--)
            {
                char currentdigit = numberInString[i];
                Polidrome += currentdigit;
            }
            if (numberInString.Equals(Polidrome))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        static bool SumOfDigitsDevidiblebySeven(int number)
        {
            bool ContainsEvenNumber = false;
            int sumOfnumbers = 0;
            while (number>0)
            {
                
                int currentnumber = number % 10;
                sumOfnumbers += currentnumber;
                if (currentnumber%2==0)
                {
                    ContainsEvenNumber = true;
                }
                number /= 10;

            }
            if (sumOfnumbers%7==0&&ContainsEvenNumber==true)
            {
                return true;
            }
            else
            {
                return false;
            }

        }
    }
}
