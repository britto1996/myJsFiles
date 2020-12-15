
var ul = document.getElementById('list')
var li;

var addTodo = document.getElementById('add')
addTodo.addEventListener('click',addItem)

var removeTodo = document.getElementById('remove')
removeTodo.addEventListener('click',removeItem)


function addItem(){
  var input = document.getElementById('addText').value
  ul = document.getElementById('list')
  var textNode = document.createTextNode(input)
  if(input==""){
    document.getElementById('dynamicText').textContent = 'Enter Any Todo'

    return false
    
  }else{
    document.getElementById('dynamicText').textContent = ''
    let li = document.createElement('li')
    var checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.setAttribute('id', 'check')

    var label = document.createElement('label')
    label.setAttribute('for', 'item')
    ul.appendChild(li)
    li.appendChild(checkbox)
    label.appendChild(textNode)
    li.appendChild(label)
    ul.before(li, ul, childNodes[0])

    input.value = ''



  }
}



function removeItem(){
  li = ul.children
  for(let index=0; index<li.length; index++){
    while(li[index] && li[index].children[0].checked){
        ul.removeChild(li[index])
    }
  }
}

