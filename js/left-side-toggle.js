function initLeftSideToggle(){KEEP.utils.leftSideToggle={toggleBar:document.querySelector(".page-aside-toggle"),pageTopDom:document.querySelector(".page-main-content-top"),containerDom:document.querySelector(".page-container"),leftAsideDom:document.querySelector(".page-aside"),toggleBarIcon:document.querySelector(".page-aside-toggle i"),isOpenPageAside:false,initToggleBarButton(){this.toggleBar&&this.toggleBar.addEventListener("click",()=>{this.isOpenPageAside=!this.isOpenPageAside;KEEP.styleStatus.isOpenPageAside=this.isOpenPageAside;KEEP.setStyleStatus();this.changePageLayoutWhenOpenToggle(this.isOpenPageAside)})},changePageLayoutWhenOpenToggle(e){this.toggleBarIcon&&(this.toggleBarIcon.className=e?"fas fa-outdent":"fas fa-indent");const t=KEEP.theme_config.style.left_side_width||"260px";this.containerDom.style.paddingLeft=e?t:"0";this.pageTopDom.style.paddingLeft=e?t:"0";this.leftAsideDom.style.left=e?"0":`-${t}`},pageAsideHandleOfTOC(e){this.toggleBar.style.display="flex";this.isOpenPageAside=e;this.changePageLayoutWhenOpenToggle(e)}};KEEP.utils.leftSideToggle.initToggleBarButton()}if(KEEP.theme_config.pjax.enable===true&&KEEP.utils){initLeftSideToggle()}else{window.addEventListener("DOMContentLoaded",initLeftSideToggle)}