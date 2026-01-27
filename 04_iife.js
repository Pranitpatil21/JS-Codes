// Immediately Invoked Function Expressions (IIFE)


// What is IIFE : IIFE (Immediately Invoked Function Expression) is a JavaScript function that is executed as soon as it is defined. It is commonly used to avoid polluting the global namespace or to create a private scope for variables.


// declare function inside this -> ( )  () <- For Execution

( function chai(){
    // named IIFE
    console.log("DB connected");
}) ();      //  <-- if we not use semicolon may cause error to next iife function


((name) => {
     console.log(`DB connected to ${name}`)
})("Pranit")

