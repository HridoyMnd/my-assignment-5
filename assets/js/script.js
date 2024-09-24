

let btn1 = document.getElementById('btn1');
        let btn2 = document.getElementById('btn2');
        let page1 = document.getElementById('page1');
        let page2 = document.getElementById('page2');

        function activateButton(run, off) {
          
            run.classList.add("bg-lime-300", "text-white");
            run.classList.remove("bg-red-300");
    
        
            off.classList.add("bg-green-500");
            off.classList.remove("bg-green-700");
        }
        btn1.addEventListener('click', function(){
          page1.classList.remove('hidden');
          page2.classList.add('hidden');
          activateButton(run, off);
        });
        btn2.addEventListener('click', function(){
          page1.classList.add('hidden');
          page2.classList.remove('hidden');
          activateButton(run, off);
        })
