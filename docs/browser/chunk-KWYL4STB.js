import{a as ee,b as te,c as ne,d as re,e as ae,f as se,g as me}from"./chunk-4X2PJGET.js";import{a as R}from"./chunk-HMW2PEBS.js";import{a as B,b as V}from"./chunk-Q5R273OE.js";import{A as oe,b as H,d as S,f as G,g as W,h as $,j as g,k as q,l as X,m as z,p as J,q as K,r as Q,v as Y,w as Z,y as ie}from"./chunk-GZFTHMNX.js";import"./chunk-JALDAHO2.js";import{a as A}from"./chunk-PJ7CZ4LT.js";import{c as le}from"./chunk-YJD6ZQFG.js";import{F as P,K as U,O as j,b as D,ea as k}from"./chunk-3GOEH257.js";import"./chunk-IX6G3U3V.js";import{b as w,j as O}from"./chunk-YP77TDRT.js";import{j as I,m as N}from"./chunk-IQVPVRV2.js";import{$b as L,Bb as e,Cb as t,Db as m,Hb as E,Kb as M,L as _,Mb as v,Nb as b,Ob as F,Ub as i,Wb as y,Xa as c,Ya as s,Zb as f,ac as T,ha as u,pb as x,qa as h,ra as C,rb as d}from"./chunk-YS66BBCY.js";var pe="1",ce="3",de="Routine";var xe=["*"];function ve(n,o){n&1&&m(0,"mat-progress-spinner",2)}function _e(n,o){n&1&&m(0,"mat-progress-bar",2)}function he(n,o){if(n&1){let l=E();e(0,"header")(1,"h2",3),i(2),L(3,"firstName"),t(),e(4,"p",4),i(5,"Let's start a new lesson?"),t(),e(6,"p",5),i(7,"Practice speaking and pronunciation through short lessons with phrases in English to improve your skills."),t()(),e(8,"main")(9,"form",6),M("ngSubmit",function(){h(l);let r=v(2);return C(r.createSession())}),e(10,"h2",7),i(11,"Start a new session"),t(),e(12,"div",8)(13,"mat-form-field",9)(14,"mat-label"),i(15,"Level"),t(),e(16,"mat-select",10)(17,"mat-option",11),i(18,"Beginner"),t(),e(19,"mat-option",12),i(20,"Intermediate"),t(),e(21,"mat-option",13),i(22,"Advanced"),t()()(),e(23,"mat-form-field",9)(24,"mat-label"),i(25,"Context"),t(),e(26,"mat-select",14)(27,"mat-option",15),i(28,"Routine"),t(),e(29,"mat-option",16),i(30,"School"),t(),e(31,"mat-option",17),i(32,"Hobbies"),t(),e(33,"mat-option",18),i(34,"Cinema"),t(),e(35,"mat-option",19),i(36,"Travel"),t(),e(37,"mat-option",20),i(38,"Work"),t(),e(39,"mat-option",21),i(40,"Shopping"),t(),e(41,"mat-option",22),i(42,"Social Life"),t(),e(43,"mat-option",23),i(44,"Health & Wellness"),t(),e(45,"mat-option",24),i(46,"Family Life"),t(),e(47,"mat-option",25),i(48,"Dining Out"),t()()()(),e(49,"div")(50,"mat-label",26),i(51,"Lessons"),t(),e(52,"mat-slider",27),m(53,"input",28),t()(),e(54,"button",29),i(55,"Start session"),t(),x(56,_e,1,0,"mat-progress-bar",0),t()()}if(n&2){let l=v(2);c(2),y("Hello ",T(3,3,l.currentUser.name),"!"),c(7),d("formGroup",l.sessionCreatorForm),c(47),d("ngIf",l.isCreatingSession)}}function Ce(n,o){n&1&&F(0,0,["*ngIf","currentUser"],he,57,5)}var ue=(()=>{let o=class o{constructor(a,r,p,fe,Se){this.http=a,this.snackBar=r,this.baseUrl=p,this.router=fe,this.authService=Se,this.isCreatingSession=!1,this.sessionCreatorForm=new $({level:new g(pe,[S.required]),lessons:new g(ce,[S.required]),context:new g(de,[S.required])})}get isLoading(){return this.authService.isLoading}createSession(){this.isCreatingSession=!0,this.http.post(`${this.baseUrl}/sessions`,{level:+(this.sessionCreatorForm.value.level??1),lessons:+(this.sessionCreatorForm.value.lessons??2),context:this.sessionCreatorForm.value.context}).pipe(_(()=>{this.isCreatingSession=!1})).subscribe({next:({sessionId:a})=>{this.router.navigate([`sessions/${a}`])},error:a=>{this.snackBar.open(`Error: ${a.status} ${a.statusText}. Try again.`,"Dismiss",{duration:1e4})}})}get currentUser(){return this.authService.currentUser}};o.\u0275fac=function(r){return new(r||o)(s(w),s(k),s(D),s(O),s(A))},o.\u0275cmp=u({type:o,selectors:[["app-sessions-creator"]],standalone:!0,features:[f],ngContentSelectors:xe,decls:2,vars:2,consts:[["mode","indeterminate",4,"ngIf"],[4,"ngIf"],["mode","indeterminate"],[1,"mat-display-medium","primary-heading"],[1,"mat-title-small"],[1,"mat-body-medium"],[1,"session-creator-form",3,"ngSubmit","formGroup"],[1,"mat-title-medium"],[1,"session-creator-form-main-inputs"],["appearance","outline"],["formControlName","level"],["value","1"],["value","2"],["value","3"],["formControlName","context"],["value","Routine"],["value","School"],["value","Hobbies"],["value","Cinema"],["value","Travel"],["value","Work"],["value","Shopping"],["value","Social Life"],["value","Health & Wellness"],["value","Family Life"],["value","Dining Out"],[1,"mat-label-large"],["min","2","max","10","step","1","showTickMarks","","discrete","",1,"session-creator-form-lessons-slider"],["matSliderThumb","","value","2","formControlName","lessons"],["mat-flat-button","","type","submit"]],template:function(r,p){r&1&&(b(),x(0,ve,1,0,"mat-progress-spinner",0)(1,Ce,2,0,"ng-content",1)),r&2&&(d("ngIf",p.isLoading),c(),d("ngIf",p.currentUser))},dependencies:[ie,te,J,q,H,G,W,K,X,z,ee,Z,Y,Q,j,U,oe,N,I,re,ne,P,me,ae,se,le,R,V,B],styles:[".session-creator-form[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:column;gap:10px;width:100%}.session-creator-form-main-inputs[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:24px;justify-content:space-between}.session-creator-form-main-inputs[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1}.session-creator-form-lessons-slider[_ngcontent-%COMP%]{width:calc(100% - 32px)}"]});let n=o;return n})();var ot=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=u({type:o,selectors:[["app-sessions"]],standalone:!0,features:[f],decls:1,vars:0,template:function(r,p){r&1&&m(0,"app-sessions-creator")},dependencies:[ue],styles:["[_nghost-%COMP%]{width:calc(100% - 24px);max-width:648px;padding:24px 0;display:flex;justify-content:center;flex-direction:column;flex:1}"]});let n=o;return n})();export{ot as SessionsComponent};