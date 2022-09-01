let headding =document.querySelector(".title")
let text = headding.innerHTML

let count = 0 

headding.innerHTML=""
function typejs(){   
headding.innerHTML+=text.charAt(count++)
if(count==text.length){
    clearInterval(stop)

}
}



let stop = setInterval (()=>{
    typejs()
},100)