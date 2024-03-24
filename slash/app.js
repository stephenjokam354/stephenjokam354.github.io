function typeWriterEffect(){
    var songTyping = new Audio("../music/keyboard typing.mp3");
    const words = ["Haii Ariaa...", "Aku Ghibli , salam kenal ya","Ada yang mau kenalan sama kamu ni","Boleh?","Pencet aku"];

    let wordCount = 0;
    let letterCount = 0;

    let currentText = "";
    let currentWord = "";

    let timeOut = 400;

    let isDeleting = false;

    // actual type effect

    function type(){
        
        if(wordCount === words.length){
            wordCount = 0;
        }

        currentWord = words[wordCount];

        if(isDeleting){
            songTyping.pause();
            currentText = currentWord.slice(0, --letterCount);
        }else{
            songTyping.play();
            currentText = currentWord.slice(0, ++letterCount);
        }

        document.querySelector(".typewrite").textContent = currentText;

        timeOut = isDeleting ? 50 : 100;


        //disaat sudah penuh
        if(!isDeleting && currentText.length === currentWord.length){
            songTyping.pause();
            if(wordCount!=words.length-1)
            {
                timeOut = 2000
            }
            else{
                timeOut = 10000;
                document.getElementById("button").disabled=false;
            }
            
            isDeleting = true;
        }
        // disaat semua sudah habiss
        else if(isDeleting && currentText.length === 0){
            
            timeOut = 2000;
            isDeleting = false;
            wordCount++; // kata selanjutnya
        }
        setTimeout(type, timeOut);
        
        }
        type();
    }

    typeWriterEffect();
    

function message(pesan){

   
    let letterCount = 0;
    let currentWord = "";
    function messagetype(){
    let currentText = "";
    
    let selesai = true;
    
    currentWord = pesan;
    currentText = currentWord.slice(0, ++letterCount);
    document.querySelector(".typewrite").textContent = currentText;
    if(currentText.length!=currentWord.length)  setTimeout(messagetype,100);
   // kayaknya muter trs
    }
    messagetype();
    //bikin style animasi cuman nanti dipanggil lewat javascript
    //buat fade up / pun lainnya:)

}




