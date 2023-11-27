let a = !(false) ? 5 : 6;

switch (a) {
  case 3:
  case 4:
  case 5:
    console.log('a is 5');
    break;
  case 6:
    console.log('a is 6');
    break;
  default:
    console.log('a is neither 3, 4, 5, nor 6');
    break;
}

console.log(a);