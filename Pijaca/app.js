let allTotal = 0

function addToCart(element){
    let mainEl = element.closest('.single-item')
    let price = mainEl.querySelector('.price').innerText
    let name = mainEl.querySelector('h3').innerText
    let quantity = mainEl.querySelector('input').value
    let cartItems = document.querySelector('.cart-items')

    if(parseInt(quantity) > 0){
        price = price.substring(1)
        price = parseInt(price)
        let total = price * parseInt(quantity)

        allTotal += total

        cartItems.innerHTML += `<div class="cart-single-item">
                                    <h3>${name} :</h3>
                                    <p>$${price} x ${quantity} = $<span>${total}</span></p>
                                    <button onclick="removeFromCart(this)" class="remove-item">X</button>
                                </div>`
    
        document.querySelector('.total').innerText = `Ukupno: $${allTotal}`                        

        element.innerText = 'Dodato'
    }else{
        alert('Odaberi kolicinu :)')
    }
    console.log(quantity);
}

// u ovom dijelu pravimo funkciju da bismo uklonili item-e
function removeFromCart(element){
    let mainEl = element.closest('.cart-single-item')
    let price = mainEl.querySelector('p span').innerText
    price = parseInt(price)

    allTotal -= price

    document.querySelector('.total').innerText = `Ukupno: $${allTotal}`
    mainEl.remove()
}