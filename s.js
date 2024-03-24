//----------Hari-------------

  var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum&#39;at', 'Sabtu'];

  let time = new Date();
  let minutes = time.getMinutes() > 9 ? time.getMinutes() : "0"+time.getMinutes();
  let tanggal = myDays[time.getDay()] + ", " + time.getDate() + " " + months[time.getMonth()] ;

  document.getElementById('time').innerHTML = time.getHours() + ":" + minutes;
  document.getElementById('hari').innerHTML = tanggal;


//------------ audio -------------


// const songButton= document.querySelector("#songButton");
// const songButton2= document.querySelector("#songButton2");
// const songNotif = document.querySelector("#songNotif");
var songNotif= new Audio('music/notification.mp3');
var songButton = new Audio('music/click button.mp3');
var songButton2 = new Audio('music/clickbutton2.mp3');
 
function playNotif(){
  songNotif.play();
}
function playButton1(){
  songButton.play();
}
function playButton2(){
  songButton2.play();
}

// -------------- catatan ----------

const catatan = document.querySelector("#note1");
const animasi = document.querySelector(".login");


var i = 1;

// const catatan2 = document.querySelector("#note2");
function notes(){

    document.querySelector(".btnPesan").style.display = "none";
    document.getElementById("balas").style.display = "none";
    document.getElementById("balas2").style.display = "none";
    document.getElementById("hr").style.display = "none";
    switch(i){
      case 1 : 
      case 2 : 
      case 3 : 
        setTimeout(display,3000);
        animasi.style.animation = "fade 1s" ;
        catatan.innerHTML= catatan2[i-1]
        i++;
        break;
      case 4 :
        kado.style.display = "none";
        catatan.innerHTML= catatan2[i-1]
        setTimeout(displayKado,4000);
        i++;
        break;
      case 5 :
      case 6 :
        kado.style.display = "none";
        catatan.innerHTML= catatan2[i-1]
        setTimeout(display,3000);
        i++; 
        break;
      default: 
      catatan.innerHTML= "See yaaa <br> Kirim Pesan😊";
      document.querySelector(".kirimPesan").style.display = "flex";
    }
}

// ---------------- Button -------------

      const btnPesan = document.querySelector(".btnPesan");
      const emotlucu = document.querySelector(".emotlucu");
      const kado = document.querySelector(".img_kado");
      

      function displayKado(){
        kado.style.display = "flex";
        playNotif();
      }


      function display(){
        // emotlucu.style.display = "flex";
        btnPesan.style.display = "flex";
        playNotif();
      }
      
//------------------- Page 1 Button ---------------
function balas(){
    swal({
    title: "Alhamdulillah...",
    text: "Ada pesan belum dibaca",
    icon: "gif/emotlucu2.gif",
  });
  playButton1();
  setTimeout(display,4000);
  notes();
  
  }
  function tidak(){
    swal({
  title: "Aww! I'll give you a hug.Cheer up !",
  text: "Ada pesan belum dibaca",
  icon: "gif/peluk.gif",
      });

  playButton1();
  setTimeout(display,4000);
  notes();
  
  }

// --------------message typing---------------

  function message(pesan){
    let currentText = "";
    let currentWord = "";
   
    let letterCount = 0;
    function messageType(){
    currentWord = pesan;
    currentText = currentWord.slice(0,++letterCount);
    document.getElementById("note1").innerHTML = currentText;
    if(currentText.length != currentWord.length){
      setTimeout(messageType,80);
      }
    }
    messageType();
  }
  