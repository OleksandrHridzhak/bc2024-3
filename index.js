const {program} = require('commander');
const fs = require('fs');

program
    .option('-i, --input <file>')
    .option('-o, --output <file>')
    .option('-d,--display');

program.parse();

const options = program.opts();

//input
if (!options.input){
    console.log('Please, specify input file');
    process.exit();
}else if (!fs.existsSync(options.input)){
    console.log('Cannot find input file');
    process.exit();
}

const input_objs = JSON.parse(fs.readFileSync('data.json', 'utf8'));
//output
if (options.output !== undefined){
    let output_data = ''
    for (let item of input_objs){
        output_data += `${item.exchangedate}:${item.rate}\n`
    }
    fs.writeFileSync(options.output, output_data, 'utf8');
}

//display
if (options.display){
    for (let item of input_objs){
        console.log(item.exchangedate,':',item.rate);
    }
}

