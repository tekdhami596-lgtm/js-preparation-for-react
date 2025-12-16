async function fetchUsers(params) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

     const userList = document.querySelector("#userList");

    users.forEach((user) => {
     
      const li = document.createElement('li')
      li.innerHTML = `<li>${user.name}</li>`
      userList.append(li)
    
    });

  } catch (err) {
    console.log(err)
  }
}

fetchUsers();
