{
  // hoisting quiz - 1
  var b = 1;
  function outer() {
    console.log(b); // ? undefined
    var b = 3;
    function inner() {
      console.log(b); // ? 3
      b = 5;
    }
    inner();
    console.log(b); // ? 5
  }
  outer();
}

{
  // hoisting quiz - 2
  function test() {
    console.log(typeof c); // ? undefined
    var c = 10;
    console.log(typeof c); // ? number
  }
  test();
  console.log(typeof c); // ? undefined
}

{
  // hoisting quiz - 3
  var d = 100;

  (function () {
    console.log(d); // ? 100
    d = 200;
    console.log(d); // ? 200
  })();

  console.log(d); // ? 200
}
