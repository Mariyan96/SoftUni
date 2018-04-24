using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp4
{
    class Program
    {
        static void Main(string[] args)
        {
            //Shadowmourne – requires 250 Shards;
            //Valanyr – requires 250 Fragments;
            //Dragonwrath – requires 250 Motes;
            bool isObtained = false;

            string[] input;
            string itemObtained = null;
            SortedDictionary<string, int> elementsNeeded = new SortedDictionary<string, int>();
            SortedDictionary<string, int> elementstoJunk = new SortedDictionary<string, int>();
            elementsNeeded.Add("shards", 0);
            elementsNeeded.Add("fragments", 0);
            elementsNeeded.Add("motes", 0);

            while (!isObtained)
            {
                int quantity = 0;
                string element = null;
                input = Console.ReadLine().Split().ToArray();
                for (int i = 0; i < input.Length; i += 2)
                {
                    quantity = int.Parse(input[i]);
                    element = input[i + 1].ToLower();
                    if (element == "motes" || element == "fragments" || element == "shards")
                    {
                        if (elementsNeeded.ContainsKey(element))
                        {
                            elementsNeeded[element] += quantity;
                        }
                        else
                        {
                            elementsNeeded.Add(element, quantity);

                        }
                    }
                    else
                    {
                        if (elementstoJunk.ContainsKey(element))
                        {
                            elementstoJunk[element] += quantity;
                        }
                        else
                        {
                            elementstoJunk.Add(element, quantity);

                        }
                    }
                    if (elementsNeeded["motes"] >= 250)
                    {
                        itemObtained = "Dragonwrath";
                        elementsNeeded["motes"] -= 250;
                        isObtained = true;
                        break;
                    }
                    else if (elementsNeeded["shards"] >= 250)
                    {
                        elementsNeeded["shards"] -= 250;
                        itemObtained = "Shadowmourne";
                        isObtained = true;

                        break;
                    }
                    else if (elementsNeeded["fragments"] >= 250)
                    {
                        elementsNeeded["fragments"] -= 250;
                        itemObtained = "Valanyr";
                        isObtained = true;

                        break;
                    }
                }
            }
            Console.WriteLine($"{itemObtained} obtained!");
            foreach (var item in elementsNeeded.OrderByDescending(x => x.Value))
            {
                Console.WriteLine($"{item.Key}: {item.Value}");
            }
            foreach (var item in elementstoJunk.OrderBy(x=>x.Key))
            {
                Console.WriteLine($"{item.Key}: {item.Value}");
            }

        }
    }
}