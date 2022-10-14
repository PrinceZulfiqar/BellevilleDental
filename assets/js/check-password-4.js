function CheckPassword(inputtxt) 
{ 
var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,15}$/;
if(inputtxt.match(decimal)) 
{ 
return true;
}
else
{ 
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Enter [8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character]',
      })
return false;
}
} 