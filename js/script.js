// grad all seats

const seats = document.querySelectorAll(".tickets");
const couponValue = document.getElementById("couponInput");
const totalPriceContainer = document.getElementById("totalPrice");
const grandTotalContainer = document.getElementById("grandTotal");
const couponBtn = document.getElementById("couponBtn");
const submitBtn = document.getElementById("submitBtn");

let reservedSit = [];
let totalPrice = 0;
let grandTotalPrice = 0;

for (const seat of seats) {
  // add on click event and get the value of each
  seat.addEventListener("click", function () {
    // validate it 4 seats or not
    if (reservedSit.length === 4) {
      return alert("You already selected 4 seats");
    } else {
      //   check it alrady exists or not
      const isAlreadyReserved = reservedSit.includes(seat.innerText);
      if (isAlreadyReserved) {
        return alert("Sit already reserved");
      }

      // create an array and push it when it clicked
      reservedSit.push(seat.innerText);
      const finalReserved = document.getElementById("finalReserve");

      // create new seat and append it in totalSitCount
      const newReservedSeat = document.createElement("div");
      newReservedSeat.innerHTML = `<div class="flex items-center justify-between">
      <span>${seat.innerText}</span>
      <span>Economoy</span>
      <span>550</span>
      </div>`;
      finalReserved.appendChild(newReservedSeat);

      // update total price and grand total price
     
      totalPrice += 550;
      grandTotalPrice += 550;
      totalPriceContainer.innerText = totalPrice;
      grandTotalContainer.innerText = grandTotalPrice;

      // decrease the total seat and increase the seat number
      const totalSeat = document.getElementById("totalSeat");
      const bookedSeatSpan = document.getElementById("bookedSeat");

      let totalSeatValue = parseInt(totalSeat.innerText);
      let bookedSeatValue = parseInt(bookedSeatSpan.innerText);
      bookedSeatValue++;
      totalSeatValue--;
      bookedSeatSpan.innerText = bookedSeatValue;
      totalSeat.innerText = totalSeatValue;

      seat.classList.add("bg-theme", "text-white");
    }
  });
}

// get the coupon value and update the total price removing the coupon price
couponBtn.addEventListener("click", function () {
  const coupon = couponValue.value;
  console.log({coupon})

  if (coupon !== 'NEW15' && coupon !== "Couple 20") {
    return alert("Invalid coupon code");
  }
  else if(reservedSit.length !==4){
    return alert("Select minimum 4 seats")
  }else {
    if (coupon === "NEW15" ) {
      console.log({totalPrice})
      let discountAmount = totalPrice * 0.15;
      grandTotalContainer.innerText = grandTotalPrice - discountAmount

      const couponDiv = document.getElementById("couponDiv");

      couponDiv.classList.add("hidden");
    }
    else{
      let discountAmount = totalPrice * 0.2;
      grandTotalContainer.innerText = grandTotalPrice - discountAmount

      const couponDiv = document.getElementById("couponDiv");

      couponDiv.classList.add("hidden");
    }
  }
});


submitBtn.addEventListener("click",function(){
  if(grandTotalPrice <=0){
    return alert("Minimum select 1 seat")
  }else{
    const header =document.getElementsByTagName("header")[0];
    const footer =document.getElementsByTagName("footer")[0];
    const main =document.getElementsByTagName("main")[0];
    const modalSection = document.getElementById("modalSection");

    header.classList.add("hidden");
    footer.classList.add("hidden");
    main.classList.add("hidden");
    modalSection.classList.remove("hidden");

    console.log({header});
  }
})


