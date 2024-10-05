// Forum Post Submission
function submitPost() {
    const text = document.getElementById('forum-text').value;
    const forumPosts = document.getElementById('forum-posts');

    if (text) {
        const post = document.createElement('div');
        post.classList.add('forum-post');
        post.innerHTML = `
            <p>${text}</p>
            <small>Posted just now</small>
        `;
        forumPosts.prepend(post);
        document.getElementById('forum-text').value = '';
    } else {
        alert("Please write something before submitting.");
    }
}

// Contact Form Submission (you can expand this for backend integration)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for reaching out. We'll get back to you soon!");
});