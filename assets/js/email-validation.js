function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.match(mailformat))
{
return true;
}
else
{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Enter Valid Email Address',
      })
document.getElementById('email').focus();
return false;
}
}