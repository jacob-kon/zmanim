let zip =document.querySelector(".zip")
let button =document.querySelector(".findZman")
let errorMessage = document.querySelector(".error")
let loc =document.querySelector("#location")
let sunrise =document.querySelector("#sunrise")
let sunset =document.querySelector("#sunset")
let validZip =false

 //function to clear all feilds
 function clearFields(){
  loc.innerText=""
  sunrise.innerText=""
  sunset.innerText=""
 }

//function to get zmanim with axios using user proided zip
let zmanChecker = async(zipCode)=>{
  let todaysDate =new Date();
  let d = todaysDate.toISOString().slice(0,10);
  try{
      let response = await axios.get(`https://www.hebcal.com/zmanim?cfg=json&zip=${zipCode}&date=${d}`)
      console.log(response.data)
      loc.innerText=response.data.location.title
      sunrise.innerText=response.data.times.sunrise
      sunset.innerText=response.data.times.sunset
      console.log()
      console.log('**************************')
      console.log(response.data.times)

  }
  catch(error){
      console.error('error cought by me',error);
      errorMessage.innerText ="please enter a valid zipcode"
      setTimeout(()=>{
        errorMessage.innerText =""
      },5000)
      
  }
 };


 function zipValidator(zip){ //checks for exactly five digits in user zip
    if(/^\d{5}$/.test(zip)){
      console.log('thanks that is a valid zip')
      return validZip = true

    }else{
      console.log('pleses enter valid zip')
      errorMessage.innerText ="please enter a valid zipcode"
      setTimeout(()=>{
        errorMessage.innerText =""
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
 
  
