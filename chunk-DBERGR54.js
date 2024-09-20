import{a as I}from"./chunk-N56CLES2.js";import{b as v}from"./chunk-NNN4WGES.js";import{a as O}from"./chunk-7DPY6W6N.js";import"./chunk-ADZRV4DN.js";import{a as L}from"./chunk-5GN2XTUH.js";import"./chunk-AXBYL5LR.js";import{a as p}from"./chunk-GZXIXI3S.js";import{a as c}from"./chunk-US4DBW3U.js";import"./chunk-IXDNPNBC.js";import{f as B}from"./chunk-H7Q4ZVWD.js";import{e as f}from"./chunk-KY5IPUDC.js";import{K as l,L as T,m as s}from"./chunk-ZRAVUJEI.js";import{a as H,e as Y}from"./chunk-BVXKCTBI.js";import"./chunk-JIN3BOXY.js";import{a as $}from"./chunk-6EH4JDCG.js";import"./chunk-RGNDWIHZ.js";import{a as d,c as j}from"./chunk-5OCG7IXQ.js";import{a as U}from"./chunk-UQ6JH2GH.js";import{Bb as m,Ea as x,Hb as w,M as o,Mb as D,Nb as F,Ob as M,Vb as k,Xb as N,da as S,fb as E,ja as a,mc as A,na as C,nc as V,o as y,p as b,pc as P,qb as h,wb as R}from"./chunk-YNBU5IFA.js";var g=(()=>{let r=class r{constructor(){this._networkService=a(j),this._revenues$=new b([]),this.month=new Date().getMonth(),this.year=new Date().getFullYear(),this.revenues$=this._revenues$.asObservable()}getRevenues(e){this.month=e.getMonth(),this.year=e.getFullYear();let t=new U().set("date",e.toISOString());this._networkService.get(d.REVENUES,void 0,t).pipe(o(1)).subscribe({next:i=>{i.data&&this._revenues$.next(i.data)}})}addRevenue(e){this._networkService.post(d.REVENUES,e).pipe(o(1)).subscribe(t=>{this.getRevenues(l(new Date(this.year,this.month,15)))})}updateRevenue(e){this._networkService.patch(d.REVENUES,e,e._id).pipe(o(1)).subscribe(t=>{this.getRevenues(l(new Date(this.year,this.month,15)))})}deleteRevenue(e){this._networkService.delete(d.REVENUES,e._id).pipe(o(1)).subscribe(()=>{O.UpdateArrayBehaviorSubject(this._revenues$,e,"delete")})}};r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=S({token:r,factory:r.\u0275fac});let n=r;return n})();var W=n=>({date:n,format:"MMMM yyyy"});function z(n,r){if(n&1&&M(0,"kss-lib-table",1),n&2){let _=N();m("config",_.gridConfig)("refresh$",_.refresh$)}}var u=function(n){return n.searchByDate="Change Month",n.addMultiple="Add Revenue",n}(u||{}),Ce=(()=>{let r=class r{constructor(){this._dialog=a(Y),this._destroyRef=a(x),this._navService=a(H),this._revenuesService=a(g),this.refresh$=new y,this._canAdd=p(c.ADD_REVENUE),this._canEdit=p(c.EDIT_REVENUE),this._canDelete=p(c.DELETE_REVENUE),this.dateSig=h(l())}ngOnInit(){this._navService.updateNav({show:!0,back:!1,title:$.LAYOUT.children.REVENUES.name,buttons:[{label:u.searchByDate,prefixIcon:{icon:"calendar",extraClass:"me-1"}},{label:u.addMultiple,prefixIcon:{icon:"plus_circle",extraClass:"me-1"},hide:!this._canAdd}]}),this._navService.buttonClicked$.pipe(f(this._destroyRef)).subscribe(e=>{e===u.searchByDate?this._openSearchByDate():e===u.addMultiple&&this._openRevenuePopup()}),this._initializeGrid(),this._revenuesService.getRevenues(this.dateSig())}ngAfterViewInit(){this._revenuesService.revenues$.pipe(f(this._destroyRef)).subscribe(e=>{this.refresh$.next({data:e})})}changeDate(e){this.dateSig.update(t=>{let i=new Date(t);return i.setDate(15),e==="next"?i.setMonth(t.getMonth()+1):i.setMonth(t.getMonth()-1),this._revenuesService.getRevenues(i),i})}_openSearchByDate(){let e={config:{title:"Change Month",showCancel:!0,showSave:!0},fields:[{fieldName:"month",select:{label:"Month",options:T},validators:[s.required],defaultValue:this.dateSig().getMonth()+1},{fieldName:"year",input:{label:"Year",type:"number"},validators:[s.required,s.min(2022),s.max(new Date().getFullYear()+10)],defaultValue:this.dateSig().getFullYear()}]};this._dialog.open(v,{width:"95vw",maxWidth:"500px",maxHeight:"95vh",disableClose:!0,autoFocus:!1,restoreFocus:!0,data:e}).afterClosed().pipe(o(1)).subscribe(t=>{t&&this.dateSig.update(()=>{let i=new Date(t.year,t.month-1,15);return this._revenuesService.getRevenues(i),i})})}_initializeGrid(){this.gridConfig={data:h([]),defaultPagination:100,maxTableHeight:"calc(100dvh - 115px - 50px - 50px - 50px - 80px)",noDataMessage:"No Revenues Found",features:{showSearch:!0},elevation:2,columns:[{field:"name",title:"Revenue",type:"string",readonlyFn:()=>!0},{field:"amount",title:"Amount",type:"number",readonlyFn:()=>!0,extraStyles:{width:"100px"}},{field:"notes",title:"Notes",type:"string",readonlyFn:()=>!0,extraStyles:{"max-width":"300px"}},{field:"createdBy",title:"Created By",type:"string",readonlyFn:()=>!0,extraStyles:{width:"130px"}},{field:"date",title:"Date",type:"date",readonlyFn:()=>!0,extraStyles:{width:"120px"},dateFormat:"dd/MM/yyyy"},{field:"createdAt",title:"Created At",type:"date",readonlyFn:()=>!0,extraStyles:{width:"180px"},dateFormat:"dd/MM/yyyy - HH:mm:ss a"}],actionsColumn:{enabled:this._canEdit||this._canDelete,buttons:[]}},this._canEdit&&this.gridConfig.actionsColumn?.buttons?.push({icon:{icon:"edit"},label:"Edit",onClickFn:e=>this._openRevenuePopup(e),isVisibleFn:e=>this._canEdit&&!e.reservationId}),this._canDelete&&this.gridConfig.actionsColumn?.buttons?.push({icon:{icon:"delete",extraClass:"text-danger"},label:"Delete",onClickFn:e=>this._deleteRevenue(e),isVisibleFn:e=>this._canDelete})}_openRevenuePopup(e){let t={data:e,config:{title:e?"Edit Revenue":"Add Revenue",showCancel:!0,showSave:!0},fields:[{fieldName:"name",input:{label:"Revenue"},validators:[s.required],textMaxLength:30},{fieldName:"amount",input:{label:"Amount in $",type:"number"},validators:[s.required],MaxValue:1e5},{fieldName:"date",input:{label:"Date",type:"date"}},{fieldName:"notes",input:{label:"Description"},textMaxLength:100}]};this._dialog.open(v,{width:"95vw",maxWidth:"500px",maxHeight:"95vh",disableClose:!0,autoFocus:!1,restoreFocus:!0,data:t}).afterClosed().pipe(o(1)).subscribe(i=>{i&&(e?this._revenuesService.updateRevenue(i):this._revenuesService.addRevenue(i))})}_deleteRevenue(e){let t={title:"Confirm Delete",bodyMessage:"Are you sure you want to delete this revenue?",showYesNo:!0,showOk:!1,state:"error"};this._dialog.open(L,{width:"95vw",maxWidth:"500px",disableClose:!0,restoreFocus:!0,autoFocus:!1,data:t}).afterClosed().pipe(o(1)).subscribe(i=>{i&&i==="yes"&&e&&e._id&&this._revenuesService.deleteRevenue(e)})}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=C({type:r,selectors:[["ks-solutions-revenues"]],standalone:!0,features:[A([g]),V],decls:2,vars:4,consts:[[3,"btnClicked","config"],[3,"config","refresh$"]],template:function(t,i){t&1&&(D(0,"kss-lib-changer",0),k("btnClicked",function(q){return i.changeDate(q)}),F(),R(1,z,1,2,"kss-lib-table",1)),t&2&&(m("config",P(2,W,i.dateSig())),E(),w(i.gridConfig?1:-1))},dependencies:[B,I],changeDetection:0});let n=r;return n})();export{Ce as RevenuesComponent};