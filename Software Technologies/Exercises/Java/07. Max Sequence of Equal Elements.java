import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args)
    {
        Scanner s = new Scanner(System.in);
        int [] numbers = Arrays.stream(s.nextLine().split("\\s+")).mapToInt(Integer::parseInt).toArray();
        int startIndex=0;
        int endIndex=0;
        int maxCount = 0;
        int count=0;
        int bestStart=0;
        int bestEnd=0;
        for (int i = 1; i < numbers.length; i++)
        {

           if(numbers[i-1]<numbers[i])
           {
               if(count==0)
               {
                   startIndex=i-1;
               }
               count++;
               if(i==numbers.length-1&&maxCount<count)
               {
                   bestStart=startIndex;
                   bestEnd=numbers.length;
               }
           }
           else
           {
               if(maxCount<count)
               {
                   maxCount=count;
                   endIndex=i;
                   bestStart=startIndex;
                   bestEnd=endIndex;
               }
               count=0;
           }

        }
        for (int i = bestStart; i <bestEnd ; i++)
        {
            System.out.print(numbers[i]+" ");

        }
    }
}

