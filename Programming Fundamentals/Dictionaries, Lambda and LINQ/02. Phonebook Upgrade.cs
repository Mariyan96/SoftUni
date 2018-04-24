using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp22
{
    class Program
    {
        static void Main(string[] args)
        {
           
            Dictionary <string,string> people = new Dictionary<string, string>();
           
            string[] input;

            do
            {
                input = Console.ReadLine().Split(' ').ToArray();
                string command = input[0];
                if (command == "A")
                {
                    if (people.ContainsKey(input[1]))
                    {
                        people.Remove(input[1]);
                        people.Add(input[1], input[2]);
                    }
                    else
                    {
                        people.Add(input[1], input[2]);
                    }
                }
                if (command=="S")
                {
                    if (people.ContainsKey(input[1]))
                    {
                        foreach (var person in people)
                        {
                            if (input[1]==person.Key)
                            {
                                Console.WriteLine("{0} -> {1}", person.Key, person.Value);

                            }

                        }
                    }
                    else
                    {
                        Console.WriteLine("Contact {0} does not exist.",input[1]);
                    }
                }
              
                
                if (command=="ListAll")
                {
                    
                    foreach (var item in people.OrderBy(x=>x.Key))
                    {
                        Console.WriteLine("{0} -> {1}", item.Key, item.Value);

                    }
                }
               
            } while (input[0] != "END");


            
        }
    }
}
