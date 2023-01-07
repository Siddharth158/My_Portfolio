let bulb = document.getElementById('bulb')
// console.log(a)
setInterval(function(){
bulb.classList.toggle("bulb-toggle1")
setTimeout(function(){
    bulb.classList.toggle("bulb-toggle2")
},1500)
},2500)