import{b as O,c as S,g as V}from"./chunk-BVXKCTBI.js";import{fa as I}from"./chunk-6EH4JDCG.js";import{Bb as p,Gb as v,Hb as u,Ib as x,Kb as w,Lb as M,Mb as r,Nb as s,Sb as g,Tc as B,Vb as c,Xb as l,fb as a,fc as b,gb as _,gc as k,na as y,nc as P,pc as T,qb as h,rc as A,wb as f,xa as m,ya as C}from"./chunk-YNBU5IFA.js";var D=t=>({position:"left",removeDefaultBg:!1,showDivider:!0,title:t}),E=(t,i,n)=>({"text-danger":t,"text-warning":i,"text-success":n});function F(t,i){if(t&1&&(r(0,"div",4),b(1),s()),t&2){let n=l(2);a(),k(n.data==null?null:n.data.bodyMessage)}}function R(t,i){if(t&1&&(r(0,"div",5),b(1),s()),t&2){let n=i.$implicit;a(),k(n)}}function j(t,i){if(t&1&&w(0,R,2,1,"div",5,x),t&2){let n=l(2);M(n.data==null?null:n.data.bodyMessage)}}function W(t,i){if(t&1&&f(0,F,2,1,"div",4)(1,j,2,0),t&2){let n=l();u(n.isArray()?1:0)}}function N(t,i){if(t&1){let n=g();r(0,"div",2)(1,"div",6)(2,"kss-lib-button",0),c("btnClicked",function(){m(n);let o=l();return C(o.yesClicked())}),s()(),r(3,"div",6)(4,"kss-lib-button",0),c("btnClicked",function(){m(n);let o=l();return C(o.noClicked())}),s()()()}if(t&2){let n=l();a(2),p("config",n.yesButtonConfig),a(2),p("config",n.noButtonConfig)}}function Y(t,i){if(t&1){let n=g();r(0,"div",3)(1,"kss-lib-button",0),c("btnClicked",function(){m(n);let o=l();return C(o.okClicked())}),s()()}if(t&2){let n=l();a(),p("config",n.okButtonConfig)}}var tt=(()=>{let i=class i{constructor(d,o){this.dialogRef=d,this.data=o,this.isArray=h(!1),this.okButtonConfig={label:"Close",type:"button",color:this.data?.state==="error"?"warn":void 0,matAttribute:"mat-stroked-button",extraClass:"rounded-5"},this.yesButtonConfig={label:"Yes",color:this.data?.state==="error"?"warn":void 0,matAttribute:this.data?.state==="error"?"mat-flat-button":"mat-stroked-button",takeFullWidth:!0},this.noButtonConfig={label:"Cancel",color:this.data?.state==="error"?"warn":void 0,matAttribute:"mat-stroked-button",takeFullWidth:!0}}ngOnInit(){this.data?.bodyMessage&&Array.isArray(this.data.bodyMessage)&&this.isArray.set(!0)}yesClicked(){this.dialogRef.close("yes")}noClicked(){this.dialogRef.close("no")}okClicked(){this.dialogRef.close("ok")}closeClicked(){this.dialogRef.close()}};i.\u0275fac=function(o){return new(o||i)(_(O),_(S))},i.\u0275cmp=y({type:i,selectors:[["kss-lib-confirm-popup"]],standalone:!0,features:[P],decls:6,vars:14,consts:[[3,"btnClicked","config"],[1,"py-2","px-4","message-body",2,"min-height","70px",3,"ngClass"],[1,"py-2","align-items-center","justify-content-center","d-flex"],[1,"py-2","text-center"],[1,"text-break"],[1,"text-break",2,"min-height","15px"],[1,"mx-1",2,"width","120px"]],template:function(o,e){o&1&&(r(0,"div")(1,"kss-lib-confirm-body",0),c("btnClicked",function(){return e.closeClicked()}),r(2,"div",1),f(3,W,2,1),s(),f(4,N,5,2,"div",2)(5,Y,2,1,"div",3),s()()),o&2&&(v("confirm-popup popup-",e.data==null?null:e.data.state,""),a(),p("config",T(8,D,e.data!=null&&e.data.title?(e.data==null?null:e.data.title)||"Message":e.data!=null&&e.data.state?(e.data==null?null:e.data.state)==="error"?"Message":(e.data==null?null:e.data.state)==="warning"?"Warning":"Message":"Message")),a(),p("ngClass",A(10,E,(e.data==null?null:e.data.state)==="error",(e.data==null?null:e.data.state)==="warning",(e.data==null?null:e.data.state)==="success")),a(),u(e.data!=null&&e.data.bodyMessage?3:-1),a(),u((e.data==null?null:e.data.showYesNo)===!0?4:-1),a(),u((e.data==null?null:e.data.showOk)===!0?5:-1))},dependencies:[I,B,V],styles:[".confirm-popup[_ngcontent-%COMP%]{width:100%}.message-body[_ngcontent-%COMP%]{max-height:70dvh;overflow-y:auto}.cs-pop-title[_ngcontent-%COMP%]{font-size:20px;font-weight:600}.popup-error[_ngcontent-%COMP%]{color:#dc3545!important}.popup-warning[_ngcontent-%COMP%]{color:#ffc107!important}"]});let t=i;return t})();export{tt as a};