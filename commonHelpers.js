import{S as u,i}from"./assets/vendor-7659544d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function f(o){const t="https://pixabay.com/api/",s="43043595-2b9ab8fff7b2b720f98fadc4f",l=new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${t}?${l}`;return fetch(e).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const c=document.querySelector(".gallery"),p=new u(".gallery a",{captionsData:"alt",captionDelay:250});p.refresh();function m(o){c.innerHTML="",o.forEach(t=>{const s=`
      <li class="gallery-item">
        <a href="${t.largeImageURL}" class="gallery-link">
          <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-img">
          <ul class="gallery-descript">
    <li class="gallery-descript__item"><p><span class="gallery-descript__span">Likes</span>${t.likes}</p></li>
  <li class="gallery-descript__item"><p><span class="gallery-descript__span">Views</span>${t.views}</p></li>
  <li class="gallery-descript__item"><p><span class="gallery-descript__span">Comments</span>${t.comments}</p></li>
  <li class="gallery-descript__item"><p><span class="gallery-descript__span">Downloads</span>${t.downloads}</p></li>
        </ul>
        </a>
      </li>
    `;c.insertAdjacentHTML("beforeend",s)}),p.refresh()}const d=document.querySelector(".search-form"),g=document.querySelector(".search-input"),y=document.querySelector(".loader");function n(){y.classList.add("is-hidden")}n();d.addEventListener("submit",h);function h(o){o.preventDefault();const t=g.value.trim();t!==""?f(t).then(s=>{console.log(s),m(s.hits),d.reset()}).catch(s=>{console.log(s),i.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"}),n()}):(i.show({message:"Please complete the field!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"}),n())}
//# sourceMappingURL=commonHelpers.js.map
