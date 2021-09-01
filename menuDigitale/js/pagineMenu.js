function ordinazione1(){
    var antipasti=new Array();
    var i;
    i=0;
    if(ant1.checked){
        antipasti[i]="Antipasto della casa";
        i++;
    }
    if(ant2.checked){
        antipasti[i]="Antipasto all'italiana";
        i++;
    }
    if(ant3.checked){
        antipasti[i]="Prosciutto e melone";
        i++;
    }
    if(ant4.checked){
        antipasti[i]="Caprese";
        i++;
    }
    if(ant5.checked){
        antipasti[i]="Crudo e Bufala";
        i++;
    }
    var ordine="Antipasti selezionati: ";
    for(var j=0;j<i;j++){
        if(j==0)
        ordine= ordine + antipasti[j].bold();
        else
        ordine= ordine + " , " + antipasti[j].bold();
    }
    localStorage.setItem('ordineAntipasti',ordine);
}


function ordinazione2(){
    var primi=new Array();
    var i;
    i=0;
    if(primi1.checked){
        primi[i]="Linguine all'astice";
        i++;
    }
    if(primi2.checked){
        primi[i]="Spaghetti cozze e vongole";
        i++;
    }
    if(primi3.checked){
        primi[i]="Linguine allo scoglio";
        i++;
    }
    if(primi4.checked){
        primi[i]="Stroncatura";
        i++;
    }
    if(primi5.checked){
        primi[i]="Paccheri spada e melanza";
        i++;
    }
    if(primi6.checked){
        primi[i]="Calamarata al sugo di moscardini";
        i++;
    }
    var primiPiatti="Primi piatti selezionati: ";
    for(var j=0;j<i;j++){
        if(j==0)
        primiPiatti= primiPiatti + primi[j].bold();
        else
        primiPiatti= primiPiatti + " , " + primi[j].bold();
    }
    localStorage.setItem('primiPiatti',primiPiatti);
}


function ordinazione3(){
    var pesce=new Array();
    var i;
    i=0;
    if(pesce1.checked){
        pesce[i]="Pesce spada";
        i++;
    }
    if(pesce2.checked){
        pesce[i]="Gamberoni";
        i++;
    }
    if(pesce3.checked){
        pesce[i]="Cozze impepate";
        i++;
    }
    if(pesce4.checked){
        pesce[i]="Frittura mista";
        i++;
    }
    if(pesce5.checked){
        pesce[i]="Grigliata mista";
        i++;
    }
    if(pesce6.checked){
        pesce[i]="Frittura di Alici";
        i++;
    }
    if(pesce7.checked){
        pesce[i]="Orata";
        i++;
    }
    var secondoPesce="Secondi di pesce selezionati: ";
    for(var j=0;j<i;j++){
        if(j==0)
        secondoPesce= secondoPesce + pesce[j].bold();
        else
        secondoPesce= secondoPesce + " , " + pesce[j].bold();
    }
    localStorage.setItem('secondoPesce',secondoPesce);
}


function ordinazione4(){
    var carne=new Array();
    var i;
    i=0;
    if(carne1.checked){
        carne[i]="Tagliata di Carne";
        i++;
    }
    if(carne2.checked){
        carne[i]="Bistecca ai ferri";
        i++;
    }
    var secondoCarne="Secondi di carne selezionati: ";
    for(var j=0;j<i;j++){
        if(j==0)
        secondoCarne= secondoCarne + carne[j].bold();
        else
        secondoCarne= secondoCarne + " , " + carne[j].bold();
    }
    localStorage.setItem('secondoCarne',secondoCarne);
}


function ordinazione5(){
    var fritti=new Array();
    var i;
    i=0;
    if(fritti1.checked){
        fritti[i]="Patatine";
        i++;
    }
    if(fritti2.checked){
        fritti[i]="Crocchette di patate";
        i++;
    }
    if(fritti3.checked){
        fritti[i]="Patate di noisette";
        i++;
    }
    if(fritti4.checked){
        fritti[i]="Patatine e wrustel";
        i++;
    }
    if(fritti5.checked){
        fritti[i]="Anelli di cipolla";
        i++;
    }
    if(fritti6.checked){
        fritti[i]="Mozzarelle panate";
        i++;
    }
    if(fritti7.checked){
        fritti[i]="Olive ascolane";
        i++;
    }
    if(fritti8.checked){
        fritti[i]="Chele di granchio";
        i++;
    }
    if(fritti9.checked){
        fritti[i]="Patatine con buccia";
        i++;
    }
    var ordFritti="Fritti selezionati: ";
    for(var j=0;j<i;j++){
        if(j==0)
        ordFritti= ordFritti + fritti[j].bold();
        else
        ordFritti= ordFritti + " , " + fritti[j].bold();
    }
    localStorage.setItem('fritti',ordFritti);
}


function ordinazione6(){
    var dessert=new Array();
    var i;
    i=0;
    if(dessert1.checked){
        dessert[i]="Sorbetto";
        i++;
    }
    if(dessert2.checked){
        dessert[i]="Torta al ciccolato";
        i++;
    }
    if(dessert3.checked){
        dessert[i]="Cocco";
        i++;
    }
    if(dessert4.checked){
        dessert[i]="Praline di cioccolato";
        i++;
    }
    if(dessert5.checked){
        dessert[i]="Pasticcini della casa";
        i++;
    }
    if(dessert6.checked){
        dessert[i]="Cheesecake al cioccolato";
        i++;
    }
    var _dessert="Dessert selezionati: ";
    for(var j=0;j<i;j++){
        if(j==0)
        _dessert= _dessert + dessert[j].bold();
        else
        _dessert= _dessert + " , " + dessert[j].bold();
    }
    localStorage.setItem('dessert',_dessert);
}


function ordinazione7(){
    var birra=new Array();
    var i;
    i=0;
    if(birra1.checked){
        birra[i]="Birra Messina cristalli di sale";
        i++;
    }
    if(birra2.checked){
        birra[i]="Nastro Azzurro";
        i++;
    }
    if(birra3.checked){
        birra[i]="Moretti";
        i++;
    }
    if(birra4.checked){
        birra[i]="Beck's";
        i++;
    }
    if(birra5.checked){
        birra[i]="Heineken";
        i++;
    }
    if(birra6.checked){
        birra[i]="Icnusa non filtrata";
        i++;
    }
    if(birra7.checked){
        birra[i]="Birra al limone";
        i++;
    }
    if(birra8.checked){
        birra[i]="Birra alla spina piccola (20 cl)";
        i++;
    }
    if(birra9.checked){
        birra[i]="Birra alla spina media (40 cl)";
        i++;
    }
    var _birra="Birre selezionate: ";
    for(var j=0;j<i;j++){
        if(j==0)
        _birra= _birra + birra[j].bold();
        else
        _birra= _birra + " , " + birra[j].bold();
    }
    localStorage.setItem('birra',_birra);
}


function ordinazione8(){
    var vino=new Array();
    var i;
    i=0;
    if(vino1.checked){
        vino[i]="Vino alla spina 1 lt";
        i++;
    }
    if(vino2.checked){
        vino[i]="Vino locale 1 lt";
        i++;
    }
    if(vino3.checked){
        vino[i]="Cirò librandi";
        i++;
    }
    if(vino4.checked){
        vino[i]="Cirò Critone";
        i++;
    }
    if(vino5.checked){
        vino[i]="Cirò Tenuta luzzolini";
        i++;
    }
    var _vino="Vini selezionati: ";
    for(var j=0;j<i;j++){
        if(j==0)
        _vino= _vino + vino[j].bold();
        else
        _vino= _vino + " , " + vino[j].bold();
    }
    localStorage.setItem('vino',_vino);
}


function ordinazione9(){
    var bibite=new Array();
    var i;
    i=0;
    if(bibita1.checked){
        bibite[i]="Acqua 1 lt";
        i++;
    }
    if(bibita2.checked){
        bibite[i]="Coca cola";
        i++;
    }
    if(bibita3.checked){
        bibite[i]="Fanta";
        i++;
    }
    if(bibita4.checked){
        bibite[i]="Sprite";
        i++;
    }
    var _bibite="Bibite selezionate: ";
    for(var j=0;j<i;j++){
        if(j==0)
        _bibite= _bibite + bibite[j].bold();
        else
        _bibite= _bibite + " , " + bibite[j].bold();
    }
    localStorage.setItem('bibite',_bibite);
}


window.onload = function ordineTotale(){
    var antipasti=localStorage.getItem('ordineAntipasti');
    document.getElementById("ord1").innerHTML= antipasti;

    if(antipasti==null || antipasti=="Antipasti selezionati: ")
    document.getElementById("ord1").innerHTML= "Antipasti selezionati: -";

    var primiPiatti=localStorage.getItem('primiPiatti');
    document.getElementById("ord2").innerHTML= primiPiatti;

    if(primiPiatti==null || primiPiatti=="Primi piatti selezionati: ")
    document.getElementById("ord2").innerHTML= "Primi piatti selezionati: -";

    var secondoPesce=localStorage.getItem('secondoPesce');
    document.getElementById("ord3").innerHTML= secondoPesce;

    if(secondoPesce==null || secondoPesce=="Secondi piatti di pesce selezionati: ")
    document.getElementById("ord3").innerHTML= "Secondi piatti di pesce selezionati: -";

    var secondoCarne=localStorage.getItem('secondoCarne');
    document.getElementById("ord4").innerHTML= secondoCarne;

    if(secondoCarne==null || secondoCarne=="Secondi piatti di carne selezionati: ")
    document.getElementById("ord4").innerHTML= "Secondi piatti di carne selezionati: -";

    var fritti=localStorage.getItem('fritti');
    document.getElementById("ord5").innerHTML= fritti;

    if(fritti==null || fritti=="Fritti selezionati: ")
    document.getElementById("ord5").innerHTML= "Fritti selezionati: -";

    var dessert=localStorage.getItem('dessert');
    document.getElementById("ord6").innerHTML= dessert;

    if(dessert==null || dessert=="Dessert selezionati: ")
    document.getElementById("ord6").innerHTML= "Dessert selezionati: -";

    var birra=localStorage.getItem('birra');
    document.getElementById("ord7").innerHTML= birra;

    if(birra==null || birra=="Birre selezionate: ")
    document.getElementById("ord7").innerHTML= "Birre selezionate: -";

    var vini=localStorage.getItem('vino');
    document.getElementById("ord8").innerHTML= vini;

    if(vini==null || vini=="Vini selezionati: ")
    document.getElementById("ord8").innerHTML= "Vini selezionati: -";

    var bibite=localStorage.getItem('bibite');
    document.getElementById("ord9").innerHTML= bibite;
    
    if(bibite==null || bibite=="Bibite selezionate: ")
    document.getElementById("ord9").innerHTML= "Bibite selezionate: -";

}
function clearLocaleStorage(){
    localStorage.clear();
}
function ConfermaOperazione() {
    var richiesta = window.confirm("Uno volta inviato l'ordine non può più essere modificato. Continuare?");
    if(richiesta==true){
        alert("Ordine inviato correttamente.");
        location.href="menuDigitale.html";
    }
}