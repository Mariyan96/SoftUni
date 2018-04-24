using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp22
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, int> allMaterials = new Dictionary<string, int>();

            string material = Console.ReadLine();

            do
            {
             int quantity = int.Parse(Console.ReadLine());

                if (allMaterials.ContainsKey(material))
                {
                    allMaterials[material] += quantity;
                }
                else
                {
                    allMaterials.Add(material, quantity);

                }
                material = Console.ReadLine();
               
            } while (material!="stop");

            foreach (var item in allMaterials)
            {
                Console.WriteLine("{0} -> {1}", item.Key ,item.Value);
            }

        }
    }
}
