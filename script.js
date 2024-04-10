function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskInput.value;
        taskList.appendChild(li);

        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        li.addEventListener("contextmenu", function(e) {
            e.preventDefault();
            taskList.removeChild(li);
        });

        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
