// ticket button
let totalPrice=0;
let seatCount=0;
let seatLeft=40;
const buttons= document.querySelectorAll('#btn');
for( let btn of buttons){
    btn.addEventListener('click', function(){
    if(seatCount<4){
    btn.classList.add('bg-[#1DD100]', 'text-white');
    const seat=btn.innerText;
    const seatText= document.createElement("p");
    seatText.innerText=seat;
    const seatClass = document.createElement('p');
    seatClass.innerText='Economy';
    const seatPrice = document.createElement('p');
    seatPrice.innerText='550';
    // appendChild
    const seatContainer=document.getElementById('seat-container');
    seatContainer.appendChild(seatText);
    const classContainer=document.getElementById('class-container');
    classContainer.appendChild(seatClass);
    const priceContainer=document.getElementById('price-container');
    priceContainer.appendChild(seatPrice);
  
    // totalPrice Count
    const perSeatPrice= parseFloat(seatPrice.innerText);
    totalPrice+=perSeatPrice;
    const totalPriceContainer=document.getElementById('total-price-container');
    totalPriceContainer.innerText=totalPrice;
    // grand total price
    const grandTotalPrice=document.getElementById('grand-total-price');
    grandTotalPrice.innerText=totalPrice;
  
    // seat count+
    seatCount+=1;
    const seatIncrease=document.getElementById('seat');
    seatIncrease.innerText=seatCount;
  
    // seat count-
    seatLeft=seatLeft-1;
    const seatDecrease=document.getElementById('seat-left');
    seatDecrease.innerText=seatLeft;
     
    }
      
})
      
}


// coupon button
const couponButton= document.getElementById('apply-button');
couponButton.addEventListener('click', function(){
  const couponValue=document.getElementById('coupon-value').value;
  if(seatCount===4){
    // 15% discount
    if(couponValue==='NEW15'){
      const discTitle=document.createElement("p");
      discTitle.innerText='Discount Price';
      const discountTitle= document.getElementById('discount-title');
      discountTitle.appendChild(discTitle);
      // discount amount
      const discountAmount=totalPrice*0.15;
      const discPrice=document.createElement("p");
      discPrice.innerText='BDT'+" "+discountAmount;
      const discountPrice=document.getElementById('discount-price');
      discountPrice.appendChild(discPrice);

      // grand total
      const grandTotal= totalPrice-discountAmount;
      const grandTotalPrice=document.getElementById('grand-total-price');
      grandTotalPrice.innerText=grandTotal;

      // remove coupon container

      const couponContainer=document.getElementById('coupon-container');
      couponContainer.classList.add('hidden');
    }

    // 20% discount
    if(couponValue==='Couple 20'){
      const discTitle=document.createElement("p");
      discTitle.innerText='Discount Price';
      const discountTitle= document.getElementById('discount-title');
      discountTitle.appendChild(discTitle);
      // discount amount
      const discountAmount=totalPrice*0.2;
      const discPrice=document.createElement("p");
      discPrice.innerText='BDT'+" "+discountAmount;
      const discountPrice=document.getElementById('discount-price');
      discountPrice.appendChild(discPrice);

      // grand total
      const grandTotal= totalPrice-discountAmount;
      const grandTotalPrice=document.getElementById('grand-total-price');
      grandTotalPrice.innerText=grandTotal;

      // remove coupon container

      const couponContainer=document.getElementById('coupon-container');
      couponContainer.classList.add('hidden')
    }
  }
  else{
    alert("Please booked at least four seats");
  }
})


// next button

const nextButton= document.getElementById('next-btn');
nextButton.addEventListener('click', function(){
  const phnNUmber=parseInt(document.getElementById('number').value);
  const phnNUmberStr=document.getElementById('number').value;
  if(seatCount>0 && !isNaN(phnNUmber) && phnNUmberStr.length===11){
  showElementById('success');
  }
  else{
    alert("Please purchase at least one seat & put a valid phone number")
  }
})
// continue button

const continueButton= document.getElementById('continue-button');
continueButton.addEventListener('click', function(){
  window.location.reload();
})