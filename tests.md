Describe: cardValidator()

Test: "It will return an error message when an empty string is entered."
Code: cardValidator("")
Expected Output: "Please enter a valid credit card number."

Test: "It will check if the numbers is invalid by if there is more or less than 16 digits"
Code: cardValidator("")
Expected Output: ""

Test: "It will check if the number is valid by using Luhn's Algorithm and return a success message if it passes"
Code: cardValidator("4102080860435620")
Expected Output: "This card number is valid."

Test: ""
Code: cardValidator("")
Expected Output: ""

Test: ""
Code: cardValidator("")
Expected Output: ""

Test: ""
Code: cardValidator("")
Expected Output: ""