// login form 
document.getElementById('btn-submit').addEventListener('click',function(){
    //email ar jonne
    const inputEmail=  document.getElementById('input-email');
    const emailValue= inputEmail.value;
    //password ar jonne
    const inputPassword = document.getElementById('input-password');
    const passwordValue = inputPassword.value;
    //verify email and passwaord
    if(emailValue==='williamsarkar@gmail.com' && passwordValue=== 'bangladesh'){
         window.location.href='bank.html';
    }
    else{
       alert('invalid password')
    }

})