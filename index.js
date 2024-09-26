const {program} = require('commander');
const fs = require('fs');

program
    .requiredOption('-i, --input <file>')
    .option('-o, --output <file>')
    .option('-d,--display');

program.parse();

const options = program.opts();

//input
if (options.input == undefined){
    console.log('Please, specify input file');
}else if (!fs.existsSync(options.input)){
    console.log('Cannot find input file');
}

//output
if (options.output !== undefined){
    console.log('write');
}

//display
if (options.display){
    console.log('display');
}

