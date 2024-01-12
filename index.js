const inputEl=document.querySelector(".input")
const bodyEl=document.querySelector("body")
console.log(bodyEl)


inputEl.checked=JSON.parse(localStorage.getItem("mode"))


inputEl.addEventListener("input", ()=>{
     localStore()
     updateBody()

})



function  updateBody(){
    
    if (inputEl.checked){
        bodyEl.style.backgroundColor="black"
    }
    else{
        bodyEl.style.backgroundColor="white"
    }

}


function localStore(){

    localStorage.setItem("mode", JSON.stringify(inputEl.checked))

}

localStore()
updateBody()