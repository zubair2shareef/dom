// console.log("hellow roafdsfdsfds")

var itemslist=document.querySelector('.items-list');

itemslist.parentElement.parentElement.style.backgroundColor="grey"

// console.log(itemslist.parentElement)

console.log(itemslist.children[1])
console.log(itemslist.lastChild)


itemslist.firstElementChild.style.backgroundColor="blue"

itemslist.lastElementChild.style.backgroundColor="blue"



console.log(itemslist.firstElementChild.nextElementSibling)
itemslist.firstElementChild.nextElementSibling.textContent="next elemtn"

console.log(itemslist.previousElementSibling)


////creating element 

var Div=document.createElement('div');
Div.className="text-div";
Div.id="text";
Div.setAttribute('title','just a text')

var divText=document.createTextNode('hello world');
Div.appendChild(divText);
console.log(Div)

///adding to dom

var itemList=document.querySelector('.form')
var h1=document.querySelector('.form h1');

itemList.insertBefore(Div,h1)




var form=document.querySelector('.items-list')
var itm=document.querySelector('.items-list').children[1];

form.insertBefore(Div,itm)


