package com.company;

import java.util.Arrays;

public class Main {

    public static void main(String[] args) {
        String s = "I am using HackerRank to improve programming";
        String t = "am HackerRank to improve";
        String [] firstStrings =s.split("\\s");
        String [] secondStrings =t.split("\\s");
        int count=0;
        for(int i=0;i<firstStrings.length;i++)
        {
            for(int j=0;j<secondStrings.length;j++){
                if(firstStrings[i].equals(secondStrings[j]))
                {
                    firstStrings[i]="";
                    count++;
                }
            }
        }
        count=firstStrings.length-count;
        String [] result = new String [count];
        int wordsPosCount=0;
        for(int i=0;i<firstStrings.length;i++){
            if(wordsPosCount>count){
                break;
            }
            if(!firstStrings[i].equals(""))
            {
                result[wordsPosCount]=firstStrings[i];
                wordsPosCount++;
            }
        }

        System.out.println(Arrays.toString(result));

    }
}

