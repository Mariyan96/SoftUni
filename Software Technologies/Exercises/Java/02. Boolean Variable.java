package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args)
    {
        Scanner s = new Scanner(System.in);
        String input = s.nextLine();
        boolean result =Boolean.parseBoolean(input);
        if (result)
        {
            System.out.println("Yes");
        }
        else
        {
            System.out.println("No");
        }
    }
}
