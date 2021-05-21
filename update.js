function update(input,input1,model){
    //const choices = ['Celsius', 'Fahrenheit', 'Kelvin']
    if (input1.lunit == 'Celsius' && input1.runit =='Fahrenheit')
        convertedvalue = (parseInt(input.value)*9/5) + 32
    else if (input1.lunit == 'Celsius' && input1.runit =='Kelvin')
        convertedvalue = parseInt(input.value) + 273.15
    else if (input1.lunit == 'Celsius' && input1.runit =='Celsius')
        convertedvalue = parseInt(input.value) //nothing to convert

    else if (input1.lunit == 'Fahrenheit' && input1.runit =='Kelvin')
        convertedvalue = (parseInt(input.value)-32)*5/9 + 273.15 
    else if (input1.lunit == 'Fahrenheit' && input1.runit =='Celsius')
        convertedvalue =  (parseInt(input.value)-32)*5/9
    else if (input1.lunit == 'Fahrenheit' && input1.runit =='Fahrenheit')
        convertedvalue = parseInt(input.value) //nothing to convert

    else if (input1.lunit == 'Kelvin' && input1.runit =='Celsius')
        convertedvalue = parseInt(input.value) -273.15
    else if (input1.lunit == 'Kelvin' && input1.runit =='Fahrenheit')
        convertedvalue = (parseInt(input.value)- 273.15)*9/5 + 32
    else if (input1.lunit == 'Kelvin' && input1.runit == 'Kelvin')
        convertedvalue = parseInt(input.value) //nothing to convert

    if (input.YesNo === 'Yes')
        return{
            ...model,
            lvalue: input.value,
            lunit: input1.lunit,
            rvalue: convertedvalue,
            runit: input1.runit
        }
    else 
        return{
            ...model,
            lvalue: convertedvalue,
            lunit: input1.runit,
            rvalue: input.value,
            runit: input1.lunit
        }
}

module.exports = {
    update
}

