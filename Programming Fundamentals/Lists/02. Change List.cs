using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp23
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = Console.ReadLine().Split(new char[] { ' ' },StringSplitOptions.RemoveEmptyEntries).Select(x => int.Parse(x)).ToList();
            List <string> arrCommands =Console.ReadLine().Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
                                       .ToList();
            while (true)
            {
               
                switch (arrCommands[0])
                {
                    case "Delete":
                        string toRemove = arrCommands[1].ToString();
                        int numberToRemove = int.Parse(toRemove);
                        numbers.RemoveAll(x=>x==numberToRemove);
                       
                        
                        break;
                    case "Insert":
                        string toInsert = arrCommands[1].ToString();
                        string placeToInsert = arrCommands[2].ToString();
                        int placing = int.Parse(placeToInsert);
                        int numberToinsert = int.Parse(toInsert);
                        numbers.Insert(placing, numberToinsert);
                        break;
                }
                arrCommands = Console.ReadLine().Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
                                       .ToList();
                if (arrCommands[0] == "Even")
                {
                    
                    Console.WriteLine(string.Join(" ", numbers.FindAll(x => x % 2 == 0)));
                    break;
                }
                if (arrCommands[0] == "Odd")
                {
                    numbers.FindAll(x => x % 2 == 1);
                    Console.WriteLine(string.Join(" ", numbers.FindAll(x => x % 2 == 1)));
                    break;
                }
            }

          
        }
    }
}
