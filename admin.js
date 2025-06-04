function login() {
  const username = document.getElementById('admin-username').value;
  const password = document.getElementById('admin-password').value;

  // Dummy login check
  if (username === 'admin' && password === '1234') {
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('admin-panel').classList.remove('hidden');
  } else {
    alert('Invalid credentials');
  }
}

function logout() {
  document.getElementById('admin-panel').classList.add('hidden');
  document.getElementById('login-section').classList.remove('hidden');
}

function showSection(id) {
  const sections = document.querySelectorAll('.panel-section');
  sections.forEach(section => section.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

// Services Section
function addService() {
  const serviceName = prompt("Enter service name:");
  if (serviceName) {
    const list = document.getElementById('service-list');
    const li = document.createElement('li');
    li.textContent = serviceName;
    list.appendChild(li);
  }
}
