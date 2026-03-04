let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks(){
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task,index)=>{
        let li = document.createElement("li");
        li.innerHTML = task + 
        `<button class="delete" onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(li);
    });

    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function addTask(){
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if(task !== ""){
        tasks.push(task);
        input.value="";
        displayTasks();
    }
}

function deleteTask(index){
    tasks.splice(index,1);
    displayTasks();
}

displayTasks();