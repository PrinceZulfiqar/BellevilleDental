function myFunction(){
    var EMAIL = document.getElementById('email').value;
    var PASSWORD = document.getElementById('password').value;

    
    if(ValidateEmail(EMAIL) &&  CheckPassword(PASSWORD))
    {
        window.location.href="Request_Apointment.html";
    }
    
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


        // const EMAIL = document.getElementById('email').value;
        // localStorage.setItem(EMAIL);
        // return;     
};

// window.addEventListener('load' , ()=>{
    
//     const EMAIL = localStorage.getItem('emailname');

//     document.getElementById('em').innerHTML= Email
// })