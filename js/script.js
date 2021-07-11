const resetForm = ()=>{
    const username = document.getElementById('username').value = '';
    const password = document.getElementById('password').value = '';


}
const btn = document.getElementById("login btn");
btn.addEventListener('click', resetForm);

