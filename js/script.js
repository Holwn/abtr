document.getElementById("quoteButton").addEventListener("click", generateQuote);
document.getElementById("quoteInput").addEventListener("keydown", addQuote);
document.getElementById("deleteAllButton").addEventListener("click", deleteAll);
document.getElementById("accountButton").addEventListener("click", showAccountSetting);
document.getElementById("accountCancel").addEventListener("click", hideAccountSetting);

var quotes = [
    
];

var countAdd = 0;

function generateQuote() {
    if(quotes.length > 0){
        countChange(true);
        var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById("quoteDisplay").textContent = randomQuote;
    } else {
        showEmptyMessage();
    }
}

function submitQuote() {
    var quoteInput = document.getElementById('quoteInput');

    if (quoteInput.value !== '') {
      quotes.push(quoteInput.value);
      quoteInput.value = '';

      var li = document.createElement('li');
      li.className = 'flex justify-between items-center space-x-4 my-3';
      li.textContent = quotes[quotes.length - 1];

      var removeButton = document.createElement('button');
      removeButton.textContent = 'X';
      removeButton.className = 'px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white-0 hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2';

      removeButton.addEventListener('click', function() {
        countChange(false);
        var index = quotes.indexOf(li.textContent.substring(0,li.textContent.length-1));
        if (index > -1) {
            quotes.splice(index, 1);
        }
        li.remove();
      });

      li.appendChild(removeButton);
      document.getElementById('quoteList').appendChild(li);
    } else {
        showEmptyMessage();
    }
}

function addQuote(event){
    if (event.key === "Enter") {
        event.preventDefault();
        submitQuote();
    }
}

function countChange(change){
    countAdd = change == true ? ++countAdd : 0;
    document.getElementById("countNumber").textContent = countAdd + ' Times' ;
}

function deleteAll(){
    quotes = [];
    document.getElementById('quoteList').innerHTML = "";
    document.getElementById("quoteDisplay").textContent = "Please enter data to random";
    countChange(false);
}

function showEmptyMessage(){
    document.getElementById("messageInput").classList.remove("hidden");
    const myTimeout = setTimeout(function(){
        document.getElementById("messageInput").classList.add("hidden");
    }, 2000);
}

function showAccountSetting(){
    document.getElementById('accountDialog').classList.remove('hidden');
}

function hideAccountSetting(){
    document.getElementById('accountDialog').classList.add('hidden');
}