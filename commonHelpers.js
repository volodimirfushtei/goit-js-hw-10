import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as C,i}from"./assets/vendor-77e16229.js";const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(d){console.log(d[0])}},a=document.getElementById("datetime-picker"),t=document.querySelector("[data-start]"),o=document.createElement("div"),f=document.querySelector("[data-days]"),h=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),y=document.querySelector("[data-seconds]");o.classList.add("wrapper");o.appendChild(a);o.appendChild(t);const v=document.body;v.appendChild(o);const x=document.querySelector("section");x.insertAdjacentElement("afterend",o);const S={dateFormat:"Y-m-d H:i",minDate:new Date};document.addEventListener("DOMContentLoaded",function(){C("#datetime-picker",{...g,...S})});document.addEventListener("DOMContentLoaded",function(){let d=null,u;C("#datetime-picker",{enableTime:!0,dateFormat:"Y-m-d H:i",defaultDate:new Date,minuteIncrement:1,onClose(e){const n=e[0];n<new Date?(i.error({title:"Error",message:"Please choose a date in the future"}),t.disabled=!0):(d=n,t.disabled=!1,t.style.background="#3a18d575",t.style.color="#e25151",a.style.background="#16ee3d75")}}),t.addEventListener("click",function(){t.setAttribute("disabled",!0),a.setAttribute("disabled",!0);const e=new Date().getTime();let n=d.getTime()-e;i.show({title:"Timer",message:"Countdown is started!"}),u=setInterval(function(){const{days:r,hours:l,minutes:m,seconds:c}=b(n);f.textContent=s(r),h.textContent=s(l),p.textContent=s(m),y.textContent=s(c),n<=0&&(clearInterval(u),f.textContent="00",h.textContent="00",p.textContent="00",y.textContent="00",i.success({title:"Timer Finished",message:"Countdown timer has ended!"}),t.removeAttribute("disabled"),a.removeAttribute("disabled")),n-=1e3},1e3)});function b(e){const c=Math.floor(e/864e5),D=Math.floor(e%864e5/36e5),E=Math.floor(e%36e5/6e4),w=Math.floor(e%6e4/1e3);return{days:c,hours:D,minutes:E,seconds:w}}function s(e){return e<10?`0${e}`:e}});
//# sourceMappingURL=commonHelpers.js.map
