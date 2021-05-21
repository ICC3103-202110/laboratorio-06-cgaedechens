function update(input,input1,model){
    const tip = input.amount*((input.tipp)/100)//calculate the tip amount
    const total = (parseInt(input.amount)+parseInt(input.amount*(input.tipp/100))) //calculate the total of the bill
    return{
        ...model,
        lvalue: input.lvalue,
        lunit: input1.lunit,
        rvalue: 'input.rvalue',
        runit: input1.runit
    
    }
}

module.exports = {
    update
}
