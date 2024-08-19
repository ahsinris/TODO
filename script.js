const input_box =document.getElementById("input-box")
const list_container =document.getElementById("list-container")

let uniqueTask = new Set()
function addTask(){
    let task=input_box.value.trim()
    if(task===""){
        alert("you must write something")
    }
    else if(uniqueTask.has(task)){
        alert("the same task alread added")
    }
    else{
        let li= document.createElement("li")
        li.innerHTML=task
        
        list_container.appendChild(li)
        let span =document.createElement("span")
        span.innerHTML="\u00d7" 
        li.appendChild(span)
        uniqueTask.add(task)
        storeData()
    }
    input_box.value=""
}


  
   
list_container.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        storeData()
    }
    else if(e.target.tagName==="SPAN"){
        let task =e.target.parentElement.firstChild.textContent.trim()
        uniqueTask.delete(task)
        e.target.parentElement.remove()
        storeData()
    }
})

function storeData(){
    localStorage.setItem("data",list_container.innerHTML)
    localStorage.setItem("uniqueTask",JSON.stringify(Array.from(uniqueTask)))

    
}

var a =10
function listdata(){
    list_container.innerHTML = localStorage.getItem("data") || "";
    uniqueTask=new Set(JSON.parse(localStorage.getItem("uniqueTask")||"[]"))
}
listdata()


 