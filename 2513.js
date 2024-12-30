// sabse phele hum value get krte heia ki aur wowo kee hota uske 1st step yaha se suru hota 
// lets got

const email=document.getElementById('email');
const pass=document.getElementById('password');
const button=document.getElementById('mybtn');

// yee jo id wal yee is pe himen apne humne dom ko sekecet kiya hai ki humnko kaaam kis pe krnahai ok 
// abb hmne id se value get kr li hai abb hmar kaam hai validation lgana 


// ok lets go 

           let email_Valid = false;


email.addEventListener('input',()=>{
    // abb hum value get karet hai jo user input mai fill kaega 
    const email_value_ko_get=email.value;
    if(email_value_ko_get.length > 3  && email_value_ko_get.includes('@') && email_value_ko_get.includes('.') ){
        // email.className = 'input-success';
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        email_Valid = true;
    }else{
        // email.className = 'input-error';
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
        email_Valid =false ;
    }
});





let password_valid=false;

pass.addEventListener('input',()=>{
const password =pass.value;
if(password.length>8){
// pass.className='input-success';
/*

jo yhah pe classList.remove or class.lisstadd lga hai yee 

boot starap ka feature hai theek hai */ 
pass.classList.remove('is-invalid');
        pass.classList.add('is-valid');
        password_valid=true;
}else{
    // pass.className='input-error';
    pass.classList.remove('is-valid');
    pass.classList.add('is-invalid');
    password_valid=false;
}


});



button.addEventListener('click', (event) => {
    event.preventDefault();
   console.log(alert("dharmidner"))
});



/* iissss ke stajt abba yhaa form validariotn khata  hot ahai */
