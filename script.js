
let balance = 480000;


function updateBalance() {
   
    document.getElementById('balance').innerText = balance;
}


document.getElementById('depositButton').addEventListener('click', function() {
   
    const depositAmount = parseFloat(document.getElementById('depositAmount').value);

          if (!isNaN(depositAmount) && depositAmount > 0) {
            balance += depositAmount;
         updateBalance();
        document.getElementById('depositAmount').value = ''; 
    }
});


document.getElementById('withdrawButton').addEventListener('click', function() {
    
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
              if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
       
                if (withdrawAmount > balance) {
            
                    alert('Insufficient funds for this withdrawal.');
        } else {
            
            balance -= withdrawAmount;
            updateBalance();
        }
     
        document.getElementById('withdrawAmount').value = ''; 
    }
});


updateBalance();
