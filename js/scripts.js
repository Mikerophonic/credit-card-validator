function cardValidator(cardNumber) {
    if (cardNumber.trim().length === 0) {
        return "Please enter a valid credit card number."
    } if (cardNumber.trim().length !== 16) {
      return "This card number is not valid."
    }
    
    let cardArray = cardNumber.split("");

    
    const cardNumberArray = cardArray.map(function(element) {
        return parseInt(element);
    })

    for (let i = cardNumberArray.length - 1; i >= 0; i -= 2) {
        cardNumberArray[i] *= 2;
    }

    newCardNumberArray = cardNumberArray.map(function(number) {
        let stringNum = number.toString()
        if (stringNum.length === 2) {
            return Number(stringNum.charAt(0)) + Number(stringNum.charAt(1));
        } else {
            return Number(stringNum);
        }
    });

    let sum = 0;

    newCardNumberArray.forEach(function(number) {
        sum += number
    })

    if (sum % 10 === 0) {
        return "This card number is valid."
    } else {
        return "This card number is not valid."
    }

}