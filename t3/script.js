
window.onload = loadTasks;


function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const li = createTaskElement(taskText);
    document.getElementById('taskList').appendChild(li);

    saveTasks();
    taskInput.value = '';
}

function createTaskElement(taskText, completed = false) {
    const li = document.createElement('li');
    if (completed) li.classList.add('completed');

    li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button class="edit-btn" onclick="editTask(this)">✏️</button>
        <button class="delete-btn" onclick="deleteTask(this)">&times;</button>
    `;

    return li;
}


function toggleComplete(span) {
    span.parentElement.classList.toggle('completed');
    saveTasks();
}


function editTask(button) {
    const li = button.parentElement;
    const taskText = li.querySelector('span').innerText;
    const newTaskText = prompt('Edit Task', taskText);

    if (newTaskText !== null && newTaskText.trim() !== '') {
        li.querySelector('span').innerText = newTaskText.trim();
        saveTasks();
    }
}


function deleteTask(button) {
    const li = button.parentElement;
    li.classList.add('fadeOut');
    setTimeout(() => {
        li.remove();
        saveTasks();
    }, 300);
}


function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(li => {
        tasks.push({
            text: li.querySelector('span').innerText,
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const li = createTaskElement(task.text, task.completed);
        document.getElementById('taskList').appendChild(li);
    });
}
