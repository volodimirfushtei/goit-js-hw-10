import{i as w}from"./assets/bi_x-octagon-ddd250c8.js";/* empty css                      */import{f as y,i as a}from"./assets/vendor-77e16229.js";const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(r){console.log(r[0])}},c=document.getElementById("datetime-picker"),e=document.querySelector("[data-start]"),o=document.createElement("div"),f=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),h=document.querySelector("[data-minutes]"),C=document.querySelector("[data-seconds]");o.classList.add("wrapper");o.appendChild(c);o.appendChild(e);const x=document.body;x.appendChild(o);const S=document.querySelector("section");S.insertAdjacentElement("afterend",o);const k={dateFormat:"Y-m-d H:i",minDate:new Date};document.addEventListener("DOMContentLoaded",function(){y("#datetime-picker",{...v,...k})});document.addEventListener("DOMContentLoaded",function(){let r=null,u;y("#datetime-picker",{dateFormat:"Y-m-d H:i",enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const n=t[0];n<new Date?(a.error({title:"Error",message:"Illegal operation",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",titleColor:"#fff",iconUrl:`${w}`}),e.disabled=!0):(r=n,e.disabled=!1,e.style.background="#4e75ff",e.style.color="#fff")}}),e.addEventListener("click",function(){e.setAttribute("disabled",!0),c.setAttribute("disabled",!0);const t=new Date().getTime();let n=r.getTime()-t;a.show({title:"Timer",message:"Countdown is started!",position:"topRight"}),u=setInterval(function(){const{days:i,hours:l,minutes:m,seconds:d}=b(n);f.textContent=s(i),p.textContent=s(l),h.textContent=s(m),C.textContent=s(d),n<=0&&(clearInterval(u),f.textContent="00",p.textContent="00",h.textContent="00",C.textContent="00",a.success({title:"Timer Finished",message:"Countdown timer has ended!",position:"topRight"}),e.removeAttribute("disabled"),c.removeAttribute("disabled")),n-=1e3},1e3)});function b(t){const d=Math.floor(t/864e5),g=Math.floor(t%864e5/36e5),D=Math.floor(t%36e5/6e4),E=Math.floor(t%6e4/1e3);return{days:d,hours:g,minutes:D,seconds:E}}function s(t){return t<10?`0${t}`:t}});
//# sourceMappingURL=commonHelpers.js.map
