const {update} = require('./update')
const {view} = require('./view')
const {model} = require('./model')
const prompt = require('prompt-sync')({sigint: true})
const {inputForm, listForm} = require('./view')
const {printTable} = require('console-table-printer')

// Impure
async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        // I/O
        console.clear()
        console.log(title)//printing the title
        printTable(table)//printing the table
        console.log('Ctrl+C to exit')//how to exit from the app
        // FORM (Ask user input)
        const input = await inputForm(model)
        const input1 = await listForm(model)
        const updatedModel = update(input,input1, model) //updating the model for the app
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
        console.clear()
    }
}

module.exports = {
    app
}
