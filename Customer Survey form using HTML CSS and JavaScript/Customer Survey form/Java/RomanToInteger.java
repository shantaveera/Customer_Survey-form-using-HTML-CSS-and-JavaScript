package Java;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class RomanToInteger {
    public static void main(String[] args) {
    	System.out.println("Enter Roman Number: ");
    	Scanner sc=new Scanner(System.in);
        String romanNumeral = sc.next();
        int integerEquivalent = romanToInteger(romanNumeral);
        System.out.println(integerEquivalent);
    }

    public static int romanToInteger(String s) {
        Map<Character, Integer> romanNumerals = new HashMap<>();
        romanNumerals.put('I', 1);
        romanNumerals.put('V', 5);
        romanNumerals.put('X', 10);
        romanNumerals.put('L', 50);
        romanNumerals.put('C', 100);
        romanNumerals.put('D', 500);
        romanNumerals.put('M', 1000);

        int result = 0;
        for (int i = 0; i < s.length(); i++) {
            int currentVal = romanNumerals.get(s.charAt(i));
            int nextVal = (i < s.length() - 1) ? romanNumerals.get(s.charAt(i + 1)) : 0;

            if (currentVal < nextVal) {
                result -= currentVal;
            } else {
                result += currentVal;
            }
        }

        return result;
    }
}
