import{f as T}from"./chunk-H7Q4ZVWD.js";import{e as P}from"./chunk-KY5IPUDC.js";import"./chunk-ZRAVUJEI.js";import{a as j,b as O,c as H,e as V,g as W}from"./chunk-BVXKCTBI.js";import"./chunk-JIN3BOXY.js";import{a as M}from"./chunk-6EH4JDCG.js";import"./chunk-RGNDWIHZ.js";import{a as C,c as N}from"./chunk-5OCG7IXQ.js";import"./chunk-UQ6JH2GH.js";import{Bb as u,Ea as k,Hb as v,M as S,Mb as a,Nb as s,Ob as F,Vb as A,Xb as h,da as R,fb as o,fc as l,gb as w,hc as c,ia as I,ja as m,mc as E,na as p,nc as x,o as D,oc as $,p as y,qb as b,wb as f}from"./chunk-YNBU5IFA.js";var _=(()=>{let e=class e{constructor(t){this._networkService=t,this._reviews$=new y([]),this.reviews$=this._reviews$.asObservable(),this.changes$=new y({})}getAllReviews(){this._networkService.get(C.REVIEWS).pipe(S(1)).subscribe(t=>{t&&Array.isArray(t.data)&&this._reviews$.next(t.data)})}deleteReview(t){this._networkService.delete(C.REVIEWS,t._id).pipe(S(1)).subscribe(()=>{this.getAllReviews()})}};e.\u0275fac=function(r){return new(r||e)(I(N))},e.\u0275prov=R({token:e,factory:e.\u0275fac});let i=e;return i})();function G(i){let e=i.split("-");return`${e[2]}/${e[1]}/${e[0]}`}var B=()=>({title:"Review"});function L(i,e){if(i&1&&(a(0,"div",1)(1,"ul",2)(2,"li",3),l(3),s(),a(4,"li",3),l(5),s(),a(6,"li",3),l(7),s(),a(8,"li",3),l(9),s(),a(10,"li",3),l(11),s(),a(12,"li",3),l(13),s(),a(14,"li",3),l(15),s(),a(16,"li",3),l(17),s(),a(18,"li",3),l(19),s()()()),i&2){let n=h();o(3),c("Customer Name: ",n.data.name,""),o(2),c("Experience: ",n.data.experience," / 5 stars"),o(2),c("Cleanliness: ",n.data.cleanliness," / 5 stars"),o(2),c("Comfort: ",n.data.comfort," / 5 stars"),o(2),c("Amenities: ",n.data.amenities," / 5 stars"),o(2),c("Customer Service: ",n.data.customerService," / 5 stars"),o(2),c("Recommend: ",n.data.recommend?"Yes":"No",""),o(2),c("Improvement: ",n.data.improvement?n.data.improvement:"N/A",""),o(2),c("Comments: ",n.data.comments?n.data.comments:"N/A","")}}var U=(()=>{let e=class e{constructor(t,r){this.data=t,this._dialogRef=r}handleDialogActions(t){(!t||t==="ok"||t==="cancel")&&this.closeDialog()}changeDate(t){return G(t)}closeDialog(){this._dialogRef.close()}};e.\u0275fac=function(r){return new(r||e)(w(H),w(O))},e.\u0275cmp=p({type:e,selectors:[["app-review-popup"]],standalone:!0,features:[x],decls:2,vars:3,consts:[[3,"btnClicked","config"],[1,"container","py-2","cd-max"],[1,"row","text-start"],[1,"cs-r"]],template:function(r,d){r&1&&(a(0,"kss-lib-confirm-body",0),A("btnClicked",function(){return d.handleDialogActions()}),f(1,L,20,9,"div",1),s()),r&2&&(u("config",$(2,B)),o(),v(d.data?1:-1))},dependencies:[W],styles:[".cs-r[_ngcontent-%COMP%]{padding:7px;font-size:16px}"],changeDetection:0});let i=e;return i})();function Y(i,e){if(i&1&&F(0,"kss-lib-table",0),i&2){let n=h();u("config",e)("refresh$",n.refresh$)}}var ue=(()=>{let e=class e{constructor(){this._dialog=m(V),this._destroyRef=m(k),this._reviewsService=m(_),this._navService=m(j),this.refresh$=new D,this.gridConfigSig=b(void 0)}ngOnInit(){this._navService.updateNav({show:!0,back:!1,title:M.LAYOUT.children.REVIEWS.name,buttons:[]}),this._reviewsService.getAllReviews(),this._initializeGrid(),this._reviewsService.reviews$.pipe(P(this._destroyRef)).subscribe(t=>{this.refresh$.next({data:t})})}_initializeGrid(){this.gridConfigSig.set({data:b([]),defaultPagination:100,maxTableHeight:"calc(100dvh - 115px - 50px - 50px - 80px)",noDataMessage:"No Users Found",elevation:8,features:{showSearch:!0},columns:[{field:"name",title:"Customer Name",type:"string",readonlyFn:()=>!0,position:"p-start"},{title:"Experience",field:"experience",type:"number",readonlyFn:()=>!0,extraStyles:{width:"150px"}},{title:"Cleanliness",field:"cleanliness",type:"number",readonlyFn:()=>!0,extraStyles:{width:"150px"}},{title:"Comfort",field:"comfort",type:"number",readonlyFn:()=>!0,extraStyles:{width:"150px"}},{title:"Amenities",field:"amenities",type:"number",readonlyFn:()=>!0,extraStyles:{width:"150px"}},{title:"Customer Service",field:"customerService",type:"number",readonlyFn:()=>!0,extraStyles:{width:"150px"}},{title:"Date",field:"createdAt",type:"date",readonlyFn:()=>!0,dateFormat:"dd/MM/yyyy - HH:mm:ss a",extraStyles:{width:"170px"}}],actionsColumn:{enabled:!0,buttons:[{icon:{icon:"eye"},label:"View",onClickFn:t=>this._openReviewPopup(t)}]}})}_openReviewPopup(t){this._dialog.open(U,{width:"95vw",maxWidth:"500px",maxHeight:"95vh",disableClose:!0,autoFocus:!1,restoreFocus:!0,data:t})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=p({type:e,selectors:[["ks-solutions-reviews-listing"]],standalone:!0,features:[E([_]),x],decls:1,vars:1,consts:[[3,"config","refresh$"]],template:function(r,d){if(r&1&&f(0,Y,1,2,"kss-lib-table",0),r&2){let g;v((g=d.gridConfigSig())?0:-1,g)}},dependencies:[T],changeDetection:0});let i=e;return i})();export{ue as ReviewsComponent};
