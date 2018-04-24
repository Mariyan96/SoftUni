import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args)
    {
        Scanner s = new Scanner(System.in);
        int leftSum=0;
        int rightSum=0;
        int [] numbers = Arrays.stream(
                s.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();
        if (numbers.length==1)
        {
            System.out.println("0");
            return;
        }
        else
        {
            for (int i = 0; i < numbers.length; i++)
            {
                for (int j = 0; j < i; j++)
                {
                    leftSum+=numbers[j];
                }
                for (int j = i+1; j < numbers.length; j++)
                {
                    rightSum+=numbers[j];
                }
                if (leftSum==rightSum)
                {
                    System.out.println(i);
                    return;
                }
                else
                {
                    leftSum=0;
                    rightSum=0;
                }
            }
        }
        if (leftSum==0&&rightSum==0)
        {
            System.out.println("no");
        }
    }
}

