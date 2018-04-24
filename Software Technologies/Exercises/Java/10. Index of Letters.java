import java.util.Scanner;

public class Main {

    public static void main(String[] args)
    {
       Scanner s  = new Scanner(System.in);
       String word =s.nextLine();

        for (int i = 0; i < word.length(); i++)
        {
            char current =word.charAt(i);
            int index = 0;
            int asci =(int)current;
            if (asci>=97)
            {
                index=asci-97;
            }
            else
            {
                index=asci-65;
            }
            System.out.println(current+" -> "+index);

        }

    }
}

