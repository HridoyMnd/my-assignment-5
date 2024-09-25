
// tailwind css config code 
tailwind.config = {
  theme: {
    extend: {
      colors: {
        btnBack: 'rgb(180, 244, 97)',
        paraClr: 'rgba(17, 17, 17, 0.7)',
        headingClr: 'rgb(17, 17, 17)',
      },
     fontFamily: {
      bodyFont:["Lexend", 'sans-serif'],
     }
    }
  }
}

  //get both pages
const pageOne = document.getElementById('page1');
const pageTwo = document.getElementById('page2');
//get both buttons
const activeButton = document.getElementById('btn1');
const disableButton = document.getElementById('btn2');
activeButton.addEventListener('click', function(){
pageTwo.classList.add('hidden');
pageOne.classList.remove('hidden');
})
disableButton.addEventListener('click', function(){
pageOne.classList.add('hidden');
pageTwo.classList.remove('hidden');
})

function showPages(activBtn, disableBtn) {
  // Get both buttons
  const activeButton = document.getElementById(activBtn);
  const disableButton = document.getElementById(disableBtn);


  // Activate the clicked button
  activeButton.classList.add('bg-btnBack', 'text-headingClr');
  activeButton.classList.remove('bg-gray-200', 'text-paraClr');
  // Deactivate the other button
  disableButton.classList.remove('bg-btnBack', 'text-headingClr');
  disableButton.classList.add('bg-gray-200', 'text-paraClr');
}

  //decrease from my avaiable amount
  let myAmountElement = document.getElementById('my-amount');
  let myIntAmount = parseFloat(myAmountElement.innerText);    
  //control with donation button
  const donateBtn = document.getElementById('donate-button');
  //donate button feni
  const donateBtnFeni = document.getElementById('donate-button-feni');
  //donate button quata
  const donateBtnQuata = document.getElementById('donate-button-quata');

  //donated total amount
  let donatedAmount = document.getElementById('donated-amount')
  let donatedIntAmount = parseFloat(donatedAmount.innerText);
  //donated amount fon feni
  let donatedAmountFeni = document.getElementById('donated-amount-feni')
  let donatedIntAmountFeni = parseFloat(donatedAmountFeni.innerText);
  //donated amount fon quata
  let donatedAmountQuata = document.getElementById('donated-amount-quata')
  let donatedIntAmountQuata = parseFloat(donatedAmountQuata.innerText);
  //donate title noakhali 
  const donateTitleNoakhali = document.getElementById('donate-title-noakhali').innerText;
  //donated title feni
  const donateTitleFeni = document.getElementById('donate-title-feni').innerText;
  //donated title quata
  const donateTitleQuata = document.getElementById('donate-title-quata').innerText;
  // amount increase and decrease with function

  //donate increase and amount decrease for feni
  donateBtnFeni.addEventListener('click', function(){
      //donation input value
      const donateInputFeni = document.getElementById('donate-input-feni');
      const donateValue = parseFloat(donateInputFeni.value);

      if (donateInputFeni.value === "" || isNaN(donateValue) || donateValue < 0 ) {
          alert('Invalid donation');
      } else {
          myIntAmount -= donateValue; 
          myAmountElement.innerText = myIntAmount.toFixed(2);
          donatedIntAmountFeni += donateValue;
          donatedAmountFeni.innerText = donatedIntAmountFeni.toFixed(2);
          const modal = document.getElementById('modal');
          modal.classList.toggle('hidden');
          modal.classList.toggle('flex');
          
          const historyContainer = document.getElementById('history-container');
          const newHistory = document.createElement('div');
          const h3 = document.createElement('h3');
          h3.className = 'sm:text-xl text-base font-bold mb-3';
          h3.innerText = donateValue + ' Taka is donated for ' + donateTitleFeni;
          const p = document.createElement('p');
          p.className = 'sm:text-base text-sm'
          const getDate = new Date();
          p.innerText = 'Date: ' + getDate;
          newHistory.className = 'border text-black p-4 rounded-lg mb-4';
          historyContainer.appendChild(newHistory);
          newHistory.appendChild(h3);
          newHistory.appendChild(p);
      }
      donateInputFeni.value = '';
   
  })
  //donate increase and amount decrease for quata
  donateBtnQuata.addEventListener('click', function(){
      //donation input value
      const donateInputQuata = document.getElementById('donate-input-quata');
      const donateValue = parseFloat(donateInputQuata.value);

      if (donateInputQuata.value === "" || isNaN(donateValue) || donateValue < 0 ) {
          alert('Invalid donation');
      } else {
          myIntAmount -= donateValue; 
          myAmountElement.innerText = myIntAmount.toFixed(2);
          donatedIntAmountQuata += donateValue;
          donatedAmountQuata.innerText = donatedIntAmountQuata.toFixed(2);
          const modal = document.getElementById('modal');
          modal.classList.toggle('hidden');
          modal.classList.toggle('flex');
          
          const historyContainer = document.getElementById('history-container');
          const newHistory = document.createElement('div');
          const h3 = document.createElement('h3');
          h3.className = 'sm:text-xl text-base font-bold mb-3';
          h3.innerText = donateValue + ' Taka is donated for ' + donateTitleQuata;
          const p = document.createElement('p');
          p.className = 'sm:text-base text-sm'
          const getDate = new Date();
          p.innerText = 'Date: ' + getDate;
          newHistory.className = 'border text-black p-4 rounded-lg mb-4';
          historyContainer.appendChild(newHistory);
          newHistory.appendChild(h3);
          newHistory.appendChild(p);
      }
      donateInputQuata.value = '';
   
  })
  donateBtn.addEventListener('click', function(){
      //donation input value
      const donateInput = document.getElementById('donate-input');
      const donateValue = parseFloat(donateInput.value);

      if (donateInput.value === "" || isNaN(donateValue) || donateValue < 0 ) {
          alert('Invalid donation');
      } else {
          myIntAmount -= donateValue; 
          myAmountElement.innerText = myIntAmount.toFixed(2);
          donatedIntAmount += donateValue;
          donatedAmount.innerText = donatedIntAmount.toFixed(2);
          const modal = document.getElementById('modal');
          modal.classList.toggle('hidden');
          modal.classList.toggle('flex');
          
          const historyContainer = document.getElementById('history-container');
          const newHistory = document.createElement('div');
          const h3 = document.createElement('h3');
          h3.className = 'sm:text-xl text-base font-bold mb-3';
          h3.innerText = donateValue + ' Taka is donated for ' + donateTitleNoakhali;
          const p = document.createElement('p');
          p.className = 'sm:text-base text-sm'
          const getDate = new Date();
          p.innerText = 'Date: ' + getDate;
          newHistory.className = 'border text-black p-4 rounded-lg mb-4';
          historyContainer.appendChild(newHistory);
          newHistory.appendChild(h3);
          newHistory.appendChild(p);
      }
      donateInput.value = '';
   
  })
  const confirmBtn = document.getElementById('confirm-btn');
  confirmBtn.addEventListener('click', function(){
    const modal = document.getElementById('modal');
    modal.classList.toggle('hidden');
    modal.classList.toggle('flex');
  })

