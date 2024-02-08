document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'admin') {
      alert('Login successful!'); // You can replace this with redirection or other actions
      window.location.href = 'home.html';
    } else {
      alert('Invalid username or password. Please try again.');
      document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    }
  });
  