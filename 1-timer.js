import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f,i as y}from"./assets/vendor-BbbuE1sJ.js";f("#datetime-picker",{enableTime:!0,dateFormat:"Y-m-d H:i",onClose:function(t){const e=t[0];e<=new Date?(y.error({title:"Error",message:"Please choose a date in the future",position:"topRight",backgroundColor:"#ff4d4f",iconColor:"white",titleColor:"white",messageColor:"white",titleSize:"16px"}),o.disabled=!0):(i=e,o.disabled=!1)}});let i=null,r=null;const o=document.querySelector("[data-start]"),h=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),C=document.querySelector("[data-minutes]"),w=document.querySelector("[data-seconds]");o.disabled=!0;function D(t){const c=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:u,minutes:l,seconds:m}}function n(t){return String(t).padStart(2,"0")}function d({days:t,hours:e,minutes:a,seconds:s}){h.textContent=n(t),p.textContent=n(e),C.textContent=n(a),w.textContent=n(s)}o.addEventListener("click",function(){o.disabled=!0,document.getElementById("datetime-picker").disabled=!0,r=setInterval(()=>{const e=i-new Date;if(e<=0){clearInterval(r),d({days:0,hours:0,minutes:0,seconds:0}),document.getElementById("datetime-picker").disabled=!1;return}d(D(e))},1e3)});
//# sourceMappingURL=1-timer.js.map