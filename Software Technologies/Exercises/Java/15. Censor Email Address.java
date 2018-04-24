import java.util.Scanner;

public class Main {

    public static void main(String[] args)
    {
       Scanner s = new Scanner(System.in);
       String email = s.nextLine();
       String []data = email.split("@");
       String mail=data[0];
       String domain=data[1];
       String [] text = s.nextLine().split("\\s+");

        for (int i = 0; i < text.length; i++) {
            if (email.equals(text[i]))
            {
                int indexes = mail.length();
                String newmail="";
                for (int j= 0; j < indexes; j++)
                {
                    newmail+='*';
                }
                newmail+='@'+domain;
                text[i]=newmail;
            }
        }
        System.out.println(String.join(" ",text));




    }
}

