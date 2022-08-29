const loadUsers = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data =>displayUsers(data.results))
}

const displayUsers = users => {
    const usersContainer = document.getElementById('users-container');
    for(const user of users){
        console.log(user);
        const userDiv =document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
          <h3>user name </h3>
          <p>Email: ${user.email}</p>
          <p>user location: ${user.location.city} ${user.location.country}</p>
          <p>user info </p>
        
        
        `;
        usersContainer.appendChild(userDiv);
    }
}

loadUsers();