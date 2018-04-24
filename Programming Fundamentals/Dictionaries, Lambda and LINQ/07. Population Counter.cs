using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp22
{
    class Program
    {
        static void Main()
        {
            string input;
            Dictionary<string, Dictionary<string, long>> sortedCountriesAndCities = new Dictionary<string, Dictionary<string, long>>();
            while ((input=Console.ReadLine())!="report")
            {
                string[] info = input.Split('|');
                string country = info[1];
                string city = info[0];
                int population = int.Parse(info[2]);
                if (!sortedCountriesAndCities.ContainsKey(country))
                {
                    sortedCountriesAndCities.Add(country, new Dictionary<string, long>());

                }
                sortedCountriesAndCities[country].Add(city, population);
            }    
            foreach (var Country in sortedCountriesAndCities.OrderByDescending(x=>x.Value.Values.Sum()))
            {
                Console.WriteLine($"{Country.Key} (total population: {Country.Value.Values.Sum()})");
                foreach (var city in Country.Value.OrderByDescending(x => x.Value))
                {
                    Console.WriteLine($"=>{city.Key}: {city.Value}");
                }
            }
        }
    }
}
