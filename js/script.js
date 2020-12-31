



const [red, green, blue] = [0, 133, 194]

const header = document.querySelector('header')

window.addEventListener('scroll', () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 150
  y = y < 1 ? 1 : y
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  const [r2, g2, b2] = [(red+1)*y, green*y, blue*y].map(Math.round)
  header.style.backgroundColor = `rgb(${r2 *100}, ${g2}, ${b2})`
  if(!window.scrollY || !window.pageYOffset){
    header.style.backgroundColor = `rgb(0, 133, 194)`
  }
  if(y >= 1.1){
    header.style.backgroundColor = `rgb(250, 250, 250)`
    document.getElementById("menu1").style.color = "#0085c2f6"
    document.getElementById("menu2").style.color = "#0085c2f6"
    document.getElementById("menu3").style.color = "#00c292f6"
  }else{
    document.getElementById("menu1").style.color = "#fff"
    document.getElementById("menu2").style.color = "#fff"
    document.getElementById("menu3").style.color = "#fff"
  }
})

