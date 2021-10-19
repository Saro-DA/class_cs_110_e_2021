const year = 55;

/*
true && true -> true
true && false -> false
false && false -> false

true || true -> true
true || false -> true
false || false -> false

!true -> false
!false -> true

!!true -> true
*/

if (
    year % 4 === 0
    && year % 100 !== 0
    || year % 400 === 0) {
    console.log(year + " is leap.");
} else {
    console.log(year + " is not leap.");
}