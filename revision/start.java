
public class start {
    public static void main(String[] args) {
        search("catcateg", "g");
        System.out.println("***************************");
        search("AABAACAADAABAABA", "AABA");
        System.out.println("***************************");
        search("ggggg", "g");
        System.out.println("***************************");
        search("hellhellhellhello", "hello");

    }

    public static void search(String big, String small) {
    System.out.println("search for " +small);

        for (int i = 0, j = 0; i <= big.length() - small.length(); j++) {

            if (small.charAt(j) != big.charAt(i + j)) {
                i = i + j + 1;
                j = -1; // j will be incremented so it becomes 0 when the loop starts again
                continue;
            }
            if (j == small.length() - 1) {
                System.out.println("found match at location " + (i));
                if (small.length() == 1) {
                    i = i + j + 1;
                } else {
                    if (small.charAt(0) == small.charAt(small.length() - 1)) {
                        i = i + j;
                    } else {
                        i = i + j + 1;
                    }
                }
                j = -1;
            }
        }
    }
}