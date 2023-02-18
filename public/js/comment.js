const commentFormHandler = async (event) => {
    event.preventDefault();
    
    const content = document.querySelector('#content').value.trim();
    const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    

    if (content) {
        const response = await fetch('/api/comment', {
            method: "POST",
            body: JSON.stringify({content, post_id}),
            headers: {"Content-Type" : "application/json"},
        });

        if(response.ok) {
            document.location.reload();
        } else {
            alert('failed to comment');
        }
    }
}


document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);