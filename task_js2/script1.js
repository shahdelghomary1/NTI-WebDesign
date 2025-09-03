//  function handleImgChange() {
//       var img = document.getElementById('img-id');
//       if (img.src.endsWith("watch.jpg")) {
//         img.src = "sofa.jpg";
//       } else {
//         img.src = "watch.jpg";
//       }
//     }

var inputElement = document.querySelector('#userName')
inputElement.addEventListener('input' , (e)=>{
    e.target.nextElementSibling.innerText = inputElement.value
})

let allUsers = []
var userForm = document.getElementById('user-form')
userForm.addEventListener("submit" , (e)=>{
  e.preventDefault()
    var newUser = {
        name : e.target.elements.userName.value,
        email : e.target.elements.userEmail.value
    }
    allUsers.push(newUser)
    showallusers()
    console.log('allusers', allUsers)
})

function showallusers() {
    const usersList = document.getElementById('users-list')
    let html = '<div class="row">'
    allUsers.forEach((user, index) => {
        html += `
            <div class="col-md-6 mb-3">
            <div class="card">
            <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
             <p class="card-text">${user.email}</p>
            </div>
            </div>
            </div>
        `
    })
    
    html += '</div>'
    usersList.innerHTML = html
}