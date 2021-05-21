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
    return inquirer.prompt([
        {
            name: 'YesNO',
            type: 'list',
            message: message,
            choices: ['Yes','No'],

        },
        {//first input
            name: 'lvalue',
            type: 'input',
            message: message2,
            default: model.lvalue,
        }
        
    ])
}

function listForm(model){
    const message3 = 'From ?'
    const message4 = 'To ?'
    const choices = ['Celsius', 'Fahrenheit', 'Kelvin']
    return inquirer.prompt([
        //third input
            {name: 'lunit',
            type: 'list',
            message: message3,
            choices: choices},
        
        //fourt input
            {name: 'runit',
            type: 'list',
            message: message4,
            choices: choices}
        ])
}

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm,
    listForm
}