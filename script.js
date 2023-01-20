let bulb = document.getElementById('bulb')
// console.log(a)
setInterval(function(){
bulb.classList.toggle("bulb-toggle1")
setTimeout(function(){
    bulb.classList.toggle("bulb-toggle2")
},1500)
},2500)

let a= document.getElementsByClassName("letters")
let project = document.getElementById('projects')
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
projects.addEventListener('mouseover', t)
projects.addEventListener('mouseout', t1)

let about = document.getElementById('about-me')
let abtsec = document.getElementById('about-sec')
let heart = document.getElementsByClassName('abt-heart')[0]
let bag = document.getElementById('bag')
function add(){
  about.style.transform="scale(0)"
  heart.style.transform='scale(5)'
  bag.style.opacity="0.7"
  bag.style.scale='1.1'
}
function remove(){
  about.style.transform="scale(1)"
  heart.style.transform='scale(0)'
  bag.style.opacity="0.5"
  bag.style.scale='1' 
}
abtsec.addEventListener('mouseover', add)
abtsec.addEventListener('mouseout', remove)