let tasks = [];
let filterValue = "all";
let sortValue = "";

function addTask() {
    let name = document.getElementById("task_name").value;
    let description = document.getElementById("task_description").value;
    let dueDate = document.getElementById("task_due_date").value;

    if (name === "" || description === "" || dueDate === "") {
        alert("Fill in all fields");
        return;
    }

    tasks.push({
        name: name,
        description: description,
        dueDate: dueDate,
        status: "pending"
    });

    document.getElementById("task_name").value = "";
    document.getElementById("task_description").value = "";
    document.getElementById("task_due_date").value = "";

    displayTasks();
}

function displayTasks() {
    let taskList = tasks;

    if (filterValue !== "all") {
        taskList = taskList.filter(task => task.status === filterValue);
    }

    if (sortValue === "name") {
        taskList = [...taskList].sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortValue === "dueDate") {
        taskList = [...taskList].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    }

    document.getElementById("task_display").innerHTML = `
        <div class="col-12">
            <table class="table table-bordered">
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                ${taskList.map(task => {
                    let index = tasks.indexOf(task);
                    return `
                        <tr>
                            <td>${task.name}</td>
                            <td>${task.description}</td>
                            <td>${task.dueDate}</td>
                            <td>${task.status}</td>
                            <td>
                                <button class="btn btn-success btn-sm" onclick="completeTask(${index})">Complete</button>
                                <button class="btn btn-warning btn-sm" onclick="editTask(${index})">Edit</button>
                                <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Delete</button>
                            </td>
                        </tr>
                    `;
                }).join("")}
            </table>
        </div>
    `;

    updateAnalytics();
}

function completeTask(index) {
    tasks[index].status = "completed";
    displayTasks();
}

function editTask(index) {
    tasks[index].name = prompt("Task name", tasks[index].name) || tasks[index].name;
    tasks[index].description = prompt("Task description", tasks[index].description) || tasks[index].description;
    tasks[index].dueDate = prompt("Due date", tasks[index].dueDate) || tasks[index].dueDate;
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function filterTasks() {
    filterValue = document.getElementById("status_filter").value;
    displayTasks();
}

function sortTasks() {
    sortValue = document.getElementById("task_sort").value;
    displayTasks();
}

function updateAnalytics() {
    let total = tasks.length;
    let completed = tasks.filter(task => task.status === "completed").length;
    let pending = total - completed;

    document.getElementById("task_analytics").innerHTML = `
        <div class="col-md-4">Total tasks: ${total}</div>
        <div class="col-md-4">Pending tasks: ${pending}</div>
        <div class="col-md-4">Completed tasks: ${completed}</div>
    `;
}

document.getElementById("add_task_button").addEventListener("click", addTask);
document.getElementById("status_filter").addEventListener("change", filterTasks);
document.getElementById("task_sort").addEventListener("change", sortTasks);

displayTasks();
