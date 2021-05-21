const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const prompt = require('prompt-sync')({sigint: true})
const {printTable} = require('console-table-printer')

//title of the app
function getTitle(){
    return chalk.blue(
        figlet.textSync(
            'Temperature Converter',
            {
                horizontalLayout: 'full',
                font: 'banner'
            }
        )
    )
}
//console.log(getTitle())

//creates table
function getTable(model){
    return [
        {
        'Left Value': model.lvalue,
        'Left Unit': model.lunit,
        'Right Value': model.rvalue,
        'Right Unit': model.runit
        }
    ]
}

//printTable(getTable())

function inputForm(model){

    const message = 'Left temperature is source?'
    const message2 = 'Temperature value to convert?'
    const message3 = 'From ?'
    const message4 = 'To ?'
    return inquirer.prompt([
        {//first input
            name: 'lvalue',
            type: 'input',
            message: message,
            default: model.lvalue,
        },
        //second input
        {   name: 'lunit',
            type: 'input',
            message: message2,
            default: model.lunit,
        },
        //third input
        {   name: 'rvalue',
            type: 'input',
            message: message3,
            default: model.rvalue,
        },
        //fourt input
        {   name: 'runit',
            type: 'input',
            message: message4,
            default: model.runit,
        }
    ])
}

//code from classes, not edited yet
/*function listForm(model){
    const {input} = model
    const message = 'Increase or decrease?'
    const choices = ['+', '-']
    return inquirer.prompt({
        name: 'input',
        type: 'list',
        message: message,
        default: input,
        choices: choices
    })
}*/

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm
    //listForm
}