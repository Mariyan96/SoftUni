import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args)
    {
        Scanner s = new Scanner(System.in);
        int [] numbers= Arrays.stream(s.nextLine().split("\\s+")).mapToInt(Integer::parseInt).toArray();
        int count =0;
        int maxCount=0;
        int special=0;
        for (int i = 0; i < numbers.length; i++)
        {
            for (int j = i; j < numbers.length; j++)
            {
                if (numbers[i]==numbers[j])
                {
                    count++;
                    if (maxCount<count)
                    {
                        maxCount=count;
                        special=numbers[i];
                    }

                }
                else
                {

                    count=0;
                }
            }
            count=0;
        }
        System.out.println(special);
    }

}

