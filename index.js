const todo_form = document.querySelector(".todo_form");
const todo_input = document.querySelector(".todo_input");
const todo_button = document.querySelector(".todo_button");
const todo_ulist = document.querySelector(".todo_ulist");
let editMode = false;
let editItem;

todo_form.addEventListener("submit", function(e){
    e.preventDefault();
    const text = todo_input.value.trim();
    console.log(text);
    if(text){
        if(editMode){
            editItem.firstChild.textContent = text;
            todo_button.innerText = "Add Todo";
            todo_input.value = "";
            editMode=false;
            return;
        }
        addTodo(text);
        todo_input.value = "";
    }
    else{
        alert("enter valid text!");
    }
    
    
})

todo_ulist.addEventListener("click", function(e){
    const target = e.target;
    if(target.tagName === "BUTTON"){
        const list = target.parentNode;
        if(target.innerText === "❌"){
            list.remove();
        }
        else if(target.innerText === "✒️"){
            editMode = true;
            editItem = list;
            todo_button.innerText ="Edit todo";
            todo_input.value = list.firstChild.textContent;
            todo_input.focus(); 

        }
    }
})

function addTodo(text){
    const todo_list = document.createElement("li");
    const todo_delete = document.createElement("button");
    const todo_edit = document.createElement("button");
    const div = document.createElement("div");

     todo_list.id = "todo_list";
     todo_list.innerHTML = `<span>${text}</span>`;
     todo_delete.innerText = "❌";
     todo_edit.innerText = "✒️";
     todo_list.appendChild(todo_delete);
     todo_list.appendChild(todo_edit);
     todo_ulist.appendChild(todo_list);

}



