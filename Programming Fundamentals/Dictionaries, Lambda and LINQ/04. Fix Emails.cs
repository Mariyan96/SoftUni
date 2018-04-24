using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp22
{
    class Program
    {
        static void Main(string[] args)
        {
            string line;
            Dictionary<string, string> users = new Dictionary<string, string>();
            while ((line=Console.ReadLine())!="stop")
            {
                string name = line;
                string email = Console.ReadLine();
                if (email.EndsWith("us")|| email.EndsWith("uk"))
                {
                    continue;
                }
                if (users.ContainsKey(name))
                {
                    users[name] = email;
                }
                else
                {
                    users.Add(name, email);
                }
            }
            foreach (KeyValuePair<string,string> user  in users)
            {
                Console.WriteLine("{0} -> {1}", user.Key, user.Value);
            }
        }
    }
}
