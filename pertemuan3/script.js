const bgColorSelect = document.getElementById('bgColorSelect');
const fontSelect = document.getElementById('fontSelect');
const increaseFont = document.getElementById('increaseFont');
const decreaseFont = document.getElementById('decreaseFont');
const toggleDarkMode = document.getElementById('toggleDarkMode');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
let fontSize = 30;

// Ganti background color
bgColorSelect.addEventListener('change', () => {
  document.body.style.backgroundColor = bgColorSelect.value;
});

// Ganti font style
fontSelect.addEventListener('change', () => {
  document.body.style.fontFamily = fontSelect.value;
});

// Ubah ukuran font
increaseFont.addEventListener('click', () => {
  fontSize += 15;
  document.body.style.fontSize = fontSize + 'px';
});

decreaseFont.addEventListener('click', () => {
  if (fontSize > 20) {
    fontSize -= 8;
    document.body.style.fontSize = fontSize + 'px';
  }
});

// Toggle full dark mode
toggleDarkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Tambah task
addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', () => li.remove());

  // Mark completed
  li.addEventListener('click', () => li.classList.toggle('completed'));

  // Edit task
  li.addEventListener('dblclick', () => {
    const newText = prompt('Edit your task:', li.firstChild.textContent);
    if (newText) li.firstChild.textContent = newText;
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = '';
}
