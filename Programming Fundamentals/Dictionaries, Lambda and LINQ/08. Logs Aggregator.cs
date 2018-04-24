using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp4
{
    class Program
    {
        static void Main(string[] args)
        {
            int numberOfInputs = int.Parse(Console.ReadLine());
            SortedDictionary<string, SortedDictionary<string, int>> users = new SortedDictionary<string, SortedDictionary<string, int>>();

            for (int i = 0; i < numberOfInputs; i++)
            {
                string[] separatedInput = Console.ReadLine()
                    .Split()
                    .ToArray();
                string username = separatedInput[1];
                string adress = separatedInput[0];
                int duration = int.Parse(separatedInput[2]);
                if (!users.ContainsKey(username))
                {
                    users.Add(username, new SortedDictionary<string, int>());
                }
                if (!users[username].ContainsKey(adress))
                {
                    users[username].Add(adress, duration);
                }
                else
                {
                    users[username][adress] +=  duration;
                }
            }
            foreach (var user in users)
            {
                List<string> listOfIps = user.Value.Keys.ToList();
                long sumOfDuration = user.Value.Values.Sum();
                Console.WriteLine($"{user.Key}: {sumOfDuration} [{string.Join(", ",listOfIps)}]");
            }
        }
    }
}