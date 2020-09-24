

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