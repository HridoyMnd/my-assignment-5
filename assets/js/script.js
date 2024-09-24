
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

  //showpages and active buttons
  const button1 = document.getElementById('btn1');
  const button2 = document.getElementById('btn2');
  const pageOne = document.getElementById('page1');
  const pagetwo = document.getElementById('page2');
  //pages show controls with function
  button1.addEventListener('click', function(){
      pageOne.classList.remove('hidden');
      pagetwo.classList.add('hidden');
      button1.classList.add('bg-btnBack');
      button2.classList.remove('bg-btnBack');
  })
  button2.addEventListener('click', function(){
      pagetwo.classList.remove('hidden');
      pageOne.classList.add('hidden');
      button2.classList.add('bg-btnBack');
      button1.classList.remove('bg-btnBack');
  })
  //decrease from my avaiable amount
  let myAmountElement = document.getElementById('my-amount');
  let myIntAmount = parseFloat(myAmountElement.innerText);    
  //control with donation button
  const donateBtn = document.getElementById('donate-button');
  //donated total amount
  let donatedAmount = document.getElementById('donated-amount')
  let donatedIntAmount = parseFloat(donatedAmount.innerText);

  // amount increase and decrease with function
  donateBtn.addEventListener('click', function(){
      //donation input value
      const donateInput = document.getElementById('donate-input');
      const donateValue = parseFloat(donateInput.value);
      // const isValidNumber = /^-?\d*(\.\d+)?$/.test(donateValue);
      // const donateValue = padonateInput.value.trim();

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
          h3.className = 'text-xl font-bold mb-3';
          h3.innerText = donateValue + ' Taka is donated for noakhali';
          const p = document.createElement('p');

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

