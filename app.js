const costPriceInput = document.querySelector('#cost-price')
const stockQuantityInput = document.querySelector('#stock-quantity')
const sellingPriceInput = document.querySelector('#selling-price')
const checkBtn = document.querySelector('#check-btn')
const resultPara = document.querySelector('#result-para')


const showResult = (msg) => {
    resultPara.style.display = 'block'
    resultPara.innerText = msg
}


const calculate = (cp,sq,sp) => {
    if(sp > cp){
        const netProfit = (sp - cp) * sq
        const profitPercentage = (netProfit / cp) * 100
        showResult(`Your profit is ${netProfit} and profit percentage is ${profitPercentage}%`)
    }else if(sp < cp){
        const netLoss = (cp - sp) * sq
        const lossPercentage = (netLoss / cp) * 100
        showResult(`Your loss is ${netLoss} and loss percentage is ${lossPercentage}%`)

    }else{
        showResult('No profit no loss')
    }
}

const handleClick = () => {

    resultPara.style.display = 'none'

    const cp = Number(costPriceInput.value)
    const sq = Number(stockQuantityInput.value)
    const sp = Number(sellingPriceInput.value)

    if(cp>0 && sq>0 && sp>0){
        calculate(cp,sq,sp)
    }else if(cp<0 || sq<0 || sp<0){
        showResult('add valid data')
    }else{
        showResult('Add all fields')
    }
}

checkBtn.addEventListener('click',handleClick)