document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const postList = document.getElementById('postList');

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        const post = document.createElement('div');
        post.classList.add('post');

        const postTitle = document.createElement('h3');
        postTitle.textContent = title;

        const postContent = document.createElement('p');
        postContent.textContent = content;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');

        // Add event listener to delete the post
        deleteButton.addEventListener('click', () => {
            postList.removeChild(post);
        });

        post.appendChild(postTitle);
        post.appendChild(postContent);
        post.appendChild(deleteButton);

        postList.appendChild(post);

        postForm.reset();
    });
});
