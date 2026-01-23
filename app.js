let mode = null; // "KK", "KW", "SUSZENIE"

function hideAll(){
    document.getElementById("KodeksK").style.display = "none";
    document.getElementById("KodeksW").style.display = "none";
    document.getElementById("suszenie").style.display = "none";

    document.getElementById("error").innerText = "";
}

function KK(){
    hideAll();
    document.getElementById("KodeksK").style.display = "block";
    mode = "KK";
}

function KW(){
    hideAll();
    document.getElementById("KodeksW").style.display = "block";
    mode = "KW";
}

function Suszenie(){
    hideAll();
    document.getElementById("suszenie").style.display = "block";
    mode = "SUSZENIE";
}

function calculateTotal(){

    if(!mode){
        document.getElementById("error").innerText = "Wybierz kategorię";
        return;
    }

    if(mode === "SUSZENIE"){
        calculateSuszenie();
        return;
    }

    let suma = 0;
    document.querySelectorAll("input[type=checkbox]:checked").forEach(el=>{
        suma += Number(el.value);
    });

    document.getElementById("grzywna").value = suma + " zł";
    document.getElementById("powod").value = "Naruszenie przepisów";
}

function calculateSuszenie(){
    const p = Number(document.getElementById("predkosc").value);

    if(!p || p <= 0){
        document.getElementById("error").innerText = "Podaj przekroczenie prędkości";
        return;
    }

    let mandat = 0;

    if(p <= 10) mandat = 50;
    else if(p <= 20) mandat = 100;
    else if(p <= 30) mandat = 200;
    else if(p <= 40) mandat = 300;
    else if(p <= 50) mandat = 400;
    else mandat = 500;

    document.getElementById("grzywna").value = mandat + " zł";
    document.getElementById("powod").value =
        "Przekroczenie prędkości o " + p + " km/h";
}
