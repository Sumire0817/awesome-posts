document.addEventListener("DOMContentLoaded", () => {
    const ApiUrl = "https://jsonplaceholder.typicode.com/posts";
    const postContainer = document.querySelector(".posts-container");

    async function fetchPosts() {
        try {
            // HTTP request
            const response = await fetch(ApiUrl);
            const posts = await response.json();

            // Remove loading text
            postContainer.innerHTML = "";

            // Render posts
            posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("post-card");
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;
                postContainer.appendChild(postElement);
            });
        } catch (error) {
            console.error("Error fetching posts:", error);
            postContainer.innerHTML = `<p class="error">Failed to load posts. Please try again later.</p>`;
        }
    }

    // Call the fetchPosts function
    fetchPosts();
});
