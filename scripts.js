

function getnum(n)
{
    window.alert(n);
}


function fakultaet(n)
{

    if(n<=2)
    {
        return  n;
    }

      return  n*fakultaet(n-1);
   

}

function colorlists()
{
   var x= document.getElementsByTagName("li");
   x.style.background = "green";
}

function outfak (n)
{
 window.alert(rek(n));
}

b = true;

function changesomething()
{
    if(b)
    document.body.style.background ="red";
    else
    document.body.style.background ="blue";

    b=!b;
}

function cls()
{
document.body.innerHTML="";
}


function slide()
{




    var x = document.getElementById("slide");
    var add = 0;
    var id  = setInterval(function(){
        if(add>=500){
            clearInterval(id);
            finish = false;
        }else {
            x.style.marginLeft=add+ 'px';
            add++;
        }
    },5);

}

function getSick()
{
    var count = 0 ;
   

    var id = setInterval(function(){
        if (count >5000)
        {
            clearInterval(id);
        }
        else 
        {
            changesomething();
        }
        count++;

    },5);
}


function bekommeEventhoerer(element)
{
    element.innerHTML =" habe eevent, click me";
    document.getElementById("willevent").addEventListener("mouseover",changesomething)
}

function slideback()
{
   
    var x = document.getElementById("slide");
    var add = parseInt(x.style.marginLeft,10);
  
    var id  = setInterval(function(){
        if(add<=1){
            clearInterval(id);
          
        }else {
            x.style.marginLeft=add+ 'px';
            add--;
        }
    },5);

 

}

function changeElement(element)
{
    element.innerHTML ="wurde veraendert";
}

void createel()
{
    var c = document.getElementById("loeschen");
    var elmnt = document.createElement("p");
    elmnt.innerHTML="hallo ein neues element";
    c.appendChild(elmnt);
    document.body.appendChild(elmnt);
}

function getwindowinfo()
{
    var x = window.screen.width;
    var y = window.screen.height;
    var colorinfo = window.screen.colorDepth;
    var name = window.location.hostname;
    var href = window.location.href ="http://www.google.com";

}

function accessSafeSites()
{
    var http = window.location.protocol;
    if(http == "http")return false;

    return true;
}


function jumpfw()
{
    window.history.forward();
}

function getage()
{
    var age  = window.prompt("Geb dein alter ein:","99");

    return age;

}

function savegame()
{
    if(navigator.cookieEnabled)
    {
        document.cookie="isread=1; expires=Fri, 4 Nov 2020 12:00:00 UTC; path=/";
        window.alert("spiel gespeichert");
    }
}

function getcookie()
{
    var cook = document.cookie;
}

function createPLayer()
{
    var player = {
        name:"player1",
        health:10,
        attack:15
    };

    function pinguin(name,alter,kmh)
    {
        this.name=name;
        this.alter=alter;
        this.geschw=alter;

        this.gofaster = function(mehrkmh)
        {
            this.geschw=this.geschw+mehrkmh;
        }
    }

    var franz = new pinguin("sven",1,4);

    pinguin.prototype.slower() = function()
    {
        this.geschw-=1;
    }
    
}


function holedatum()
{
    var x = new Date();
    var hours = new Date().getHours;

    window.alert(x);
}

function holegenauesdatum()
{
    var x =  new Datum().getTime();//zeit von 1970 in millisekunden
    var cookieablaufzeit = 7*24*60*60*1000;
}