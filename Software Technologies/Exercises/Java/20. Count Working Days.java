import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
public class Main {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        try {
            SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");

            Calendar calendar = Calendar.getInstance();
            calendar.setTime(format.parse(s.nextLine()));

            Date endDate = format.parse(s.nextLine());

            int workDays = 0;
            int currentYear = calendar.get(Calendar.YEAR);
            Date[] holidays = getHolidays(currentYear);

            for (Calendar i = calendar; i.getTime().compareTo(endDate) <= 0; i.add(Calendar.DATE, 1)) {
                Date date = i.getTime();
                int year = i.get(Calendar.YEAR);

                if(year!=currentYear){
                    currentYear = year;
                    holidays = getHolidays(year);
                }

                if (!(anyDateinArr(date, holidays) ||
                        i.get(Calendar.DAY_OF_WEEK) == Calendar.SATURDAY ||
                        i.get(Calendar.DAY_OF_WEEK) == Calendar.SUNDAY))
                    workDays++;
            }
            System.out.println(workDays);
        } catch (ParseException ex) {
            return;
        }
    }

    private static boolean anyDateinArr(Date date, Date[] dateSet) {
        for(Date d : dateSet)
            if(d.compareTo(date)==0)
                return true;
        return false;
    }

    public static Date[] getHolidays(int year) {
        SimpleDateFormat format = new SimpleDateFormat("dd.MM.yyyy");
        try {
            Date[] holidays = {
                    format.parse("01.01." + year),
                    format.parse("03.03." + year),
                    format.parse("01.05." + year),
                    format.parse("06.05." + year),
                    format.parse("24.05." + year),
                    format.parse("06.09." + year),
                    format.parse("22.09." + year),
                    format.parse("01.11." + year),
                    format.parse("24.12." + year),
                    format.parse("25.12." + year),
                    format.parse("26.12." + year)
            };
            return holidays;
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
    }
}