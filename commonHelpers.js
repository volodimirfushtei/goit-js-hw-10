import{i as S}from"./assets/bi_x-octagon-ddd250c8.js";/* empty css                      */import{f as w,i as c}from"./assets/vendor-77e16229.js";document.addEventListener("DOMContentLoaded",function(){const r=document.getElementById("datetime-picker"),e=document.querySelector("[data-start]"),o=document.createElement("div"),a=document.querySelector("[data-days]"),u=document.querySelector("[data-hours]"),l=document.querySelector("[data-minutes]"),m=document.querySelector("[data-seconds]");o.classList.add("wrapper"),o.appendChild(r),o.appendChild(e),document.body.appendChild(o),document.querySelector("section").insertAdjacentElement("afterend",o);let f=null,h;function y(t){const n=t[0];n<new Date?(c.error({title:"Error",message:"Please choose a date in the future",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",titleColor:"#fff",iconUrl:`${S}`}),e.disabled=!0):(f=n,e.disabled=!1,e.style.background="#4e75ff",e.style.color="#fff")}w("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:y}),e.addEventListener("click",function(){e.setAttribute("disabled",!0),r.setAttribute("disabled",!0);const t=new Date().getTime();let n=f.getTime()-t;c.show({title:"Timer",message:"Countdown is started!",position:"topRight"}),h=setInterval(function(){const{days:i,hours:p,minutes:C,seconds:d}=b(n);a.textContent=s(i),u.textContent=s(p),l.textContent=s(C),m.textContent=s(d),n<=0&&(clearInterval(h),a.textContent="00",u.textContent="00",l.textContent="00",m.textContent="00",c.success({title:"Timer Finished",message:"Countdown timer has ended!",position:"topRight"}),e.removeAttribute("disabled"),r.removeAttribute("disabled")),n-=1e3},1e3)});function b(t){const d=Math.floor(t/864e5),g=Math.floor(t%864e5/36e5),E=Math.floor(t%36e5/6e4),D=Math.floor(t%6e4/1e3);return{days:d,hours:g,minutes:E,seconds:D}}function s(t){return t<10?`0${t}`:t}});
//# sourceMappingURL=commonHelpers.js.map