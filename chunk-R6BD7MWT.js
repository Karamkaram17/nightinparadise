import{a as G}from"./chunk-YWSVX76R.js";import{a as D}from"./chunk-26O2FFFW.js";import"./chunk-IXDNPNBC.js";import{C as N,J as O,N as T,m as u,p as b,q as L,s as g,u as I,w as E}from"./chunk-ZRAVUJEI.js";import{B as k,D as A}from"./chunk-JIN3BOXY.js";import{fa as _}from"./chunk-6EH4JDCG.js";import"./chunk-RGNDWIHZ.js";import"./chunk-5OCG7IXQ.js";import"./chunk-UQ6JH2GH.js";import{Bb as a,Hb as F,Mb as i,Nb as o,Ob as m,Vb as x,fb as n,fc as s,hc as y,ic as C,ja as v,na as h,nc as w,oc as c,pc as l,qc as d,wb as S}from"./chunk-YNBU5IFA.js";var V=()=>({"box-shadow":"var(--login-box-shadow)"}),U=e=>({extraClass:"rounded rounded-4 p-2",extraStyles:e}),f=()=>({transform:"scale(1.5)"}),j=e=>({icon:"person",extraStyles:e,extraClass:"cs-primary-color"}),q=e=>({label:"Username",prefixIcon:e}),M=e=>({icon:"lock_filled",extraStyles:e,extraClass:"cs-primary-color"}),B=(e,t)=>({label:"Password",type:"password",prefixIcon:e,suffixIcon:t}),R=()=>({height:"45px"}),W=(e,t)=>({label:"SIGN IN",extraStyles:e,matAttribute:"mat-stroked-button",type:"submit",color:"primary",disabled:t,takeFullWidth:!0});function Y(e,t){e&1&&(i(0,"div",12),m(1,"kss-lib-loading",13),o()),e&2&&(n(),a("innerLoading",!0))}var ae=(()=>{let t=class t{constructor(){this._authService=v(G),this.isLoggingIn=this._authService.isLoggingIn,this.constants=k,this.date=new Date().getFullYear(),this.LoginForm=new L({username:new g("",[u.required]),password:new g("",[u.required])})}ngOnInit(){window.scrollTo(0,0)}login(){O(this.LoginForm)&&this.LoginForm.value.username&&this.LoginForm.value.password&&this._authService.login(this.LoginForm.value.username.toLowerCase(),this.LoginForm.value.password)}};t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=h({type:t,selectors:[["ks-solutions-login"]],standalone:!0,features:[w],decls:21,vars:34,consts:[[1,"login-container","d-flex","align-items-center","justify-content-center"],[1,"login-card",3,"config"],[1,"py-3","mx-auto"],[1,"h2","capital","text-center"],[1,"h3","text-center"],[1,"px-sm-1","px-md-4","py-2",3,"ngSubmit","formGroup"],[1,"mb-3"],[3,"control","config","noSpace"],[1,"mt-4",3,"config"],[1,"mt-3","small","mx-auto","text-center"],[1,"small","mx-auto","text-center","mt-2"],[1,"cs-primary-color"],[1,"spinner-container"],[3,"innerLoading"]],template:function(p,r){p&1&&(i(0,"div",0)(1,"kss-lib-card",1)(2,"div",2)(3,"div",3),s(4,"WELCOME"),o(),i(5,"div",4),s(6,"SIGN IN TO YOUR ACCOUNT"),o()(),i(7,"div")(8,"form",5),x("ngSubmit",function(){return r.login()}),i(9,"div",6),m(10,"kss-lib-input",7),o(),i(11,"div",6),m(12,"kss-lib-input",7),o(),m(13,"kss-lib-button",8),o()(),i(14,"div",9),s(15),o(),i(16,"div",10),s(17," Powered By "),i(18,"b",11),s(19),o()()(),S(20,Y,2,1,"div",12),o()),p&2&&(n(),a("config",l(14,U,c(13,V))),n(7),a("formGroup",r.LoginForm),n(2),a("control",r.LoginForm.controls.username)("config",l(19,q,l(17,j,c(16,f))))("noSpace",!0),n(2),a("control",r.LoginForm.controls.password)("config",d(27,B,l(22,M,c(21,f)),l(25,M,c(24,f))))("noSpace",!0),n(),a("config",d(31,W,c(30,R),r.isLoggingIn())),n(2),C("Copyright 2022 - ",r.date," - Version: ",r.constants.version,""),n(4),y(" ",r.constants.appOwner," "),n(),F(r.isLoggingIn()?20:-1))},dependencies:[_,A,N,I,b,E,T,D],styles:[".login-container[_ngcontent-%COMP%]{overflow-y:auto;min-height:100dvh}.login-card[_ngcontent-%COMP%]{width:calc(100vw - 20px);max-width:500px}.spinner-container[_ngcontent-%COMP%]{height:100dvh;width:100vw;position:absolute;z-index:100000}"],changeDetection:0});let e=t;return e})();export{ae as LoginComponent};
