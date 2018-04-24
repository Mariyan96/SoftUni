using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp11
{
    class Program
    {
        static void Main(string[] args)
        {
            Random randomNumber = new Random();
            string input = Console.ReadLine();
            string[] words = input.Split().ToArray();

            for (int i = 0; i < words.Length; i++)
            {
                int currentnumber = randomNumber.Next(0, words.Length);
                int currentnumber2 = randomNumber.Next(0, words.Length);
                string currentWord = words[currentnumber];
                words[currentnumber] = words[currentnumber2];
                words[currentnumber2] = currentWord;
            }
            Console.WriteLine(string.Join(Environment.NewLine, words));
            
        }
    }
   
}