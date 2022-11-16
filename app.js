let zip =document.querySelector(".zip")
let button =document.querySelector(".findZman")


button.addEventListener('click',()=>{
  //add validator for a valid zip
  zmanChecker(zip.value)
})
let zmanChecker = async(zipp)=>{
 
  let todaysDate =new Date();
  let d = todaysDate.toISOString().slice(0,10);
  try{
      let response = await axios.get(`https://www.hebcal.com/zmanim?cfg=json&zip=${zipp}&date=${d}`)
      console.log(response.data)
      // let day =  response.data.date;
      console.log()
      console.log('**************************')
      console.log(response.data.times)
  }
  catch(error){
      console.error('error cought by me',error);
  }
 };




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
 
  
