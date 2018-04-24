import java.util.*;
public class Main {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println(MessageGenerator.GenerateMessages(s.nextInt()));
    }
}

class MessageGenerator{
    static private ArrayList<String> phrase =
            addListItems(
                    new String[]{
                            "Excellent product.",
                            "Such a great product.",
                            "I always use that product.",
                            "Best `product of its category.",
                            "Exceptional product.",
                            "I can’t live without this product."
                    });
    static private ArrayList<String> event  =
            addListItems(
                    new String[]
                            {
                                    "Now I feel good.",
                                    "I have succeeded with this p`roduct.",
                                    "Makes miracles.I am happy of the results!",
                                    "I cannot believe but now I feel awesome.",
                                    "Try it yourself, I am very satisfied.",
                                    "I feel great!"
                            });
    static private ArrayList<String> author =
            addListItems(
                    new String[]{
                            "Diana",
                            "Petya",
                            "Stella",
                            "Elena",
                            "Katya",
                            "Iva",
                            "Annie",
                            "Eva"
                    });
    static private ArrayList<String> city  = addListItems(
            new String[]{
                    "Burgas",
                    "Sofia",
                    "Plovdiv",
                    "Varna",
                    "Ruse"
            });

    private static ArrayList<String> addListItems(String[] arr){
        ArrayList<String> outList = new ArrayList<>();
        for(String item:arr)
            outList.add(item);
        return outList;
    }

    public static String GenerateMessages(int numberOfMessages){
        StringBuffer messages = new StringBuffer();
        Random rand = new Random();

        for(int i=0;i<numberOfMessages;i++)
            messages.append(String.format("%s %s %s - %s",
                    phrase.get(rand.nextInt(phrase.size())),
                    event.get(rand.nextInt(event.size())),
                    author.get(rand.nextInt(author.size())),
                    city.get(rand.nextInt(city.size()))
            )+"\n");
        return messages.toString();
    }
}
