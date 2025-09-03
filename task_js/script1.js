 function handleImgChange() {
      var img = document.getElementById('img-id');
      if (img.src.endsWith("watch.jpg")) {
        img.src = "sofa.jpg";
      } else {
        img.src = "watch.jpg";
      }
    }
var inputElement = document.querySelector('#userName')

inputElement.addEventListener('input' , (e)=>{
    e.target.nextElementSibling.innerText = inputElement.value
})


var userForm = document.getElementById('user-form')
userForm.addEventListener("submit" , (e)=>{
    e.preventDefault()
    console.log(e.target.elements.userName.value)
    console.log(e.target.elements.userEmail.value)
    var data = [
       {
           name : e.target.elements.userName.value,
           email : e.target.elements.userEmail.value
       }
    ]
    console.log(data)
    

})