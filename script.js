console.log("welcome to password generator site!")
let input=document.getElementById("input");
let check=document.getElementById("check");
let love=document.getElementById("love");
let hello=document.getElementById("hello");
let copy=document.getElementById("copy");
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length) {
  let result = ' ';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
input.addEventListener("change",()=>{
 copy.innerText="copy password";
  copy.classList.remove("button2");
      copy.classList.add("button");
  check.innerText=input.value;
  let d=input.value;
    if (d >= 8) {
     hello.classList.add("green");
  }
  else{
       hello.classList.add("red");
    hello.classList.remove("green");
  }
  let a=generateString(d);
  love.innerText=a;
  copy.addEventListener('click',()=>{
 const cb=navigator.clipboard;
  cb.writeText(a);
    copy.innerText="copy successfully";
    copy.classList.add("button2")
    
})

 
})
