import{a as p}from"./chunk-7DPY6W6N.js";import{a as r,c as d}from"./chunk-3GCZ6EJH.js";import{M as i,da as n,ja as c,p as s}from"./chunk-YNBU5IFA.js";var f=(()=>{let a=class a{constructor(){this._networkService=c(d),this._bungalows$=new s([]),this.bungalow$=this._bungalows$.asObservable()}getAllBungalows(){this._networkService.get(r.BUNGALOWS).pipe(i(1)).subscribe({next:t=>{t.data&&this._bungalows$.next(t.data)}})}addBungalows(t){this._networkService.post(r.BUNGALOWS,t).pipe(i(1)).subscribe({next:e=>{e.data&&this._update(e.data,"add")}})}updateBungalows(t){this._networkService.patch(r.BUNGALOWS,t,t._id).pipe(i(1)).subscribe({next:e=>{e.data&&this._update(e.data,"edit")}})}_update(t,e){p.UpdateArrayBehaviorSubject(this._bungalows$,t,e)}};a.\u0275fac=function(e){return new(e||a)},a.\u0275prov=n({token:a,factory:a.\u0275fac,providedIn:"root"});let o=a;return o})();export{f as a};
