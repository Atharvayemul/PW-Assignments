// 04. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
// them values and log their values to the console before and after they are declared to demonstrate variable
// hoisting.


{
    console.log(x); //undefined
    console.log(y); //throws reference error
    console.log(z); // thros reference error

    var x = 'A';
    let y = 'b';
    let z = 'C';

    console.log(x);
    console.log(y);
    console.log(z);
}