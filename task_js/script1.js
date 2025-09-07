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

// مصفوفة لحفظ جميع المستخدمين
let allUsers = []

var userForm = document.getElementById('user-form')
userForm.addEventListener("submit" , (e)=>{
  e.preventDefault()
    
    // إنشاء كائن المستخدم الجديد
    var newUser = {
        name : e.target.elements.userName.value,
        email : e.target.elements.userEmail.value
    }
    
    // إضافة المستخدم الجديد للمصفوفة
    allUsers.push(newUser)
    
    // عرض جميع المستخدمين
    displayUsers()
    
    // مسح النموذج
    e.target.reset()
    
    console.log('جميع المستخدمين:', allUsers)
})

// دالة لعرض المستخدمين
function displayUsers() {
    const usersList = document.getElementById('users-list')
    
    if (allUsers.length === 0) {
        usersList.innerHTML = '<p class="text-muted">لا يوجد مستخدمين مضافين بعد</p>'
        return
    }
    
    let html = '<div class="row">'
    
    allUsers.forEach((user, index) => {
        html += `
            <div class="col-md-6 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                        <p class="card-text">${user.email}</p>
                        <button class="btn btn-danger btn-sm" onclick="deleteUser(${index})">حذف</button>
                    </div>
                </div>
            </div>
        `
    })
    
    html += '</div>'
    usersList.innerHTML = html
}

// دالة لحذف مستخدم
function deleteUser(index) {
    allUsers.splice(index, 1)
    displayUsers()
}

// عرض المستخدمين عند تحميل الصفحة
displayUsers()