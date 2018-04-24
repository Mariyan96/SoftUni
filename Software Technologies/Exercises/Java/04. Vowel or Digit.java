package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args)
    {
        Scanner s = new Scanner(System.in);
        String input =s.nextLine();
        boolean isVowel=false;
        boolean isDigit=true;
        switch (input)
        {
            case "a":
                isVowel=true;
                break;
            case "e":
                isVowel=true;
                break;
            case "i":
                isVowel=true;
                break;
            case "o":
                isVowel=true;
                break;
            case "u":
                isVowel=true;
                break;
            default:
                try
                {
                    Integer.parseInt(input);
                    break;
                }
                catch(NumberFormatException e)
                {
                    isDigit=false;
                    break;
                }
        }
        if(isVowel)
        {
            System.out.println("vowel");
        }
        else
        {
            if(!isDigit)
            {
                System.out.println("other");
            }
            else
            {
                System.out.println("digit");
            }
        }
    }
}
