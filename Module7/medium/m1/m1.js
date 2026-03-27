let button = document.getElementById('calculateButton')
 
const products = [
        { id: 1, name: "T-shirt", price: 15, quantity: 2 },
        { id: 2, name: "Jeans", price: 45, quantity: 1 },
        { id: 3, name: "Sokken", price: 5, quantity: 3 }
    ];
    
    const calculateTotal = (items) => {
        let total = 0;
        
        for (const item of items) {
            // Er zit een bug in deze berekening!
            total += item.price * item.quantity;
    
        }
        
        return total;
    };


button.addEventListener('click', ()=>{
   
    let totaal = document.getElementById('total')
    totaal.textContent = calculateTotal(products)
})