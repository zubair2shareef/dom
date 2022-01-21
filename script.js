// // console.log(document.all)
// // console.log(document.title.innerText)
// // document.title="hello"
// // document.querySelector("header-title").style.borderBottom="solid 3px #000git init"

// document.getElementsByClassName('items-list')[1].innerText="zubair"

// document.getElementsByClassName('items-list')[2].style.backgroundColor="green"


// var items=document.getElementsByClassName('items-list');


// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold'
// }
// console.log(document.getElementsByClassName('items-list'))




// var item=document.getElementsByTagName('li');


// for(let i=0;i<items.length;i++){
//     item[i].style.backgroundColor='red'
// }
// console.log(document.getElementsByClassName('items-list'))

// //-------------queryselector------------

var item2=document.querySelector('.items-list:nth-child(2)');
item2.style.backgroundColor="blue"


var item3=document.querySelector('.items-list:nth-child(3)');
item3.style.co

//-------------queryselectorall------------

var itemm=document.querySelectorAll(".items-list");
itemm[3].style.color="green"

var odd=document.querySelectorAll("li:nth-child(odd)");
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="green"
}