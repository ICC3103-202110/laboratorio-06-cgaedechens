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
console.log(getTitle())

//creates table
function getTable(model){
    return [
        {'Left Value': '','Left Unit': '','Right Value': '' ,'Right Unit': ''}
    ]
}

printTable(getTable())