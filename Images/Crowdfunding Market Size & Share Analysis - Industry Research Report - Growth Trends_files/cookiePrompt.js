"use strict";(function(){"use strict";var cookieAlert=document.querySelector(".cookiealert");var acceptCookies=document.querySelector(".acceptcookies");var stickyCta=document.getElementById("sticky_cta");if(!cookieAlert){return;}
cookieAlert.offsetHeight;if(!getCookie("setCookie")){cookieAlert.classList.add("show");if(stickyCta&&window.innerWidth<640){stickyCta.style.bottom="130px";}else if(stickyCta){stickyCta.style.bottom="45px";}}
acceptCookies.addEventListener("click",function(){setCookie("setCookie",true,150);cookieAlert.classList.remove("show");if(stickyCta&&window.innerWidth<640){stickyCta.style.bottom="56px";}else if(stickyCta&&window.innerWidth<959){stickyCta.style.bottom="56px";}
else if(stickyCta){stickyCta.style.bottom="10px";}
window.dispatchEvent(new Event("cookieAlertAccept"));});function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+exdays*24*60*60*1000);var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";}
function getCookie(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)===' '){c=c.substring(1);}
if(c.indexOf(name)===0){return c.substring(name.length,c.length);}}
return "";}})();