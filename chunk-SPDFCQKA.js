import{a as R}from"./chunk-N56CLES2.js";import{b as x}from"./chunk-SH6GYA2T.js";import{a as O}from"./chunk-7DPY6W6N.js";import"./chunk-ADZRV4DN.js";import{a as L}from"./chunk-5GN2XTUH.js";import"./chunk-AXBYL5LR.js";import{a as h}from"./chunk-GZXIXI3S.js";import{a as c}from"./chunk-US4DBW3U.js";import"./chunk-IXDNPNBC.js";import{f as V}from"./chunk-H7Q4ZVWD.js";import{e as f}from"./chunk-KY5IPUDC.js";import{K as p,L as H,m as r}from"./chunk-ZRAVUJEI.js";import{a as X,e as Y}from"./chunk-BVXKCTBI.js";import"./chunk-JIN3BOXY.js";import{a as B}from"./chunk-6EH4JDCG.js";import"./chunk-RGNDWIHZ.js";import{a as l,c as j}from"./chunk-3GCZ6EJH.js";import{a as T}from"./chunk-UQ6JH2GH.js";import{Bb as m,Ea as C,Hb as D,M as o,Mb as F,Nb as M,Ob as k,Vb as P,Xb as N,da as S,fb as v,ja as a,mc as A,na as b,nc as $,o as E,p as y,pc as I,qb as u,wb as w}from"./chunk-YNBU5IFA.js";var g=(()=>{let n=class n{constructor(){this._networkService=a(j),this._expenses$=new y([]),this.month=new Date().getMonth(),this.year=new Date().getFullYear(),this.expenses$=this._expenses$.asObservable()}getExpenses(e){this.month=e.getMonth(),this.year=e.getFullYear();let t=new T().set("date",e.toISOString());this._networkService.get(l.EXPENSES,void 0,t).pipe(o(1)).subscribe({next:i=>{i.data&&this._expenses$.next(i.data)}})}addExpense(e){this._networkService.post(l.EXPENSES,e).pipe(o(1)).subscribe(t=>{this.getExpenses(p(new Date(this.year,this.month,15)))})}updateExpense(e){this._networkService.patch(l.EXPENSES,e,e._id).pipe(o(1)).subscribe(t=>{this.getExpenses(p(new Date(this.year,this.month,15)))})}deleteExpense(e){this._networkService.delete(l.EXPENSES,e._id).pipe(o(1)).subscribe(()=>{O.UpdateArrayBehaviorSubject(this._expenses$,e,"delete")})}};n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=S({token:n,factory:n.\u0275fac});let s=n;return s})();var G=s=>({date:s,format:"MMMM yyyy"});function W(s,n){if(s&1&&k(0,"kss-lib-table",1),s&2){let _=N();m("config",_.gridConfig)("refresh$",_.refresh$)}}var d=function(s){return s.searchByDate="Change Month",s.addMultiple="Add Expense",s}(d||{}),be=(()=>{let n=class n{constructor(){this._dialog=a(Y),this._destroyRef=a(C),this._navService=a(X),this._expensesService=a(g),this.refresh$=new E,this._canAdd=h(c.ADD_EXPENSE),this._canEdit=h(c.EDIT_EXPENSE),this._canDelete=h(c.DELETE_EXPENSE),this.dateSig=u(p())}ngOnInit(){this._navService.updateNav({show:!0,back:!1,title:B.LAYOUT.children.EXPENSES.name,buttons:[{label:d.searchByDate,prefixIcon:{icon:"calendar",extraClass:"me-1"}},{label:d.addMultiple,prefixIcon:{icon:"plus_circle",extraClass:"me-1"},hide:!this._canAdd}]}),this._navService.buttonClicked$.pipe(f(this._destroyRef)).subscribe(e=>{e===d.searchByDate?this._openSearchByDate():e===d.addMultiple&&this._openExpensePopup()}),this._initializeGrid(),this._expensesService.getExpenses(this.dateSig())}ngAfterViewInit(){this._expensesService.expenses$.pipe(f(this._destroyRef)).subscribe(e=>{this.refresh$.next({data:e})})}changeDate(e){this.dateSig.update(t=>{let i=new Date(t);return i.setDate(15),e==="next"?i.setMonth(t.getMonth()+1):i.setMonth(t.getMonth()-1),this._expensesService.getExpenses(i),i})}_openSearchByDate(){let e={config:{title:"Change Month",showCancel:!0,showSave:!0},fields:[{fieldName:"month",select:{label:"Month",options:H},validators:[r.required],defaultValue:this.dateSig().getMonth()+1},{fieldName:"year",input:{label:"Year",type:"number"},validators:[r.required,r.min(2022),r.max(new Date().getFullYear()+10)],defaultValue:this.dateSig().getFullYear()}]};this._dialog.open(x,{width:"95vw",maxWidth:"500px",maxHeight:"95vh",disableClose:!0,autoFocus:!1,restoreFocus:!0,data:e}).afterClosed().pipe(o(1)).subscribe(t=>{t&&this.dateSig.update(()=>{let i=new Date(t.year,t.month-1,15);return this._expensesService.getExpenses(i),i})})}_initializeGrid(){this.gridConfig={data:u([]),defaultPagination:100,maxTableHeight:"calc(100dvh - 115px - 50px - 50px - 50px - 80px)",noDataMessage:"No Expenses Found",features:{showSearch:!0},elevation:2,columns:[{field:"name",title:"Expense",type:"string",readonlyFn:()=>!0},{field:"amount",title:"Amount",type:"number",readonlyFn:()=>!0,extraStyles:{width:"100px"}},{field:"notes",title:"Notes",type:"string",readonlyFn:()=>!0,extraStyles:{"max-width":"300px"}},{field:"createdBy",title:"Created By",type:"string",readonlyFn:()=>!0,extraStyles:{width:"130px"}},{field:"date",title:"Date",type:"date",readonlyFn:()=>!0,extraStyles:{width:"120px"},dateFormat:"dd/MM/yyyy"},{field:"createdAt",title:"Created At",type:"date",readonlyFn:()=>!0,extraStyles:{width:"180px"},dateFormat:"dd/MM/yyyy - HH:mm:ss a"}],actionsColumn:{enabled:this._canEdit||this._canDelete,buttons:[]}},this._canEdit&&this.gridConfig.actionsColumn?.buttons?.push({icon:{icon:"edit"},label:"Edit",onClickFn:e=>this._openExpensePopup(e),isVisibleFn:e=>this._canEdit}),this._canDelete&&this.gridConfig.actionsColumn?.buttons?.push({icon:{icon:"delete",extraClass:"text-danger"},label:"Delete",onClickFn:e=>this._deleteExpense(e),isVisibleFn:e=>this._canDelete})}_openExpensePopup(e){let t={data:e,config:{title:e?"Edit Expense":"Add Expense",showCancel:!0,showSave:!0},fields:[{fieldName:"name",input:{label:"Expense"},validators:[r.required],textMaxLength:30},{fieldName:"amount",input:{label:"Amount in $",type:"number"},validators:[r.required],MaxValue:1e5},{fieldName:"date",input:{label:"Date",type:"date"}},{fieldName:"notes",input:{label:"Description"},textMaxLength:100}]};this._dialog.open(x,{width:"95vw",maxWidth:"500px",maxHeight:"95vh",disableClose:!0,autoFocus:!1,restoreFocus:!0,data:t}).afterClosed().pipe(o(1)).subscribe(i=>{i&&(e?this._expensesService.updateExpense(i):this._expensesService.addExpense(i))})}_deleteExpense(e){let t={title:"Confirm Delete",bodyMessage:"Are you sure you want to delete this expense?",showYesNo:!0,showOk:!1,state:"error"};this._dialog.open(L,{width:"95vw",maxWidth:"500px",disableClose:!0,restoreFocus:!0,autoFocus:!1,data:t}).afterClosed().pipe(o(1)).subscribe(i=>{i&&i==="yes"&&e&&e._id&&this._expensesService.deleteExpense(e)})}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=b({type:n,selectors:[["ks-solutions-expenses"]],standalone:!0,features:[A([g]),$],decls:2,vars:4,consts:[[3,"btnClicked","config"],[3,"config","refresh$"]],template:function(t,i){t&1&&(F(0,"kss-lib-changer",0),P("btnClicked",function(U){return i.changeDate(U)}),M(),w(1,W,1,2,"kss-lib-table",1)),t&2&&(m("config",I(2,G,i.dateSig())),v(),D(i.gridConfig?1:-1))},dependencies:[V,R],changeDetection:0});let s=n;return s})();export{be as ExpensesComponent};
