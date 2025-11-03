  const password = document.getElementById('password');
    const eye = document.getElementById('toggleEye');

    eye.addEventListener('click', () => {
      if (password.type === 'password') {
        password.type = 'text';
        eye.textContent = 'visibility_off'; 
      } else {
        password.type = 'password';
        eye.textContent = 'visibility';      
      }
    });