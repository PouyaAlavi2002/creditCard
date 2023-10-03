let sum = ''
let cardInput = document.getElementById('cardNumber')
document.getElementById('ownerName').addEventListener('input', (e) => {
    document.getElementById('name').innerHTML = 'Name : ' + (e.target.value)
})
document.getElementById('CVV2').addEventListener('input', (e) => {
    document.getElementById('cvv').innerHTML = 'CVV2 : ' + (e.target.value)
})
cardInput.addEventListener('input', _addNumber)


function _addNumber(e){
    sum = (e.target.value)
        switch (sum.length) {
            case 4: sum = sum + " "; break;
            case 9: sum = sum + " "; break;
            case 14: sum = sum + " "; break;
            case 19: document.getElementById('ownerName').focus(); break;
        }
        cardInput.value = sum
        document.getElementById('number').innerText = sum
}

cardInput.addEventListener('keyup', (e)=>{
    let _code = e.key
    console.log(typeof _code);
    if (_code === "Backspace") {

        cardInput.removeEventListener('input', _addNumber)
        document.getElementById('number').innerText = (e.target.value)

        // switch (sum.length) {
        //     case 4: sum = sum.slice(0, (sum.length)-4); break;
        //     case 11: sum = sum.slice(0, (sum.length)-4); break;
        //     case 18: sum = sum.slice(0, (sum.length)-4); break;
        // }
    }else{
        cardInput.addEventListener('input', _addNumber)

    }
})