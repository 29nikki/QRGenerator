let URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let downloadBtn = document.getElementById("downloadBtn");


function generateQR(){
    if(qrText.value.length > 0){
        qrImage.src = URL + qrText.value;
        console.log("Generating QR Code");
        imgBox.classList.add("show-img");
        downloadBtn.style.display = "block";
    }
    else{
        qrText.classList.add('error');
        setTimeout(()=>{
           qrText.classList.remove("error"); 
        },1000);
    }
}

function downloadQR() {
    let link = document.createElement('a');
    link.href = qrImage.src;
    link.download = 'qrcode.png';
    link.click();
}

