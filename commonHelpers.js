import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as C,i as a}from"./assets/vendor-77e16229.js";const w={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(s){console.log(s[0])}},c=document.getElementById("datetime-picker"),e=document.querySelector("[data-start]"),o=document.createElement("div"),f=document.querySelector("[data-days]"),h=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),y=document.querySelector("[data-seconds]");o.classList.add("wrapper");o.appendChild(c);o.appendChild(e);const v=document.body;v.appendChild(o);const x=document.querySelector("section");x.insertAdjacentElement("afterend",o);const S={dateFormat:"Y-m-d H:i",minDate:new Date};document.addEventListener("DOMContentLoaded",function(){C("#datetime-picker",{...w,...S})});document.addEventListener("DOMContentLoaded",function(){let s=null,u;C("#datetime-picker",{dateFormat:"Y-m-d H:i",enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const n=t[0];n<new Date?(a.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),e.disabled=!0):(s=n,e.disabled=!1,e.style.background="#4e75ff",e.style.color="#fff")}}),e.addEventListener("click",function(){e.setAttribute("disabled",!0),c.setAttribute("disabled",!0);const t=new Date().getTime();let n=s.getTime()-t;a.show({title:"Timer",message:"Countdown is started!",position:"topRight"}),u=setInterval(function(){const{days:i,hours:l,minutes:m,seconds:r}=b(n);f.textContent=d(i),h.textContent=d(l),p.textContent=d(m),y.textContent=d(r),n<=0&&(clearInterval(u),f.textContent="00",h.textContent="00",p.textContent="00",y.textContent="00",a.success({title:"Timer Finished",message:"Countdown timer has ended!",position:"topRight"}),e.removeAttribute("disabled"),c.removeAttribute("disabled")),n-=1e3},1e3)});function b(t){const r=Math.floor(t/864e5),D=Math.floor(t%864e5/36e5),g=Math.floor(t%36e5/6e4),E=Math.floor(t%6e4/1e3);return{days:r,hours:D,minutes:g,seconds:E}}function d(t){return t<10?`0${t}`:t}});
//# sourceMappingURL=commonHelpers.js.map
