var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    let date = new Date();
    res.render('test', {
        title: "Testing Page"
    });
});

router.post('/compare', function (req, res, next) {
    let num1 = req.body.number3 | 0;
    let num2 = req.body.number4 | 0;
    let result;

    if (num1 > num2) {
        result = `${num1} is greater than ${num2}`
    } else if (num2 > num1){
        result = `${num2} is greater than ${num1}`
    }else {
        result = `${num1} and ${num2} aer equal`
    }

        res.render('test', {
            number1: num1,
            number2: num2,
            compareResult: result
        });
});

router.post('/math', function (req, res, next) {
    let num1 = req.body.number1 | 0;
    let num2 = req.body.number2 | 0;
    let op = req.body.operator;

    let result;

    switch (op) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        case "^":
            result = num1 ** num2;
            break;
        default:
            result = NaN;
            break;
    }

    res.render('test', {
        number1: num1,
        number2: num2,
        operator: op,
        mathResult: `Your result is : ${result}`
    });
});


router.post('/find', function (req, res, next) {
    let text = req.body.text3;
    let find = req.body.findWord;
    let arr = text.split(" ");
    let result;
    let found = arr.indexOf(find);

    if (found == -1) {
        result = `${find} was not found`;
    } else {
        result = `${find} was found at position: ${found}`;
    }


    //  using the text from the page break text3 into an array of words
    //  find findWord in the array of words
    //  return findResult to the browser
    res.render('test', {
        text3: text,
        findWord: find,
        findResult: result
    });
});

module.exports = router;