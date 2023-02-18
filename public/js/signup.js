
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#create-username').value.trim();
    const email = document.querySelector('#create-email').value.trim();
    const password = document.querySelector('#create-password').value.trim();

   
  
    // if(firstName && lastName && email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: {'Content-Type': 'application/json'},
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('failed to sign up');
      }
    // }
  };


  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);