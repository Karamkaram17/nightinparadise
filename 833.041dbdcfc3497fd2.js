"use strict";(self.webpackChunkpos=self.webpackChunkpos||[]).push([[833],{9833:(T,u,c)=>{c.r(u),c.d(u,{MainPageModule:()=>o});var r=c(6814),d=c(3403),l=c(2981),_=c(3985),f=c(5619),v=c(8180),e=c(5879),y=c(8068),h=c(5940),g=c(2296);function b(t,m){if(1&t){const a=e.EpF();e.TgZ(0,"button",8),e.NdJ("click",function(){e.CHM(a);const p=e.oxw();return e.KtG(p.navigateToHome())}),e._uU(1," Log in "),e.qZA()}}function k(t,m){1&t&&(e.ynx(0),e.TgZ(1,"span",13),e._uU(2,"waiting for server"),e.qZA(),e.TgZ(3,"p",14),e._uU(4,"it may take few minutes"),e.qZA(),e.BQk())}function M(t,m){if(1&t&&(e.TgZ(0,"div",9),e.YNc(1,k,5,0,"ng-container",10),e.ALo(2,"async"),e.TgZ(3,"div",11),e._UZ(4,"mat-progress-spinner",12),e.qZA()()),2&t){const a=e.oxw();e.xp6(1),e.Q6J("ngIf",e.lcZ(2,3,a.warning$)),e.xp6(3),e.Q6J("color","primary")("mode","indeterminate")}}function x(t,m){1&t&&e._UZ(0,"div",15)}const w=[{path:"",component:(()=>{class t{constructor(a,s){this.router=a,this.networkService=s,this.server=!1,this.warning$=new f.X(!1),this.e=""}ngOnInit(){window.scrollTo(0,0),this.pingServer()}navigateToHome(){this.router.navigate([l.d.LOGIN.route])}pingServer(){setTimeout(()=>{this.warning$.next(!0)},1e4),this.networkService.get(_.b.SCALE_SERVER).pipe((0,v.q)(1)).subscribe(a=>{this.warning$.next(!1),this.server=!0},a=>{this.e=a})}static#r=this.\u0275fac=function(s){return new(s||t)(e.Y36(d.F0),e.Y36(y.S))};static#e=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-main-page"]],decls:9,vars:5,consts:[[1,"main-page","container-fluid","text-center","h-100","w-100","d-flex","align-items-center","justify-content-center"],[1,"text-light","text-center"],[1,"text-center"],["src","./assets/night-in-paradise.png","alt","JM-Real-estate",1,"w-100","mt-5","mb-2",2,"max-width","500px"],[1,"text-center","mt-3","mb-5","h4",2,"color","black"],["class","mt-4 rounded rounded-5","mat-raised-button","",3,"click",4,"ngIf"],["class","spinner",4,"ngIf"],["class","spinner-container",4,"ngIf"],["mat-raised-button","",1,"mt-4","rounded","rounded-5",3,"click"],[1,"spinner"],[4,"ngIf"],[1,"text-center","mx-auto"],[3,"color","mode"],[1,"text-error","text-center"],[1,"text-error","text-center","my-2"],[1,"spinner-container"]],template:function(s,p){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.TgZ(4,"div",4),e._uU(5," Managed by JM Real Estate "),e.qZA()(),e.YNc(6,b,2,0,"button",5),e.YNc(7,M,5,5,"div",6),e.qZA()(),e.YNc(8,x,1,0,"div",7)),2&s&&(e.Udp("pointer-event",p.server?"":"none"),e.xp6(6),e.Q6J("ngIf",p.server),e.xp6(1),e.Q6J("ngIf",!p.server),e.xp6(1),e.Q6J("ngIf",!p.server))},dependencies:[r.O5,h.Ou,g.lW,r.Ov],styles:[".main-page[_ngcontent-%COMP%]{background-color:var(--body-background-color)}h1[_ngcontent-%COMP%]{font-size:35px}.spinner[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;flex-direction:column}.spinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#b81515;font-size:30px;font-weight:700}.spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#b81515;padding-bottom:10px;font-size:16px}.spinner-container[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:15000;background-color:var(--spinner-background)}"]})}return t})()}];let i=(()=>{class t{static#r=this.\u0275fac=function(s){return new(s||t)};static#e=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[d.Bz.forChild(w),d.Bz]})}return t})(),o=(()=>{class t{static#r=this.\u0275fac=function(s){return new(s||t)};static#e=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[r.ez,i,h.Cq,g.ot]})}return t})()},5940:(T,u,c)=>{c.d(u,{Cq:()=>x,Ou:()=>k});var r=c(5879),d=c(3680),l=c(2495),_=c(6814);const f=["determinateSpinner"];function v(n,w){if(1&n&&(r.O4$(),r.TgZ(0,"svg",11),r._UZ(1,"circle",12),r.qZA()),2&n){const i=r.oxw();r.uIk("viewBox",i._viewBox()),r.xp6(1),r.Udp("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeCircumference()/2,"px")("stroke-width",i._circleStrokeWidth(),"%"),r.uIk("r",i._circleRadius())}}const e=(0,d.pj)(class{constructor(n){this._elementRef=n}},"primary"),y=new r.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function h(){return{diameter:g}}}),g=100;let k=(()=>{class n extends e{constructor(i,o,t){super(i),this.mode="mat-spinner"===this._elementRef.nativeElement.nodeName.toLowerCase()?"indeterminate":"determinate",this._value=0,this._diameter=g,this._noopAnimations="NoopAnimations"===o&&!!t&&!t._forceAnimations,t&&(t.color&&(this.color=this.defaultColor=t.color),t.diameter&&(this.diameter=t.diameter),t.strokeWidth&&(this.strokeWidth=t.strokeWidth))}get value(){return"determinate"===this.mode?this._value:0}set value(i){this._value=Math.max(0,Math.min(100,(0,l.su)(i)))}get diameter(){return this._diameter}set diameter(i){this._diameter=(0,l.su)(i)}get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(i){this._strokeWidth=(0,l.su)(i)}_circleRadius(){return(this.diameter-10)/2}_viewBox(){const i=2*this._circleRadius()+this.strokeWidth;return`0 0 ${i} ${i}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return"determinate"===this.mode?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static#r=this.\u0275fac=function(o){return new(o||n)(r.Y36(r.SBq),r.Y36(r.QbO,8),r.Y36(y))};static#e=this.\u0275cmp=r.Xpm({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(o,t){if(1&o&&r.Gf(f,5),2&o){let m;r.iGM(m=r.CRH())&&(t._determinateCircle=m.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:16,hostBindings:function(o,t){2&o&&(r.uIk("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow","determinate"===t.mode?t.value:null)("mode",t.mode),r.Udp("width",t.diameter,"px")("height",t.diameter,"px")("--mdc-circular-progress-size",t.diameter+"px")("--mdc-circular-progress-active-indicator-width",t.diameter+"px"),r.ekj("_mat-animation-noopable",t._noopAnimations)("mdc-circular-progress--indeterminate","indeterminate"===t.mode))},inputs:{color:"color",mode:"mode",value:"value",diameter:"diameter",strokeWidth:"strokeWidth"},exportAs:["matProgressSpinner"],features:[r.qOj],decls:14,vars:11,consts:[["circle",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["determinateSpinner",""],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(o,t){if(1&o&&(r.YNc(0,v,2,8,"ng-template",null,0,r.W1O),r.TgZ(2,"div",1,2),r.O4$(),r.TgZ(4,"svg",3),r._UZ(5,"circle",4),r.qZA()(),r.kcU(),r.TgZ(6,"div",5)(7,"div",6)(8,"div",7),r.GkF(9,8),r.qZA(),r.TgZ(10,"div",9),r.GkF(11,8),r.qZA(),r.TgZ(12,"div",10),r.GkF(13,8),r.qZA()()()),2&o){const m=r.MAs(1);r.xp6(4),r.uIk("viewBox",t._viewBox()),r.xp6(1),r.Udp("stroke-dasharray",t._strokeCircumference(),"px")("stroke-dashoffset",t._strokeDashOffset(),"px")("stroke-width",t._circleStrokeWidth(),"%"),r.uIk("r",t._circleRadius()),r.xp6(4),r.Q6J("ngTemplateOutlet",m),r.xp6(2),r.Q6J("ngTemplateOutlet",m),r.xp6(2),r.Q6J("ngTemplateOutlet",m)}},dependencies:[_.tP],styles:["@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner{--mdc-circular-progress-active-indicator-width:4px;--mdc-circular-progress-size:48px}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner .mdc-circular-progress{width:var(--mdc-circular-progress-size) !important;height:var(--mdc-circular-progress-size) !important}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}"],encapsulation:2,changeDetection:0})}return n})(),x=(()=>{class n{static#r=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=r.oAB({type:n});static#t=this.\u0275inj=r.cJS({imports:[_.ez,d.BQ]})}return n})()}}]);