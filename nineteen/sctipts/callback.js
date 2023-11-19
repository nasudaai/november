//console.log('main')

function func(callback) {
  callback('func')
}

function sub(arg) {
  console.log(arg);
}

sub('sub function')

func(sub)
