"use strict";(self.webpackChunkpos=self.webpackChunkpos||[]).push([[592],{8404:(E,l,n)=>{n.d(l,{C:()=>e});class e{static UpdateArrayBehaviorSubject(o,a,c){const s=o.value.slice();if("add"===c)s.push(a);else if("edit"===c){const i=s.findIndex(t=>t._id===a._id);-1!==i&&(s[i]=a)}else if("delete"===c){const i=s.findIndex(t=>t._id===a._id);-1!==i&&s.splice(i,1)}o.next(s)}}},3493:(E,l,n)=>{n.d(l,{b:()=>c});var e=n(5879),d=n(6814),o=n(5986);function a(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"span",1)(1,"mat-checkbox",2),e.NdJ("change",function(){e.CHM(t);const u=e.oxw();return e.KtG(u.changeValue())}),e._uU(2),e.qZA()()}if(2&s){const t=e.oxw();e.xp6(1),e.Q6J("color",t.config.color?t.config.color:"primary")("checked",t.control.value)("disabled",t.config.disabled),e.xp6(1),e.hij(" ",t.config.label," ")}}let c=(()=>{class s{changeValue(){this.config.disabled||this.control.setValue(!this.control.value)}static#n=this.\u0275fac=function(_){return new(_||s)};static#e=this.\u0275cmp=e.Xpm({type:s,selectors:[["shared-checkbox"]],inputs:{control:"control",config:"config"},decls:1,vars:1,consts:[["class","shared-checkbox",4,"ngIf"],[1,"shared-checkbox"],[3,"color","checked","disabled","change"]],template:function(_,u){1&_&&e.YNc(0,a,3,4,"span",0),2&_&&e.Q6J("ngIf",u.control)},dependencies:[d.O5,o.oG],styles:[".shared-checkbox[_ngcontent-%COMP%]{margin:12px 0}[_nghost-%COMP%]     .mdc-checkbox__checkmark-path{color:var(--inside-primary-color)!important}"]})}return s})()},345:(E,l,n)=>{n.d(l,{O:()=>t});var e=n(9773),d=n(2041),o=n(5879),a=n(4497),c=n(6814),s=n(5940);function i(_,u){if(1&_&&(o.TgZ(0,"div",1),o._UZ(1,"mat-progress-spinner",2),o.qZA()),2&_){const r=o.oxw();o.xp6(1),o.Q6J("color",r.color)("mode",r.mode)}}let t=(()=>{class _ extends d.f{constructor(r,m){super(),this._loaderService=r,this._cd=m,this.mode="indeterminate",this.color="primary",this.loading=!1}ngOnInit(){this._loaderService.loader$.pipe((0,e.R)(this.__unsubscribe$)).subscribe(r=>{const m=this.loading;this.loading=r,r!==m&&this._cd.detectChanges()})}static#n=this.\u0275fac=function(m){return new(m||_)(o.Y36(a.D),o.Y36(o.sBO))};static#e=this.\u0275cmp=o.Xpm({type:_,selectors:[["shared-spinner"]],inputs:{mode:"mode",color:"color"},features:[o.qOj],decls:1,vars:1,consts:[["class","spinner-container",4,"ngIf"],[1,"spinner-container"],[3,"color","mode"]],template:function(m,h){1&m&&o.YNc(0,i,2,2,"div",0),2&m&&o.Q6J("ngIf",h.loading)},dependencies:[c.O5,s.Ou],styles:[".spinner-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:absolute;inset:0;z-index:15000;background-color:var(--spinner-background)}"]})}return _})()},7858:(E,l,n)=>{n.d(l,{j:()=>a});var e=n(6814),d=n(9255),o=n(5879);let a=(()=>{class c{static#n=this.\u0275fac=function(t){return new(t||c)};static#e=this.\u0275mod=o.oAB({type:c});static#o=this.\u0275inj=o.cJS({imports:[e.ez,d.B]})}return c})()},6363:(E,l,n)=>{n.d(l,{P:()=>i});var e=n(6814),d=n(9255),o=n(7700),a=n(7858),c=n(6223),s=n(5879);let i=(()=>{class t{static#n=this.\u0275fac=function(r){return new(r||t)};static#e=this.\u0275mod=s.oAB({type:t});static#o=this.\u0275inj=s.cJS({imports:[e.ez,d.B,o.Is,a.j,c.UX]})}return t})()}}]);