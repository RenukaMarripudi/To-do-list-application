function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
  
    if (task === "") return;
  
    const li = document.createElement("li");
    li.textContent = task;
  
    const btns = document.createElement("div");
    btns.className = "task-buttons";
  
    const doneBtn = document.createElement("button");
    doneBtn.className = "complete-btn";
    doneBtn.textContent = "✅";
    doneBtn.onclick = () => li.classList.toggle("completed");
  
    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.textContent = "❌";
    delBtn.onclick = () => li.remove();
  
    btns.appendChild(doneBtn);
    btns.appendChild(delBtn);
    li.appendChild(btns);
  
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
  
