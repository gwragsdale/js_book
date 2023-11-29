function bar(input) {
  console.log(input);
}

function foo(bar) {
  console.log(bar());
}

foo(bar('Welcome'));    // Should print 'Welcome'
foo(bar(3.1415));    // Should print 3.1415
foo(bar([1, 2, 3]));    // Should print [1, 2, 3]