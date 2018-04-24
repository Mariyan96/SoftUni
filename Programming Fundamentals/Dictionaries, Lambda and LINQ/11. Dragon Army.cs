using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp9
{
    class Program
    {
        static void Main()
        {
            int numberOfInputs = int.Parse(Console.ReadLine());
            var  Dragons  = new Dictionary<string,Dictionary<string,List<long> >>();
            for (int i = 0; i < numberOfInputs; i++)
            {
                string input = Console.ReadLine();
                string[] separatedInput = input.Split(new[] { " " }, StringSplitOptions.RemoveEmptyEntries);
                string color = separatedInput[0];
                string type = separatedInput[1];
                var damage = 0;
                var health  = 0;
                var armor = 0;
                damage = separatedInput[2] == "null" ? 45 : int.Parse(separatedInput[2]);
                health = separatedInput[3] == "null" ? 250 : int.Parse(separatedInput[3]);
                armor = separatedInput[4] == "null" ? 10 : int.Parse(separatedInput[4]);
                if (!Dragons.ContainsKey(color))
                {
                    Dragons.Add(color, new Dictionary<string, List<long>>());
                }
                if (!Dragons[color].ContainsKey(type))
                {
                    Dragons[color].Add(type, new List<long>());
                }
                if (Dragons.ContainsKey(color))
                {
                    if (Dragons[color].ContainsKey(type))
                    {
                        Dragons[color][type].Clear();
                        
                    }
                }
                Dragons[color][type].Add(damage); //[0]
                Dragons[color][type].Add(health); //[1]
                Dragons[color][type].Add(armor);  //[2]


            }
            foreach (var color in Dragons)
            {

                double averagedmg = color.Value.Select(x => x.Value[0]).Average();
                double averagehealth = color.Value.Select(x => x.Value[1]).Average();


                double averagearmor = color.Value.Select(x => x.Value[2]).Average();
                Console.WriteLine($"{color.Key}::({averagedmg:f2}/{averagehealth:f2}/{averagearmor:f2})");
                foreach (var type in color.Value.OrderBy(x=>(x.Key)))
                {
                    Console.WriteLine($"-{type.Key} -> damage: {type.Value[0]}, health: {type.Value[1]}, armor: {type.Value[2]}");
                }
            }
        }
        
    }
}
