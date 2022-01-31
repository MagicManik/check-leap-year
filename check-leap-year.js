function checkLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}
var myYear = 2400;
var result = checkLeapYear(myYear);
console.log('is it leap year', result);

var herYear = 2200;
var result = checkLeapYear(herYear);
console.log('is her year leap year', result);