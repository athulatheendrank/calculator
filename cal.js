const displayContent=(content)=>{
    dis.value+=content
}
showResult=()=>{

   try{
    dis.value=eval(dis.value)
   }
   catch{
    dis.value=""
    dis.placeholder="invalid expression!!"
   }
   finally{
    console.log("finally block ,task completed");
    
   }
}
displayclear=()=>{
    dis.value=""
    placeholder="0"
}
remove=()=>{
    dis.value=dis.value.slice(0,-1)
}
