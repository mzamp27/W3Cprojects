

function sum(a, b) {
  // this function returns a result
  return (a + b);
}
var result = sum(3, 4);

function displayInPage(message, value) {
  // this function does not return anything
  document.body.innerHTML += message + value + "<br>";
}


// displayInPage("Result: ", result);
//
// // we could have written this
// displayInPage("Result: ", sum(10, 15));
