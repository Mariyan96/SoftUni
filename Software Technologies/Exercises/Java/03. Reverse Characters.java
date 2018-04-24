package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args)
    {
        Scanner s = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 3; i++) {
            sb.append(s.nextLine());
        }

        String input = sb.toString();
        String reversed="";

        for (int i = input.length()-1; i >=0 ; i--)
        {
            reversed += input.charAt(i);

        }
        System.out.println(reversed);
    }
}
