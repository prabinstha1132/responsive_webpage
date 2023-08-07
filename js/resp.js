burger= document. querySelector('.burger')
navbar= document. querySelector('.navbar')
rightNav= document. querySelector('.rightNav')
navbarlist = document. querySelector('.navbar-list')
burger.addEventListener('click', ()=>
{
    navbarlist.classList.toggle('v-class-resp');
rightNav.classList.toggle('v-class-resp');
navbar.classList.toggle('height-nav-resp');

})
 const firstsection=document.querySelector('.firstsection');
 const iconclose=document.querySelector('.icon-close');
const mainbox=document.querySelector('.main-box');
const wrapper=document.querySelector('.wrapper');
const btnsm=document.querySelector('.login-butt')
btnsm.addEventListener('click',()=>{
    wrapper.classList.toggle('active');
  
   
})
iconclose.addEventListener('click',()=>{
    wrapper.classList.remove('active');

})

function validateForm(){
   const username=document.getElementById("uname");
   const phonenumber=document.getElementById("unumber");
   const email=document.getElementById("uemail");
   if(username.value.trim()==""){
    alert('name is too short');
    console.log('form submit unsuccessful');
    return false;
    
   }
   else if(phonenumber.value.trim()==""){
    alert('phone number is empty');
    return false;
   }
   else if(phonenumber.value.length<=10){
    alert('phone number should be 10 digit');
    return false;
   }
   else{
     true;
   }
 }
    
/*toggle means xuyo vane aune xuyena vane jane  eha burger navbar rightNav vaneko chai kun kun classma visibility garne vaneko ho */