import java.util.Scanner;

public class Main {

    public static void main(String[] args)
    {
        Scanner s = new Scanner(System.in);
        String input =s.nextLine();
        String protocol ="";
        String server ="";
        String resources="";
        String [] input1 = input.split("://");
        if(input1.length>1)
        {
            protocol += input1[0];
            String [] input2=input1[1].split("/");
            server += input2[0];
            System.out.println("[protocol] = " + "\""+protocol+"\"");
            System.out.println("[server] = " + "\""+server+"\"");
            if(input2.length>1)
            {
                for (int i = 1; i < input2.length; i++)
                {
                    resources+=input2[i]+"/";
                }
                resources=resources.substring(0,resources.length()-1);
            }
            System.out.println("[resource] = " + "\""+resources+"\"");
        }
        else
        {
            server+=input1[0];
            System.out.println("[protocol] = " + "\""+protocol+"\"");
            System.out.println("[server] = " + "\""+server+"\"");
            System.out.println("[resource] = " + "\""+resources+"\"");
        }

    }
}

