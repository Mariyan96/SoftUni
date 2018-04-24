package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args)
    {
        Scanner s = new Scanner(System.in);
        String input = s.nextLine();
        int numberToPrint = Integer.parseInt(input,16);
        System.out.println(numberToPrint);
    }
}
