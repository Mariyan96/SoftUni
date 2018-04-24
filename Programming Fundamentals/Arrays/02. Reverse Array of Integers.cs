    using System;

    namespace ConsoleApp10
    {
        class Program
        {
            static void Main(string[] args)
            {
                int numbersOfNumber = int.Parse(Console.ReadLine());
                int[] collectionOfnumbers=new int[numbersOfNumber];
                for (int i = 0; i < numbersOfNumber; i++)
                {
                    int currentnumber = int.Parse(Console.ReadLine());
                    collectionOfnumbers[i] = currentnumber;
                }

                for (int i = numbersOfNumber-1; i >= 0; i--)
                {
                    int number = collectionOfnumbers[i];
                    Console.Write($"{number} ");
                }
            }
        }
    }
