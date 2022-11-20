let zip =document.querySelector(".zip")
let button =document.querySelector(".findZman")
let errorMessage = document.querySelector(".error")
let loc =document.querySelector("#location")
let sunrise =document.querySelector("#sunrise")
let sunset =document.querySelector("#sunset")
let alotHaShachar=document.querySelector("#alotHaShachar")
let misheyakir= document.querySelector("#misheyakir")
let sofZmanShma= document.querySelector("#sofZmanShma")
let sofZmanShmaMGA=document.querySelector("#sofZmanShmaMGA")
let sofZmanTfilla=document.querySelector("#sofZmanTfilla")
let sofZmanTfillaMGA=document.querySelector("#sofZmanTfillaMGA")
let night42Min=document.querySelector("#night42Min")
let night50Min=document.querySelector("#night50Min")
let validZip =false

 //function to clear all feilds
 function clearFields(){
  loc.innerText=""
  sunrise.innerText=""
  sunset.innerText=""
 }

 function ChangeMilitaryTime(MilitaryTime){
  let regularHours =  (Number(MilitaryTime.slice(0,2))%12).toString()
  return MilitaryTime.replace(/../,regularHours)
}

//function to get zmanim (times) with axios using users zip
let zmanChecker = async(zipCode)=>{
  let todaysDate =new Date();
  let d = todaysDate.toISOString().slice(0,10);
  console.log('todaysDate',todaysDate)
  console.log('d',d)
  try{
      let response = await axios.get(`https://www.hebcal.com/zmanim?cfg=json&zip=${zipCode}&date=${d}&sec=1`)
      console.log(response.data)
      loc.innerText=response.data.location.title
      
      alotHaShachar.innerText=`${response.data.times.alotHaShachar.slice(11,19)} AM`
      misheyakir.innerText=`${response.data.times.misheyakir.slice(11,19)} AM`
      sunrise.innerText=`${response.data.times.sunrise.slice(11,19)} AM`
      sofZmanShema.innerText=`${response.data.times.sofZmanShma.slice(11,19)} AM`
      sofZmanShemaMGA.innerText=`${response.data.times.sofZmanShmaMGA.slice(11,19)} AM`
      sofZmanTfilla.innerText=`${response.data.times.sofZmanTfilla.slice(11,19)} AM`
      sofZmanTfillaMGA.innerText=`${response.data.times.sofZmanTfillaMGA.slice(11,19)} AM`
      sunset.innerText=ChangeMilitaryTime(`${response.data.times.sunset.slice(11,19)} PM`)
      night42Min.innerText=ChangeMilitaryTime(`${response.data.times.tzeit42min.slice(11,19)} PM`) 
      night50Min.innerText=ChangeMilitaryTime(`${response.data.times.tzeit50min.slice(11,19)} PM`) 
      night72Min.innerText=ChangeMilitaryTime(`${response.data.times.tzeit72min.slice(11,19)} PM`)
     
      console.log(response.data.times)

  }
  catch(error){
      console.error('error cought by me in axios api',error);
      heading.innerText ="Zip not found please try again!!!"
      setTimeout(()=>{
        heading.innerText ="Zmanim Checker"
      },2000)
      
  }
 };

  function zipValidator(zip){ //checks for exactly five digits in user zip
    if(/^\d{5}$/.test(zip)){
      // console.log('thanks that is a valid zip')
      return validZip = true

    }else{
      console.log('pleses enter valid zip: caught by zip validator')
      heading.innerText ="Please enter a valid zipcode!!!"

      setTimeout(()=>{
        heading.innerText ="Zmanim Checker"
      },2000)
      return validZip = false
    }
 }
 

 button.addEventListener('click',()=>{
  clearFields()
  zipValidator(zip.value)
  if (validZip){
    zmanChecker(zip.value)
  }
})




 //getting longitude and latitude from user device
//with user permission

// const success = (position) => {
//     console.log(position)
//     console.log('latitude', position.coords.latitude);
//     console.log('longitude', position.coords.longitude);
   
//   };
//   const error = (error) => {
//     console.log(error);
//   };

// function getLocation() {
//     if (!navigator.geolocation) {
//       console.log('Geolocation API not supported by this browser.');
//     } else {
//       console.log('Checking location...');
//       navigator.geolocation.getCurrentPosition(success, error);
//     }
//   }
// getLocation()
 
  
