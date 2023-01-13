let bulb = document.getElementById('bulb')
// console.log(a)
setInterval(function(){
bulb.classList.toggle("bulb-toggle1")
setTimeout(function(){
    bulb.classList.toggle("bulb-toggle2")
},1500)
},2500)

let a= document.getElementsByClassName("letters")

 const t=()=>{
  document.getElementsByClassName("section-title")[0].classList.add("scale")
  let icon = document.getElementById("project-img")
  icon.style.opacity="1"
  icon.style.transition="0.7s"
  icon.style.scale="1.1"
  for(let i=0 , j=2;i<a.length , j<a.length;i=i+3 , j=j+3){
  // let n =  Math.floor((Math.random()*3)+1)
    document.getElementsByClassName("letters")[j].classList.add("tilt-right")
    document.getElementsByClassName("letters")[i].classList.add("tilt-left")
    
}
}

const t1=()=>{
  document.getElementsByClassName("section-title")[0].classList.remove("scale")
  let icon = document.getElementById("project-img")
  icon.style.opacity="0.5"
  icon.style.transition="0.7s"
  icon.style.scale="1"
  for(let i=0 , j=2;i<a.length , j<a.length;i=i+3 , j=j+3){
  // let n =  Math.floor((Math.random()*3)+1)
    document.getElementsByClassName("letters")[j].classList.remove("tilt-right")
    document.getElementsByClassName("letters")[i].classList.remove("tilt-left")
    
}
}

