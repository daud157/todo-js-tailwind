const inputbox=document.getElementById('inputbox');
const addbtn=document.getElementById('addbtn');
const todolist=document.getElementById('todolist');

let edittdo;

const addtodo=()=>{
  // alert("working");
  
  const inputText = inputbox.value.trim();

  if(inputText.length<=0){
    alert('enter a valid todo');
    return false;
  }
  if(addbtn.value==="Edit"){
  edittdo.target.previousElementSibling.innerHTML=inputText;
  addbtn.value="Add";
  inputbox.value="";
  

  }
  else{

  
  const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = inputText;
        li.appendChild(p);
        p.style.display='inline-block';
       
        // li.innerHTML=inputText;
      
        const editBtn= document.createElement("button");
         editBtn.style.display='inline';
    
        editBtn.style.float='right';
                 
     
        editBtn.innerHTML="Edit";
        li.appendChild(editBtn);


        const deletebtn= document.createElement("button");
         deletebtn.style.display='inline';
         deletebtn.style.float='right';
               
        deletebtn.innerHTML="Delete";
        li.appendChild(deletebtn);
        deletebtn.style.paddingRight='10px';
  
        todolist.appendChild(li);
}

}

const del=(e)=>{
if(e.target.innerHTML==="Delete"){
    todolist.removeChild(e.target.parentElement);

  }
  if(e.target.innerHTML==="Edit"){
      inputbox.value=e.target.previousElementSibling.innerHTML;
      addbtn.value="Edit";
      inputbox.focus();
      edittdo=e;
    
  }

    
}
addbtn.addEventListener('click',addtodo);
todolist.addEventListener('click',del);


