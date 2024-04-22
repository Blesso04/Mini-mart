// var allStudents = ['Christiana','Imole','Tola','Tolu','Ade',]
// allStudents.shift()
// allStudents.pop()
// allStudents.push('Ola')
// allStudents.unshift('Precious')
// console.log(allStudents);

var cart=[]
console.log(cart);
var carts=[]
console.log(carts);
var carto=[]
console.log(carto);

function addItems() {
    if(input.value === '' || inputi.value === '' || inputii.value === ''){
        alert("Please fill in the space")
    } else{
        console.log(input.value);
        cart.push(input.value)
        document.getElementById('input').value = ''
        console.log(cart);
    showCart()
    console.log(inputi.value);
    carts.push(inputi.value)
    document.getElementById('inputi').value = ''
    console.log(carts);
showCart()
console.log(inputii.value);
    carto.push(inputii.value)
    document.getElementById('inputii').value = ''
    console.log(carto);
    showCart()
    }
}

var cart=[]
console.log(cart);
function addBeginning() {
if(input.value === '' || inputi.value === '' || inputii.value === ''){
    alert("Please fill in the space")
} else{
    console.log(input.value);
    console.log(cart.unshift(input.value));
    document.getElementById('input').value = ''
    console.log(cart);
    show.innerHTML=""
    showCart()
    console.log(inputi.value);
    console.log(carts.unshift(inputi.value));
    document.getElementById('inputi').value = ''
    console.log(carts);
    show.innerHTML=""
    showCart()
    console.log(inputii.value);
    console.log(carto.unshift(inputii.value));
    document.getElementById('inputii').value = ''
    console.log(carto);
    show.innerHTML=""
    showCart()
}
}

var cart=[]
console.log(cart);
function firstDelete() {
    if(show.innerHTML = ''){
        alert("Spaces cannot be empty")
    }else{console.log(input.value);
    console.log(cart.shift(input.value));
    document.getElementById('input').value = ''
    console.log(cart);
    show.innerHTML=""
    showCart()
    console.log(inputi.value);
    console.log(carts.shift(inputi.value));
    document.getElementById('inputi').value = ''
    console.log(carts);
    show.innerHTML=""
    showCart()
    console.log(inputii.value);
    console.log(carto.shift(inputii.value));
    document.getElementById('inputii').value = ''
    console.log(carto);
    show.innerHTML=""
    showCart()
} 
}

var cart=[]
console.log(cart);
function lastDelete() {
    if(show.innerHTML = ''){
        alert("Spaces cannot be empty")
    }else{console.log(input.value);
    console.log(cart.pop(input.value));
    document.getElementById('input').value = ''
    console.log(cart);
    show.innerHTML=""
    showCart()
    console.log(inputi.value);
    console.log(carts.pop(inputi.value));
    document.getElementById('inputi').value = ''
    console.log(carts);
    show.innerHTML=""
    showCart()
    console.log(inputii.value);
    console.log(carto.pop(inputii.value));
    document.getElementById('inputii').value = ''
    console.log(carto);
    show.innerHTML=""
    showCart()
} 
}

var cart=[]
console.log(cart);
function anyDelete() {
var inputOne =Number(document.getElementById('inputa').value)
if(cart.length > 0){
    if (cart.length>= inputOne){
        if(inputa.value === ""){
            modalError.style.display = "block"
        }else{
            cart.splice(inputOne-1 , 1); 
            showCart()
            document.getElementById('inputa').value=''
            modalSuccess.style.display= "block"
            console.log(cart);
        }
    }else{
        alert("invalid number entered")
    }
}else{
    alert("Please fill the space")
}
}
var cart=[]
console.log(cart);
function editList() {
    
var inputTwo =Number(document.getElementById('inputb').value)
var inputThree =document.getElementById('inputc').value
if(inputb.value === "" || inputc.value === ''){
    modalError1.style.display = "block"
    setTimeout(()=>{
        modalError1.style.display = "none"
    },5000)
} else if(inputd.value == "2"){
    console.log(cart.splice(inputTwo-1 , 1, inputThree)); 
    console.log(cart);
    showCart()
    document.getElementById('inputb').value=''
    document.getElementById('inputc').value=''
    document.getElementById('inputd').value=''
    modalSuccess1.style.display = "block"
    setTimeout(()=>{
        modalSuccess1.style.display = "none"
    },5000)
} else if (inputd.value == "3"){
    console.log(carts.splice(inputTwo-1 , 1, inputThree)); 
    console.log(carts);
    showCart()
    document.getElementById('inputb').value=''
    document.getElementById('inputc').value=''
    document.getElementById('inputd').value=''
    modalSuccess1.style.display = "block"
    setTimeout(()=>{
        modalSuccess1.style.display = "none"
    },5000)
    inputc.style.type = "number"
} else if(inputd.value == "4"){
    console.log(carto.splice(inputTwo-1 , 1, inputThree)); 
    console.log(carto);
    showCart()
    document.getElementById('inputb').value=''
    document.getElementById('inputc').value=''
    document.getElementById('inputd').value=''
    modalSuccess1.style.display = "block"
    setTimeout(()=>{
        modalSuccess1.style.display = "none"
    },5000)
} else if(inputd.value == "0"){
    modalError2.style.display = "block"
    setTimeout(()=>{
        modalError2.style.display = "none"
    },5000)
}
    }   
   
    var cart=[]
    console.log(cart);
    function deleteAll() {
        if((input.value === '' || inputi.value === '' || inputii.value === '') || (show.innerHTML = '')){
            alert("Spaces cannot be empty")
         }else{console.log(input.value);
        console.log(cart.splice(0,cart.length));
        document.getElementById('input').value = ''
        console.log(cart);
        show.innerHTML=""
        showCart()
    } 
    }
    function showCart() {
        show.innerHTML=""
        show.innerHTML += `
        <tr >
        <th class="table-dark">S/N</th>
        <th class="table-dark">Items</th>
        <th class="table-dark price">Price</th>
        <th class="table-dark">Quantity</th>
        </tr>
        `
        for(i=0;i < cart.length;i++){
            show.innerHTML+= 
            `<tr class="table-light" ><td>${i+1} </td><td> ${cart[i]}</td><td id="price"> \u20A6${carts[i]}</td><td>${carto[i]}</td><td> <button class="btn btn-sm btn-danger mx-2 " onclick="del(${i})">Delete</button></td><td><button class="btn btn-sm btn-danger mx-2 " data-bs-toggle="modal" data-bs-target="#exampleModal1"  id="showInput">Edit</button></td></tr>
            
            `
            
        }
        show.innerHTML +=
         `<button class="w-100 btn btn-outline-danger my-2 btn-sm" id="calculateButton" onclick="calculateTotal()">Get total price</button>`
         display.style.display = "block"
        
    }


document.getElementById('calculateButton')
function addRow(input,inputi,inputii) {
    var table= document.getElementById('show');
    var row = table.insertRow(-1);
var cell1=row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
cell1.textContent = input;
cell2.textContent = inputi;
cell3.textContent =inputii
cell2.className ='price';
}
 function calculateTotal() {
    var prices=document.querySelectorAll('#show.price');
    var total = 0;
    prices.forEach(function(price){
        total += parseFloat(price.innerText) || 0;
    });
    document.getElementById('display').innerText ='Total price: $' + total;
};
// .toFixed(2)
function del(index) {
    var confirmation = confirm("Are you sure you want to delete?")
   if(confirmation == true){
    cart.splice(index,1)
    carts.splice(index,1)
    carto.splice(index,1)
    showCart()
    
   } else{

   }
}


// calculateTotal()



// modalError.style.display = modalError.style.display === "none" ? "block" : "none";

 // console.log(inputi.value);
        // cart.push(inputi.value)
        // document.getElementById('inputi').value = ''
        // console.log(cart);
    //     show.innerHTML=""
    //      show.innerHTML=""
    // for(i=0;i < cart.length;i++){
    //     show.innerHTML+= `<p>${i+1} . ${cart[i]}</p>`
    // }

//    var inputOne= prompt("Enter index")
//    var inputTwo= prompt("Enter new value")
//    var confirmation = confirm("Are you sure you want to proceed?")
//    if(confirmation == true){
//     console.log(cart.splice(inputOne-1 , 1, inputTwo)); 
//     console.log(cart);
//     showCart()

//    }

// function showCart() {
//     show.innerHTML=""
//     for(i=0;i < cart.length;i++){
//         show.innerHTML+= `<p>${i+1} . ${cart[i]}</p>`
//     }
// }
//     var inputOne= Number(prompt("Enter index"))
//    var confirmation = confirm("Are you sure you want to proceed?")
//    if(confirmation == true){
//     console.log(cart.splice(inputOne-1 , 1)); 
//     console.log(cart);
//     showCart()
// }
{/* <td>${carts[i]}</td> */}
// document.getElementById("showInput").addEventListener("click",
    // function(){
    //     var inputFields = document.getElementById("inputFields");
        
    // }
    // );
   
    // inputFields.style.display = inputFields.style.display === "none" ? "block" : "none";
    // inputFields.style.display = "block"

 // var index=document.getElementById('input1').value
    // var newValue=document.getElementById('input2').value
    // if (index>= 0 && index < cart.length){
    //     cart[index] = input2;
    //     console.log('Array updated:',cart);
    // }else{
    //     console.error('invalid index')
    // }

 // function updateItems() {
    //     var inputOne =document.getElementById('inputa').value
    //     var inputTwo =document.getElementById('inputb').value
    //    console.log(cart.splice(inputa.value , 1, inputb.value)); 
    //     console.log(cart);
    // showCart()
    
    // if(inputa.value == '' && inputb.value == ''){
    //     console.error("Fill in the spaces");
    //     alert("Fill in the spaces")
    // }
    //     // editList(cart,input1,input2)
    //     // console.log(cart);
    //     document.getElementById('inputa').value = ''
    // document.getElementById('inputb').value = ''
    // }


// var cart=[] 

// function addItems() {
//     if(input.value !== ''){
//         console.log(input.value);
//         console.log(cart);
//         input.value=""
//     } else{
//         console.error("An Error !!")
//     }
// }

 // prompt("which item number do you want to replace")
    // var elementTo = cart.indexOf(prompt. value)
    // prompt("what do you want to put there")
    // var newElement = prompt. value
    // if (elementTo !== -1){
    //     cart.splice(elementTo,1,newElement)
    // }else{
    //     console.log("element not found");
    // }
    // console.log(input.value);
    // console.log(cart.splice(input.value));
    // document.getElementById('input').value = ''
    // console.log(cart);
    // show.innerHTML=""
    // showCart()
