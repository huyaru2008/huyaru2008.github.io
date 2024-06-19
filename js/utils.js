KEEP.initUtils=()=>{KEEP.utils={html_root_dom:document.querySelector("html"),pageContainer_dom:document.querySelector(".page-container"),pageTop_dom:document.querySelector(".page-main-content-top"),firstScreen_dom:document.querySelector(".first-screen-container"),scrollProgressBar_dom:document.querySelector(".scroll-progress-bar"),pjaxProgressBar_dom:document.querySelector(".pjax-progress-bar"),pjaxProgressIcon_dom:document.querySelector(".pjax-progress-icon"),back2TopButton_dom:document.querySelector(".tool-scroll-to-top"),innerHeight:window.innerHeight,pjaxProgressBarTimer:null,prevScrollValue:0,fontSizeLevel:0,isHasScrollProgressBar:KEEP.theme_config.style.scroll.progress_bar.enable===true,isHasScrollPercent:KEEP.theme_config.style.scroll.percent.enable===true,styleHandleWhenScroll(){const e=document.body.scrollTop||document.documentElement.scrollTop;const t=document.body.scrollHeight||document.documentElement.scrollHeight;const o=window.innerHeight||document.documentElement.clientHeight;const s=Math.round(e/(t-o)*100);if(this.isHasScrollProgressBar){const r=(e/(t-o)*100).toFixed(3);this.scrollProgressBar_dom.style.visibility=s===0?"hidden":"visible";this.scrollProgressBar_dom.style.width=`${r}%`}if(this.isHasScrollPercent){const i=this.back2TopButton_dom.querySelector(".percent");if(s===0||s===undefined){this.back2TopButton_dom.classList.remove("show")}else{this.back2TopButton_dom.classList.add("show");i.innerHTML=s.toFixed(0)}}if(e>this.prevScrollValue&&e>this.innerHeight){this.pageTop_dom.classList.add("hide")}else{this.pageTop_dom.classList.remove("hide")}this.prevScrollValue=e},registerWindowScroll(){window.addEventListener("scroll",()=>{if(this.isHasScrollPercent||this.isHasScrollProgressBar){this.styleHandleWhenScroll()}if(KEEP.theme_config.toc.enable&&KEEP.utils.hasOwnProperty("findActiveIndexByTOC")){KEEP.utils.findActiveIndexByTOC()}KEEP.utils.headerShrink.headerShrink()})},toggleShowToolsList(){document.querySelector(".tool-toggle-show").addEventListener("click",()=>{document.querySelector(".side-tools-list").classList.toggle("show")})},globalFontAdjust(){const e=document.defaultView.getComputedStyle(document.body).fontSize;const t=parseFloat(e);const o=()=>{const e=KEEP.getStyleStatus();if(e){this.fontSizeLevel=e.fontSizeLevel;s(this.fontSizeLevel)}};const s=e=>{this.html_root_dom.style.fontSize=`${t*(1+e*.05)}px`;KEEP.styleStatus.fontSizeLevel=e;KEEP.setStyleStatus()};o();document.querySelector(".tool-font-adjust-plus").addEventListener("click",()=>{if(this.fontSizeLevel===5)return;this.fontSizeLevel++;s(this.fontSizeLevel)});document.querySelector(".tool-font-adjust-minus").addEventListener("click",()=>{if(this.fontSizeLevel<=0)return;this.fontSizeLevel--;s(this.fontSizeLevel)})},contentAreaWidthAdjust(){const e=document.querySelector(".tool-expand-width");const t=document.querySelector(".header-content");const o=document.querySelector(".main-content");const s=e.querySelector("i");const r=KEEP.theme_config.style.content_max_width||"1000px";const i="90%";let n=r;let l=false;if(KEEP.theme_config.style.first_screen.enable===true&&window.location.pathname==="/"){n=parseInt(r)*1.2+"px"}const a=e=>{KEEP.styleStatus.isExpandPageWidth=e;KEEP.setStyleStatus();if(e){s.classList.remove("fa-arrows-alt-h");s.classList.add("fa-compress-arrows-alt");t.style.maxWidth=i;o.style.maxWidth=i}else{s.classList.remove("fa-compress-arrows-alt");s.classList.add("fa-arrows-alt-h");t.style.maxWidth=n;o.style.maxWidth=r}};const c=()=>{const e=KEEP.getStyleStatus();if(e){l=e.isExpandPageWidth;a(l)}};c();e.addEventListener("click",()=>{l=!l;a(l)})},goComment(){this.goComment_dom=document.querySelector(".go-comment");if(this.goComment_dom){this.goComment_dom.addEventListener("click",()=>{document.querySelector("#comment-anchor").scrollIntoView()})}},getElementHeight(e){const t=document.querySelector(e);return t?t.getBoundingClientRect().height:0},initFirstScreenHeight(){this.firstScreen_dom&&(this.firstScreen_dom.style.height=this.innerHeight+"px")},initPageHeightHandle(){if(this.firstScreen_dom)return;const e=this.getElementHeight(".page-main-content-top");const t=this.getElementHeight(".page-main-content-middle");const o=this.getElementHeight(".page-main-content-bottom");const s=e+t+o;const r=window.innerHeight;const i=document.querySelector(".page-main-content-bottom");if(s<r){const n=Math.floor(r-s);if(n>0){i.style.marginTop=`${n-2}px`}}},imageViewer(){let t=false;const o=(e,t)=>{document.body.style.overflow=t?"hidden":"auto";if(t){e.classList.add("active")}else{e.classList.remove("active")}};const s=document.querySelector(".image-viewer-container");const r=document.querySelector(".image-viewer-container img");s&&s.addEventListener("click",()=>{t=false;o(s,t)});const e=document.querySelectorAll(".markdown-body img");if(e.length){e.forEach(e=>{e.addEventListener("click",()=>{t=true;o(s,t);r.setAttribute("src",e.getAttribute("src"))})})}else{this.pageContainer_dom.removeChild(s)}},setHowLongAgoLanguage(e,t){return t.replace(/%s/g,e)},getHowLongAgo(e){const t=KEEP.language_ago;const o=Math.floor(e/(60*60*24*30)/12);const s=Math.floor(e/(60*60*24*30));const r=Math.floor(e/(60*60*24)/7);const i=Math.floor(e/(60*60*24));const n=Math.floor(e/(60*60)%24);const l=Math.floor(e/60%60);const a=Math.floor(e%60);if(o>0){return this.setHowLongAgoLanguage(o,t.year)}else if(s>0){return this.setHowLongAgoLanguage(s,t.month)}else if(r>0){return this.setHowLongAgoLanguage(r,t.week)}else if(i>0){return this.setHowLongAgoLanguage(i,t.day)}else if(n>0){return this.setHowLongAgoLanguage(n,t.hour)}else if(l>0){return this.setHowLongAgoLanguage(l,t.minute)}else if(a>0){return this.setHowLongAgoLanguage(a,t.second)}},setHowLongAgoInHome(){const e=document.querySelectorAll(".home-article-meta-info .home-article-date");e&&e.forEach(e=>{const t=Date.now();const o=new Date(e.dataset.date.split(" GMT")[0]).getTime();e.innerHTML=this.getHowLongAgo(Math.floor((t-o)/1e3))})},pjaxProgressBarStart(){this.pjaxProgressBarTimer&&clearInterval(this.pjaxProgressBarTimer);if(this.isHasScrollProgressBar){this.scrollProgressBar_dom.classList.add("hide")}this.pjaxProgressBar_dom.style.width="0";this.pjaxProgressIcon_dom.classList.add("show");let e=1;const t=99;this.pjaxProgressBar_dom.classList.add("show");this.pjaxProgressBar_dom.style.width=e+"%";this.pjaxProgressBarTimer=setInterval(()=>{e+=5;if(e>t)e=t;this.pjaxProgressBar_dom.style.width=e+"%"},100)},pjaxProgressBarEnd(){this.pjaxProgressBarTimer&&clearInterval(this.pjaxProgressBarTimer);this.pjaxProgressBar_dom.style.width="100%";const t=setTimeout(()=>{this.pjaxProgressBar_dom.classList.remove("show");this.pjaxProgressIcon_dom.classList.remove("show");if(this.isHasScrollProgressBar){this.scrollProgressBar_dom.classList.remove("hide")}const e=setTimeout(()=>{this.pjaxProgressBar_dom.style.width="0";clearTimeout(t),clearTimeout(e)},200)},200)}};KEEP.utils.registerWindowScroll();KEEP.utils.toggleShowToolsList();KEEP.utils.globalFontAdjust();KEEP.utils.contentAreaWidthAdjust();KEEP.utils.goComment();KEEP.utils.initPageHeightHandle();KEEP.utils.initFirstScreenHeight();KEEP.utils.imageViewer();KEEP.utils.setHowLongAgoInHome()};