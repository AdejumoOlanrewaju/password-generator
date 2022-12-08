let characters = 
["A","B","C","D","E","F","G","H","I",
"J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z","a","b","c",
"d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4","5", 
"6", "7", "8", "9","~","`","!","@","#","$",
"%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",
".","?", "/"];

let FieldOne = document.getElementById("field-one")
let FieldTwo = document.getElementById("field-two")
let length = 15

function generateChar(){
  let randomnum = Math.floor(Math.random() * characters.length)
   return characters[randomnum] 
} 

function generatesPassword(){
  let password = ""
  for(let i = 0; i < length; i++){
    password += generateChar()
  }

  return password
}

btn.addEventListener("click", function(){
    let words1 = generatesPassword()
    let words2 = generatesPassword()
    FieldOne.textContent += words1
    FieldTwo.textContent += words2
})

inputEl = document.getElementById("input-el")
inputBtn = document.getElementById("input-btn")
ulEl = document.getElementById("ul-el")
let myLeads = []

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value)
  inputEl.value = ""
  render()
})

function render(){
  let listItems = ""
  for(let i = 0; i < myLeads.length; i++){
    listItems += `<li>
                      <a target = '_blank' href = ${myLeads[i]}>
                        ${myLeads[i]}
                      </a>
                  </li>`
  }
  ulEl.innerHTML = listItems
}