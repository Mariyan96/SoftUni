import java.util.*;

public class Main {

    public static void main(String[] args)
    {
        Scanner s = new Scanner(System.in);
        String [] arr1=s.nextLine().split("\\s+");
        String [] arr2=s.nextLine().split("\\s+");
        int minLenght =Math.min(arr1.length,arr2.length);
        int count=0;
        for (int i = 0; i <minLenght; i++)
        {
            char first=arr1[i].charAt(0);
            char second= arr2[i].charAt(0);
            if(first<second)
            {
                System.out.println(String.join("",arr1));
                System.out.println(String.join("",arr2));
                return;

            }
            else if(first>second)
            {
                System.out.println(String.join("",arr2));
                System.out.println(String.join("",arr1));
                return;
            }
            else
            {
                count++;
            }

        }
        if (count==minLenght)
        {
            if(arr1.length<arr2.length)
            {
                System.out.println(String.join("",arr1));
                System.out.println(String.join("",arr2));
            }
            else
            {
                System.out.println(String.join("",arr2));
                System.out.println(String.join("",arr1));
            }
        }


    }
}
