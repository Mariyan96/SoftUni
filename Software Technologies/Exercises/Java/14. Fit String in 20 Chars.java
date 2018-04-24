import java.util.Scanner;

public class Main {

    public static void main(String[] args)
    {
       Scanner s = new Scanner(System.in);
       String text = s.nextLine();
       int neededSize=0;
       if (text.length()<20)
       {
           neededSize=20-text.length();
           for (int i = 0; i < neededSize; i++)
           {
               text+='*';

           }

       }
       else if(text.length()>20)
       {
           text=text.substring(0,20);
       }
       System.out.println(text);

    }
}

