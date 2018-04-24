import java.util.Scanner;

public class Main {

    public static void main(String[] args)
    {
       Scanner s = new Scanner(System.in);
       String text = s.nextLine();
       StringBuilder sb = new StringBuilder();

        for (int i = text.length()-1; i >=0; i--)
        {
            sb.append(text.charAt(i));
        }
        System.out.println(sb.toString());
    }
}

