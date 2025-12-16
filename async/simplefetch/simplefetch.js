async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const tableBody = document.querySelector('#postTable tbody')

  posts.forEach(post => {
    const row = document.createElement('tr')

    row.innerHTML += `
    <td>${post.id}</td>
    <td>${post.title}</td>
    <td>${post.body}</td>
    `
    tableBody.append(row)
  });
  
}

fetchPosts();
