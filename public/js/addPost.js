const jobFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();
   
    if (title && body ) {
        const response = await fetch('/api/dashboard', {
            method: "POST",
            body: JSON.stringify({title, body}),
            headers: {"Content-Type" : "application/json"},
        });

        if(response.ok) {
            document.location.reload();
        } else {
            alert('failed to create new job post');
        }
    }
}

document.querySelector('.post-form').addEventListener('submit', jobFormHandler);