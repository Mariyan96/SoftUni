import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class Main {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        String line = s.nextLine();
        List<String> matches = getAllMatches("(<upcase>)(.+?)(<\\/upcase>)",line,2);
        matches = matches.stream().map(String::toUpperCase).collect(Collectors.toList());
        line =  replaceMatching(line,"(<upcase>)(.+?)(<\\/upcase>)",matches);

        System.out.println(line);
    }
    private static List<String> getAllMatches(String regex, String text, int group)
    {
        ArrayList<String> outList = new ArrayList<>();
        Pattern rgx = Pattern.compile(regex);
        Matcher match = rgx.matcher(text);
        while (match.find()){
            outList.add(match.group(group));
        }
        return outList;
    }

    private static String replaceMatching(String text, String regex, List<String> replaceCollection) {
        for(int i=0;i<replaceCollection.size();i++)
            text = text.replaceFirst(regex,replaceCollection.get(i));
        return text;
    }
}