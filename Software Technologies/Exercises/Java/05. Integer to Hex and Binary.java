package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args)
    {
        Scanner s = new Scanner(System.in);
        int number = Integer.parseInt(s.nextLine());
        String heximmal = Integer.toHexString(number).toUpperCase();
        String duo = Integer.toBinaryString(number);
        System.out.println(heximmal);
        System.out.println(duo);

    }
}
