import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('y or n \n');

if (answer === 'y') {
    console.log(`Thank you: ${answer}`);

    rl.close();
} else {
    console.log('please put "y"')
    rl.close();
        
}

