function main() {
  f('main');
  func(f,'main: callback')

  return 'main function';

}

function func(f, arg) {
  f(arg)
}

function f(arg) { 
  console.log(arg)
}

f('arg');

func(f,'func: callback');


main()
const r = main()

console.log(r)
