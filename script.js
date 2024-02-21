
let price =550;
let totalPrice = 0;
const seats =document.querySelectorAll('.seat');
for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    

    seat.addEventListener('click',function () {
        const title =seat.querySelector("p").innerText ;
        

        const seatNameContainer = document.getElementById('seat-name-container');
        console.log(seatNameContainer);

        const p =document.createElement("p");
        p.innerText =  title + ' ------------      Economoy  -----------' +price;

        seatNameContainer.appendChild(p);


         totalPrice += price;
        document.getElementById('total-price').innerText =totalPrice.toFixed(2);
        })
    
}

const btn = document.getElementById("apply-btn");
btn.addEventListener('click',function(){
    const couponElement =document.getElementById('input-field').value;
    const couponCode = couponElement.split(" ").join("").toUpperCase();
    if (totalPrice >=2200) {
        if (couponCode === "NEW15" ) {
            
            const grandTotal =document.getElementById('grand-total');
            grandTotal.innerText = totalPrice - (totalPrice * 0.15) ;
            document.getElementById('input-field').value ="";

        }
        else if(couponCode === "Couple20"){
           
            grandTotal.innerText = totalPrice - (totalPrice * 0.2) ;
        }
        else{
            alert('invalid coupon');
        }
        
    }
    else{
        alert('pl')
    }
})
