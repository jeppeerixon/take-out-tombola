(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const s={lat:0,lng:0};let w;const g=[],d=[];let c="";const p=document.querySelectorAll('input[name="distance"]'),f=document.querySelector("#slideRating"),x=document.querySelector("#showRating"),E=document.querySelector("#showMap"),L=document.querySelector("#roulette"),M=document.querySelector("#showResult"),l=document.querySelector("#resultInfo"),h=document.getElementById("map");let a,u,y;function b(e){e.currentTarget.checked&&(w=e.currentTarget.value)}function v(e){g.push(e.name);let t;t=e.photos,t!==void 0?t=t[0].getUrl({maxWidth:100,maxHeight:100}):t="no_resturant_picture.jpg";const r=`<h4>${e.name}</h4><img height="100" src="${t}" alt="${e.name}"> <br>Betyg: ${e.rating}<br>`;if(!e.geometry||!e.geometry.location)return;const i=new google.maps.Marker({map:a,position:e.geometry.location,animation:google.maps.Animation.DROP});d.push(i),google.maps.event.addListener(i,"click",()=>{y=new google.maps.InfoWindow({content:r,ariaLabel:r}),y.open({anchor:i,map:a})}),e.name===c&&setTimeout(function(){i.setAnimation(google.maps.Animation.BOUNCE)},1e3)}function k(e,t){if(t===google.maps.places.PlacesServiceStatus.OK)for(let r=0;r<e.length;r++)e.length===1&&(v(e[r]),a.setCenter(e[0].geometry.location)),e[r].rating>=f.value&&v(e[r])}function q(){l.textContent="",c="",a=new google.maps.Map(document.getElementById("map"),{zoom:14,center:s}),new google.maps.Marker({position:s,map:a,icon:"http://maps.google.com/mapfiles/ms/icons/green-dot.png"});const e={location:s,radius:w,type:["restaurant"]};u=new google.maps.places.PlacesService(a),u.nearbySearch(e,k),L.style.display="block",h.style.display="block",h.scrollIntoView()}function R(e){for(let t=0;t<d.length;t++)d[t].setMap(e)}function P(){R(null)}function C(){const e=Math.floor(Math.random()*g.length);c=g[e],l.scrollIntoView(),P();const t={query:c,fields:["name","rating","geometry","photos"]};u=new google.maps.places.PlacesService(a),u.findPlaceFromQuery(t,k),l.textContent="",setTimeout(function(){l.textContent=`Du ska \xE4ta p\xE5 ${c}`},300)}function I(){const e=f.value,t=Number(e).toFixed(1);x.textContent=t}function O(e){s.lat=e.coords.latitude,s.lng=e.coords.longitude}function A(){l.textContent="Till\xE5t GPS f\xF6r att anv\xE4nda hemsidan!"}navigator.geolocation&&navigator.geolocation.getCurrentPosition(O,A);var S;for(let e=0;e<=p.length;e++)(S=p[e])==null||S.addEventListener("change",b);E.addEventListener("click",q);M.addEventListener("click",C);f.addEventListener("change",I);
