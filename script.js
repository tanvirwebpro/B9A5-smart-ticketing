
let price =550;
let totalPrice = 0;
const seats =document.querySelectorAll('.seat');
for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    

    seat.addEventListener('click',function () {
       
        const title =seat.querySelector("p").innerText ;
        if(title==="A1"){const seatNameContainer = document.getElementById('seat-name-container');
        console.log(seatNameContainer);

        const p =document.createElement("p");
        p.innerText =  title +'------------------ Economy -------------550'

        seatNameContainer.appendChild(p);


         totalPrice += price;
        document.getElementById('total-price').innerText =totalPrice.toFixed(2);

        }
        const bgChange =document.getElementsByClassName('seat');
        seat.classList.add('bg-green-500');



        const currentSeat =document.getElementById('update-seat');
        const currentSeatText =currentSeat.innerText;
        const lastSeat = parseInt(currentSeatText);

        const newSeat =lastSeat + 1;

        currentSeat.innerText = newSeat;
        // if (newSeat === 4) {
        //     break;
            
        // }

        // reduce the seat 
        const totalSeatElement =document.getElementById('total-seat');
        const totalSeatText =totalSeatElement.innerText;
        const lastTotalSeat =parseInt(totalSeatText);
        let newTotalSeat =lastTotalSeat - 1;
        totalSeatElement.innerText = newTotalSeat ;
        



        
    
        })
    
}

const btn = document.getElementById("apply-btn");
btn.addEventListener('click',function(){
    
    let couponElement =document.getElementById('input-field').value;

    const couponCode = couponElement.split(" ").join("").toUpperCase();
    if (totalPrice >=550) {
        if (couponCode == "NEW15" ) {
            
            const grandTotal =document.getElementById('grand-total');
            grandTotal.innerText = totalPrice - (totalPrice * 0.15) ;
            document.getElementById('input-field').value ="";

        }
        else if(couponCode == "COUPLE20"){
            const grandTotalAmount =document.getElementById('grand-total');
            grandTotalAmount.innerText = totalPrice - (totalPrice * 0.2) ;
            document.getElementById('input-field').value ="";
        }
        else{
            alert('invalid coupon');
        }
        
    }
    else{
        alert('please give a valid coupon')
    }
})
