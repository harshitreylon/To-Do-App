const button=document.querySelector('#btn');
const list = document.querySelector('#list');
const remButton = document.querySelector('#rembtn');
const saveButton = document.querySelector('#setLoc');
const resButton = document.querySelector('#getLoc');
const resetButton = document.querySelector('#remLoc');

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));


const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
  }

let ask = prompt("Do you want the auto save functionality? (yes or no)");
let check = function (ask) {
    if (ask=="yes"||ask=="no"){
        return true;
    }
    else {
        return false;
    }
}

while (!check(ask)) {
    ask=prompt("Please enter a valid input");
}

button.addEventListener('click',(event) => {
    event.preventDefault();
    let item = document.querySelector('#to-do').value;
    let text = document.createTextNode(item);
    let listItem = document.createElement('li');
    listItem.appendChild(text);
    list.appendChild(listItem);
    //
    document.forms.myForm.reset();
    itemsArray.push(item);
    if (ask=="yes"){
        localStorage.setItem('items', JSON.stringify(itemsArray));
    }
    console.log(itemsArray);
});

remButton.addEventListener('click',(event)=>{
    event.preventDefault();
    const remItem = parseInt(document.querySelector('#rem_todo').value);
    const n = remItem-1;
    list.removeChild(document.getElementsByTagName('li')[n]);
    itemsArray.splice(n,1);
});

saveButton.addEventListener('click',(event)=>{
    event.preventDefault(); 
    localStorage.setItem('items', JSON.stringify(itemsArray));
})

resButton.addEventListener('click',(event)=>{
    event.preventDefault();
    data.forEach(item => {
        liMaker(item);
      });      
})

resetButton.addEventListener('click',(event)=>{
    event.preventDefault();
    localStorage.clear();
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    itemsArray = [];
})