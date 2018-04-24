import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args)
    {
        Scanner s = new Scanner(System.in);
        String [] input =(s.nextLine()
                .split("\\s+"));
        ArrayList<String> numbersInStr = new ArrayList<>();
        for (String i : input)
        {
            numbersInStr.add(i);
        }

        String [] powNindex =s.nextLine()
                .split("\\s+");
        String specialNum=powNindex[0];
        int power = Integer.parseInt(powNindex[1]);

        for (int i = 0; i < numbersInStr.size(); i++)
        {
            if(numbersInStr.get(i).equals(specialNum))
            {
                //leftSide
                for (int j = i; j >= i-power; j--)
                {
                    if(j<0)
                    {
                        continue;
                    }
                    numbersInStr.set(j,"");
                }
                //rightSide
                for (int j = i; j <=i+power; j++)
                {
                    if(j>=numbersInStr.size())
                    {
                        continue;
                    }
                    numbersInStr.set(j,"");
                }
            }
        }
        numbersInStr.removeIf(x->x=="");
        int sum=0;
        for (String number : numbersInStr)
        {
            if (number.equals(""))
            {
                continue;
            }
            int currentNumber =Integer.parseInt(number);
            sum+=currentNumber;
        }
        System.out.println(sum);
    }
}

