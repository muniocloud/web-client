import{i as p,w as h}from"./chunk-3GOEH257.js";import{m as I}from"./chunk-IQVPVRV2.js";import{$b as S,Bb as l,Cb as m,Db as U,Mb as c,Ua as g,Ub as D,Vb as P,Xa as d,Zb as s,aa as v,ac as _,ha as o,ia as f,ka as u,pb as y,qb as w,qc as F,rb as C,tb as b,ub as x,xb as M}from"./chunk-YS66BBCY.js";var E=(()=>{let t=class t{constructor(){this._vertical=!1,this._inset=!1}get vertical(){return this._vertical}set vertical(r){this._vertical=p(r)}get inset(){return this._inset}set inset(r){this._inset=p(r)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=o({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,a){i&2&&(w("aria-orientation",a.vertical?"vertical":"horizontal"),b("mat-divider-vertical",a.vertical)("mat-divider-horizontal",!a.vertical)("mat-divider-inset",a.inset))},inputs:{vertical:"vertical",inset:"inset"},standalone:!0,features:[s],decls:0,vars:0,template:function(i,a){},styles:[".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color);border-top-width:var(--mat-divider-width)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color);border-right-width:var(--mat-divider-width)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],encapsulation:2,changeDetection:0});let e=t;return e})(),O=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=f({type:t}),t.\u0275inj=v({imports:[h,h]});let e=t;return e})();var B=(()=>{let t=class t{transform(r){return r[0].toUpperCase()}};t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=u({name:"firstLetter",type:t,pure:!0,standalone:!0});let e=t;return e})();function T(e,t){if(e&1&&U(0,"img",1),e&2){let n=c();C("src",n.imageUrl,g)("alt",n.name+" image")}}function V(e,t){if(e&1&&(l(0,"span",2),D(1),S(2,"firstLetter"),m()),e&2){let n=c();d(),P(_(2,1,n.name))}}var J=(()=>{let t=class t{constructor(){this.imageUrl=null,this.name="",this.width="24px",this.height="24px",this.avatarVariableStyles=F(()=>`--avatar-width: ${this.width}; --avatar-height: ${this.height}`)}hasImageUrl(){return!!this.imageUrl}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=o({type:t,selectors:[["app-avatar"]],inputs:{imageUrl:"imageUrl",name:"name",width:"width",height:"height"},standalone:!0,features:[s],decls:3,vars:3,consts:[[1,"avatar"],[3,"src","alt"],[1,"mat-body-large"]],template:function(i,a){i&1&&(l(0,"div",0),y(1,T,1,2,"img",1)(2,V,3,3,"span",2),m()),i&2&&(x(a.avatarVariableStyles()),d(),M(a.hasImageUrl()?1:2))},dependencies:[B,I],styles:[".avatar[_ngcontent-%COMP%]{height:var(--avatar-height);width:var(--avatar-width);border-radius:50%;display:flex;align-items:center;justify-content:center}.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;border-radius:50%;height:var(--avatar-height);width:var(--avatar-width)}"]});let e=t;return e})();export{E as a,O as b,J as c};
