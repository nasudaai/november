function main() {

}

function func(f, arg) {
  f(arg)
}

function f(arg) { 
  console.log(arg)
}

f('arg');

func(f,'func: callback');
