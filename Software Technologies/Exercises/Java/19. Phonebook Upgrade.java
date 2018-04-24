import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public class Main {

    public static void main(String[] args)
    {
        Scanner s = new Scanner(System.in);
        String input;
        String command="";
        String name ="";
        String number="";
        Map <String, String> book = new TreeMap<>();

        while(!(input=s.nextLine()).equals("END"))
        {
            if(input.equals("ListAll"))
            {
                for (String s1 : book.keySet())
                {
                    System.out.println(s1+" -> "+book.get(s1));
                }
                continue;
            }
            String [] data = input.split("\\s+");
            command = data[0];
            name = data[1];
            if(command.equals("A"))
            {
                number=data[2];
                book.put(name,number);
            }
            else if(command.equals("S"))
            {
                if(book.containsKey(name))
                {
                    System.out.println(name+" -> "+ book.get(name));
                }
                else
                {
                    System.out.println("Contact "+name+" does not exist.");
                }
            }






        }

    }
}