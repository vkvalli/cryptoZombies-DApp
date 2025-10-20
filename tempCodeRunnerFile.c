#include <stdio.h>

int main() {
    int month;
    scanf("%d", &month);

    if (month >= 1 && month <= 12) {
        if (month == 12 || month == 1 || month == 2) {
            printf("It's summer in Australia.\n");
        } else if (month >= 3 && month <= 5) {
            printf("It's autumn in Australia.\n");
        } else if (month >= 6 && month <= 8) {
            printf("It's winter in Australia.\n");
        } else {
            printf("It's spring in Australia.\n");
        }
    } else {
        printf("Invalid month entered.\n");
    }

    return 0;
}