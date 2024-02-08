
const convert = document.querySelector(".convert")
const lengths = document.querySelector(".length")
const volume = document.querySelector(".volume")
const mass = document.querySelector(".mass")
const error = document.querySelector(".error span")
const mode = document.querySelector(".mode")
const background = document.querySelector(".results")
convert.addEventListener("click",()=>{
    error.innerHTML = ""
    let input = Number(document.querySelector('.input').value)
    if (input){
        let me_to_fe =(input * 3.281);
        let fe_to_me =(input/3.281) 
        let  li_to_ga =(input * 0.264)
        let ga_to_li=(input/0.264 ) 
        let ki_to_po =(input *  2.204);
        let po_to_ki =(input/2.204) 

        
        lengths.innerHTML =`${input} meters = ${me_to_fe.toFixed(3)} feets | 
                            ${input} feets = ${fe_to_me.toFixed(3)} meters`
                            
        volume.innerHTML =`${input} liters = ${li_to_ga.toFixed(3)} gallons | 
                          ${input} gallons = ${ ga_to_li.toFixed(3)} liters`
                          
        mass.innerHTML =`${input} kilos = ${ ki_to_po.toFixed(3)} pounds | 
                           ${input} pounds = ${ po_to_ki.toFixed(3)} kilos`  
    }else{

        error.innerHTML =`Oooops,Just enter numbers 🫥`
    }

})

mode.addEventListener("click", () => {
    if (mode.getAttribute("src")==="images/lightmode.png") {
      mode.setAttribute("src", "images/darkmode.png");
      background.style.backgroundColor="#000000"

    } else if (mode.getAttribute("src")==="images/darkmode.png") {
      mode.setAttribute("src", "images/lightmode.png");
      background.style.backgroundColor="white"
    }
  })
  
