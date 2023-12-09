package Java;

public class panagram {
    public static void main(String[] args) {
        String inputSentence = "The quick brown fox jumps over the lazy dog";
        boolean isPangramSentence = isPangram(inputSentence);
        System.out.println(isPangramSentence);
    }

    public static boolean isPangram(String sentence) {
        String alphabet = "abcdefghijklmnopqrstuvwxyz";
        String lowercaseSentence = sentence.toLowerCase();

        for (char letter : alphabet.toCharArray()) {
            if (lowercaseSentence.indexOf(letter) == -1) {
                return false;
            }
        }

        return true;
    }
}
