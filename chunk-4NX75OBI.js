import{a as v,fa as C}from"./chunk-6EH4JDCG.js";import{n as f}from"./chunk-UQ6JH2GH.js";import{Bb as s,Mb as e,Nb as i,Ob as u,Vb as p,bb as l,fb as r,fc as a,ja as m,na as d,nc as g,oc as h}from"./chunk-YNBU5IFA.js";var y=()=>({label:"Back to Home",matAttribute:"mat-flat-button",color:"primary",extraClass:"rounded-5"}),T=(()=>{let t=class t{constructor(){this._router=m(f),this.innerWidth=window.innerWidth}ngOnInit(){window.scrollTo(0,0)}navigateToHome(){this._router.navigate([v.LAYOUT.route])}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["ks-solutions-not-authorized"]],standalone:!0,features:[g],decls:10,vars:3,consts:[[1,"not-authorized","container-fluid","text-center","h-100","w-100","d-flex","align-items-center","justify-content-center"],[1,"text-center"],["alt","Not Authorized",3,"src"],[1,"text-center","mt-4"],[1,"lead","text-secondary","text-center"],[1,"mt-5","text-center"],[3,"btnClicked","config"]],template:function(n,c){n&1&&(e(0,"div",0)(1,"div",1),u(2,"img",2),e(3,"h1",3)(4,"b"),a(5,"Access Denied !"),i()(),e(6,"p",4),a(7,"Sorry, it seems you don't have permission to access this page"),i(),e(8,"div",5)(9,"kss-lib-button",6),p("btnClicked",function(){return c.navigateToHome()}),i()()()()),n&2&&(r(2),s("src",c.innerWidth>700?"./assets/images/random/no-access.png":"./assets/images/random/no-access-sm.jpg",l),r(7),s("config",h(2,y)))},dependencies:[C],styles:[".not-authorized[_ngcontent-%COMP%]{min-height:100dvh}.not-authorized[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:60vw}h1[_ngcontent-%COMP%]{font-size:35px}"],changeDetection:0});let o=t;return o})();export{T as NotAuthorizedComponent};