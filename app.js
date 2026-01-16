
const powodgg = document.getElementById('powod');
const czasgg = document.getElementById('czas');
const grzywnagg = document.getElementById('grzywna');
const error1dis = document.getElementById('error1');
const error2dis = document.getElementById('error2');
let suszenie = 0;
let KWW = 0;  
let KKK = 0;
let KDD = 0;
function reset(){
  let checkboxes = document.querySelectorAll('.check1');
  grzywnagg.value = 0;
  czasgg.value = 0;
  powodgg.value = "";
    
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      checkbox.checked = false;
    }
  })


}

function calculateTotal() {
    error1dis.innerHTML = "";
    error2dis.innerHTML = "";
    let wyrok = 0;
    let grzywna = 0;
    let powod = "";
    grzywnagg.value = 0;
    czasgg.value = 0;
    powodgg.value = "";


    
    let checkboxes = document.querySelectorAll('.check1');

    
    checkboxes.forEach(function(checkbox) {
        
        if (checkbox.checked) {
            wyrok += parseInt(checkbox.dataset.value1);
            grzywna += parseInt(checkbox.dataset.value2);
            powod += checkbox.dataset.value3 + " ";
        }
    });

    if(suszenie == 0 && KDD == 0){
    console.log(`wyrok: ${wyrok}`);
    console.log(`grzywna: ${grzywna}`)
    console.log(`powod: ${powod}`)
    powodgg.value  = powod;
    czasgg.value  = wyrok;
    grzywnagg.value  = grzywna;
    if(wyrok > 6000){
        error1dis.innerHTML = "!Uwaga maksymalny czas wyroku to XXXXX sec.!"
    }
    if(grzywna > 10000){
      error2dis.innerHTML = "!Uwaga maksymalny mandat to XXXXXX PLN!"
    }}
    else if(KWW == 0 && KKK == 0 && KDD== 0){
      let predkosc = document.getElementById('predkosc').value;
      let artykol = 72;
      predkosc -= wyrok;
      if(predkosc < 0){
        error2dis.innerHTML = "!Uwaga błąd obliczania: ujemna prędkość!"
      }
      else if (predkosc > 0 && predkosc <= 10) {
        artykol = 72;
        grzywna = 50;
      } else if (predkosc > 10 && predkosc <= 15) {
        artykol = 73;
        grzywna = 100;
      } else if (predkosc > 15 && predkosc <= 20) {
        artykol = 74;
        grzywna = 200;
      } else if (predkosc > 20 && predkosc <= 25) {
        artykol = 75;
        grzywna = 300;
      } else if (predkosc > 25 && predkosc <= 30) {
        artykol = 76;
        grzywna = 400;
      } else if (predkosc > 30 && predkosc <= 40) {
        artykol = 77;
        grzywna = 1200;
      } else if (predkosc > 40 && predkosc <= 50) {
        artykol = 78;
        grzywna = 1500;
      } else if (predkosc > 50 && predkosc <= 60) {
        artykol = 79;
        grzywna = 2250;
      } else if (predkosc > 60 && predkosc <= 70) {
        artykol = 80;
        grzywna = 3000;
      } else if (predkosc > 70) {
        artykol = 81;
        grzywna = 5000;
      }
      


      powodgg.value = "Dz.U. 2021 poz 2484 § III.B."+artykol+" ("+predkosc+"km/h)";
      grzywnagg.value  = grzywna;
     
    }
    else if(KWW == 0 && KKK == 0 && suszenie== 0){
        console.log(`wyrok: ${wyrok}`);
        console.log(`grzywna: ${grzywna}`)
        console.log(`powod: ${powod}`)
        powodgg.value  =  "Dz.U. 2021 poz 2484  § "+ powod;
        czasgg.value  = 0;
        grzywnagg.value  = grzywna;

    }
    else{
      error2dis.innerHTML = "!Uwaga podczas korzystania z KODEKSÓW odznacz kat. SUSZENIE Lub Kodeks Drogowy!";
    }

}

function myFunction() {
   
    let copyText = powodgg;
  
    
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
  
    
    navigator.clipboard.writeText(copyText.value);
  
  
  }
  function myFunction2() {
   
    let copyText = idgraczgg;
  
    
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
  
    
    navigator.clipboard.writeText(copyText.value);
  
    
  }
  function myFunction3() {
   
    let copyText = czasgg;
  
    
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
  
    
    navigator.clipboard.writeText(copyText.value);
  
 
  }
  function myFunction4() {
   
    let copyText = grzywnagg;
  
    
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
  
    
    navigator.clipboard.writeText(copyText.value);
  
  }



function KK(){
  
  if (KKK == 0){
    document.getElementById('KodeksK').style.display = 'block';
    document.getElementById('kodeksKBtn').classList.remove("wybierz");
    document.getElementById('kodeksKBtn').classList.add("wybierzG");
    KKK++;
    if(KDD==1){
      KD();
    }
    if(suszenie==1){
      Suszenie();
    }
  }
  else{
    document.getElementById('KodeksK').style.display = 'none';
    document.getElementById('kodeksKBtn').classList.add("wybierz");
    document.getElementById('kodeksKBtn').classList.remove("wybierzG");
    KKK=0;
  }
    

}

function KW(){
  
  if (KWW == 0){
    document.getElementById('KodeksW').style.display = 'block';
    document.getElementById('kodeksWBtn').classList.remove("wybierz");
    document.getElementById('kodeksWBtn').classList.add("wybierzG");
    KWW++;
    if(KDD==1){
      KD();
    }
    if(suszenie==1){
      Suszenie();
    }
  }
  else{
    document.getElementById('KodeksW').style.display = 'none';
    document.getElementById('kodeksWBtn').classList.add("wybierz");
    document.getElementById('kodeksWBtn').classList.remove("wybierzG");
    KWW=0;
  }
    

}
function KD(){

    if (KDD == 0){
        document.getElementById('KodeksD').style.display = 'block';
        document.getElementById('kodeksDBtn').classList.remove("wybierz");
        document.getElementById('kodeksDBtn').classList.add("wybierzG");
        KDD++;
        if(suszenie==1){
          Suszenie();
        }
        if(KWW==1){
          KW();
        }
        if(KKK==1){
          KK();
        }
      }
      else{
        document.getElementById('KodeksD').style.display = 'none';
        document.getElementById('kodeksDBtn').classList.add("wybierz");
        document.getElementById('kodeksDBtn').classList.remove("wybierzG");
        KDD=0;
      }
      reset();
        
}



function Suszenie(){
  
  if (suszenie == 0){
    document.getElementById('suszenie').style.display = 'block';
    document.getElementById('suszenieBtn').classList.remove("wybierz");
    document.getElementById('suszenieBtn').classList.add("wybierzG");
    suszenie++;
    if(KDD==1){
      KD();
    }
    if(KWW==1){
      KW();
    }
    if(KKK==1){
      KK();
    }
  }
  else{
    document.getElementById('suszenie').style.display = 'none';
    document.getElementById('suszenieBtn').classList.add("wybierz");
    document.getElementById('suszenieBtn').classList.remove("wybierzG");
    suszenie=0;
  }
  reset(); 

}

