function loadXMLDoc(dugaar) {
                              const xmlhttp = new XMLHttpRequest();
                             
                              xmlhttp.onload = function () {
                              const xmlDoc = xmlhttp.responseXML;
                              const item = xmlDoc.getElementsByTagName("item");
                              myFunction(item, dugaar);
                            }
                              
                               xmlhttp.open("GET", "ikonrss.xml", true);
                               xmlhttp.send();
                               }
var garchig = "";
var inform= "";
function myFunction(item, dugaar) 
                {
   
                  garchig += "<h1>" + item[dugaar-1].getElementsByTagName("title")[0].childNodes[0].wholeText + "</h1>";
               
               inform+= "<p>" + item[dugaar-1].getElementsByTagName("description")[0].childNodes[0].wholeText + "</p>";

 
  console.log(garchig);
  console.log(inform);

  document.getElementById("title").innerHTML = garchig;
  
  document.getElementById("infoooo").innerHTML = inform;
}

function oruulah(ogogdol){
                         document.cookie = ogogdol;
                          }
function avah(){
  return document.cookie;
}