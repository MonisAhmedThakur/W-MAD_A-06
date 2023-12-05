if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => {
            console.log("service worker registered")
            Notification.requestPermission().then(res =>{
                if (Notification.permission == 'granted'){
                    console.log("Granted Permission")
                    return;
                }
                console.log(res)
            })
        })
        .catch(err => console.log("service worker not registered", err));
    });
    navigator.serviceWorker.ready.then((Notification) => {
        var options = {
            body: 'This is Reminder Message',
            icon: '/assets/icons/i-48.png',
        };
        Notification.showNotification('This is Namaz App', options);
    })
  }
  


  setInterval(() => {
    document.querySelector(".time")
    .innerHTML = moment().format(
      `hh:mm:ss`);
  },1000);
  setInterval(() => {
    document.querySelector(".date")
    .innerHTML = moment().format(
      `dddd, DD-MMM-YYYY`);
  },1000);


//     function digiClock() {
//       var today = new Date();
//       var h = today.getHours();
//       var m = today.getMinutes();
//       var s = today.getSeconds();
//       var session = "AM"

//       if (h > 11){
//           session = "PM"
//       }

//       m = checkTime(m);
//       s = checkTime(s);
//       document.getElementById("clock").innerHTML = h + ":" + m + ":" + s + session;
//       var t = setTimeout(function(){ digiClock() }, 500);
//   }

//   function checkTime(i) {
//       if (i < 10) {
//           i = "0" + i;
//       }
//       return i;
//   }

//   function alarm() {
//       var today = new Date();
//       var h = today.getHours();
//       var m = today.getMinutes();
//       var s = today.getSeconds();
//       var session = "AM";

//       if (h > 11) {
//           session = "PM";
//       }

//       // Check if it's 10:21:00 AM
//       if (h === 10 && m === 21 && s === 0 && session === "AM") {
//           alert("It is 10:21am, time to take a break from coding");
//       }
//   }

//   // Uncomment the following line if you want the alarm function to be called periodically
//   // setInterval(alarm, 1000); // Check every second

//   // Call the digiClock function when the page loads
//   window.onload = function() {
//       digiClock();
//   };