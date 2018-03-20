function LightenDarkenColor(col, amt) {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + String("000000" + (g | (b << 8) | (r << 16)).toString(16)).slice(-6);
  
}


function getcol()
{
  var color = document.getElementById("color").value;

  if (/[0-9A-Fa-f]{6}/g.test(color)) {
        document.getElementById("col1").innerHTML = "#"+ LightenDarkenColor(color, 40);
        document.getElementById("col1").style.background = "#"+ LightenDarkenColor(color, 40);

        document.getElementById("col2").innerHTML = "#"+ LightenDarkenColor(color, 20);
        document.getElementById("col2").style.background = "#"+ LightenDarkenColor(color, 20);

        document.getElementById("col3").innerHTML = "#"+color;
        document.getElementById("col3").style.background = "#"+color;

        document.getElementById("col4").innerHTML = "#"+LightenDarkenColor(color, -20);
        document.getElementById("col4").style.background = "#"+LightenDarkenColor(color, -20);

        document.getElementById("col5").innerHTML = "#"+LightenDarkenColor(color, -40);
        document.getElementById("col5").style.background = "#"+LightenDarkenColor(color, -40);

        document.getElementById("col6").innerHTML = "#"+LightenDarkenColor(color, -60);
        document.getElementById("col6").style.background = "#"+LightenDarkenColor(color, -60);

        document.getElementById("col7").innerHTML = "#"+LightenDarkenColor(color, -80);
        document.getElementById("col7").style.background = "#"+LightenDarkenColor(color, -80);

        document.getElementById("error").style.visibility = "hidden";
    } else {
        document.getElementById("error").style.visibility = "visible";
        document.getElementById("error").innerHTML = "thats not a hex color, try again";
    }
}

