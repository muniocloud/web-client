import"./chunk-Q5R273OE.js";import{a as Ee}from"./chunk-DBJ4RBGA.js";import{B as xe,a as Se,c as Ae}from"./chunk-GZFTHMNX.js";import"./chunk-JALDAHO2.js";import{a as p}from"./chunk-PJ7CZ4LT.js";import"./chunk-YJD6ZQFG.js";import{B as Ie,J as Me,a as ye,c as ke,t as Ce,w as z}from"./chunk-3GOEH257.js";import"./chunk-IX6G3U3V.js";import{c as we,d as ue,e as fe,f as _e,i as be,l as ge,m as ve}from"./chunk-YP77TDRT.js";import{d as me,m as pe}from"./chunk-IQVPVRV2.js";import{$ as L,$a as Q,Ba as E,Bb as d,Cb as o,Db as l,Ha as k,Hb as K,Ib as ee,Kb as R,Nb as te,Ob as ie,Qb as ce,Rb as ae,Sb as se,Tb as de,Ub as n,Xa as v,Y as T,Ya as f,Yb as re,Za as H,Zb as _,_ as F,aa as N,bb as W,ca as j,db as Z,eb as $,fa as m,fc as oe,ha as u,ia as V,jc as ne,kc as le,la as q,mb as Y,oc as b,pa as G,pb as C,pc as he,qa as A,qb as I,ra as x,rb as y,sa as B,tb as D,va as U,vb as J,xb as M,za as X}from"./chunk-YS66BBCY.js";var w=(i,e)=>m(p).isAuthenticated();var De=[{path:"",pathMatch:"prefix",loadComponent:()=>import("./chunk-KJC6I4CF.js").then(i=>i.DashboardComponent),canMatch:[w],children:[{path:"",loadComponent:()=>import("./chunk-QSGZ6MH3.js").then(i=>i.DashboardHomeComponent),canMatch:[w]},{path:"sessions",loadComponent:()=>import("./chunk-KWYL4STB.js").then(i=>i.SessionsComponent),canMatch:[w]},{path:"sessions/:sessionId",loadComponent:()=>import("./chunk-IF2QUGAK.js").then(i=>i.SessionComponent),canMatch:[w]},{path:"conversations",loadComponent:()=>import("./chunk-KJHJSA54.js").then(i=>i.ConversationsComponent),canMatch:[w]},{path:"conversations/:conversationId",loadComponent:()=>import("./chunk-FZMJPUOW.js").then(i=>i.ConversationComponent),canMatch:[w]}]}];var Re=[...De,{path:"",pathMatch:"full",loadComponent:()=>import("./chunk-HW2GQG2U.js").then(i=>i.HomepageComponent)},{path:"**",loadComponent:()=>import("./chunk-ISPS3B7H.js").then(i=>i.NotFoundComponent)}];var je="@",Ve=(()=>{let e=class e{constructor(t,c,a,r,h){this.doc=t,this.delegate=c,this.zone=a,this.animationType=r,this.moduleImpl=h,this._rendererFactoryPromise=null,this.scheduler=m(Q,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-WRXTDKUR.js").then(c=>c)).catch(c=>{throw new T(5300,!1)}).then(({\u0275createEngine:c,\u0275AnimationRendererFactory:a})=>{this._engine=c(this.animationType,this.doc);let r=new a(this.delegate,this._engine,this.zone);return this.delegate=r,r})}createRenderer(t,c){let a=this.delegate.createRenderer(t,c);if(a.\u0275type===0)return a;typeof a.throwOnSyntheticProps=="boolean"&&(a.throwOnSyntheticProps=!1);let r=new P(a);return c?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(h=>{let g=h.createRenderer(t,c);r.use(g),this.scheduler?.notify(9)}).catch(h=>{r.use(a)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(c){H()},e.\u0275prov=L({token:e,factory:e.\u0275fac});let i=e;return i})(),P=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let s of this.replay)s(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,s){return this.delegate.createElement(e,s)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,s){this.delegate.appendChild(e,s)}insertBefore(e,s,t,c){this.delegate.insertBefore(e,s,t,c)}removeChild(e,s,t){this.delegate.removeChild(e,s,t)}selectRootElement(e,s){return this.delegate.selectRootElement(e,s)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,s,t,c){this.delegate.setAttribute(e,s,t,c)}removeAttribute(e,s,t){this.delegate.removeAttribute(e,s,t)}addClass(e,s){this.delegate.addClass(e,s)}removeClass(e,s){this.delegate.removeClass(e,s)}setStyle(e,s,t,c){this.delegate.setStyle(e,s,t,c)}removeStyle(e,s,t){this.delegate.removeStyle(e,s,t)}setProperty(e,s,t){this.shouldReplay(s)&&this.replay.push(c=>c.setProperty(e,s,t)),this.delegate.setProperty(e,s,t)}setValue(e,s){this.delegate.setValue(e,s)}listen(e,s,t){return this.shouldReplay(s)&&this.replay.push(c=>c.listen(e,s,t)),this.delegate.listen(e,s,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(je)}};function ze(i="animations"){return Z("NgAsyncAnimations"),q([{provide:W,useFactory:(e,s,t)=>new Ve(e,s,t,i),deps:[me,fe,$]},{provide:k,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}function Pe(i,e){let s=m(p).getUserToken(),t=i.headers.append("Authorization",`Bearer ${s}`),c=i.clone({headers:t});return e(c)}var Oe={providers:[ne({eventCoalescing:!0}),ge(Re,ve({onSameUrlNavigation:"reload"})),ze(),we(ue([Pe])),ke,{provide:oe,deps:[p],useFactory:()=>null}]};var qe=["switch"],Ge=["*"];function Be(i,e){i&1&&(d(0,"div",10),B(),d(1,"svg",12),l(2,"path",13),o(),d(3,"svg",14),l(4,"path",15),o()())}var Ue=new j("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1})}),Xe={provide:Se,useExisting:F(()=>Te),multi:!0},S=class{constructor(e,s){this.source=e,this.checked=s}},He=0,Te=(()=>{let e=class e{_createChangeEvent(t){return new S(this,t)}get buttonId(){return`${this.id||this._uniqueId}-button`}focus(){this._switchElement.nativeElement.focus()}get checked(){return this._checked}set checked(t){this._checked=t,this._changeDetectorRef.markForCheck()}get inputId(){return`${this.id||this._uniqueId}-input`}constructor(t,c,a,r,h,g){this._elementRef=t,this._focusMonitor=c,this._changeDetectorRef=a,this.defaults=h,this._onChange=Ze=>{},this._onTouched=()=>{},this._validatorOnChange=()=>{},this._checked=!1,this.name=null,this.labelPosition="after",this.ariaLabel=null,this.ariaLabelledby=null,this.disabled=!1,this.disableRipple=!1,this.tabIndex=0,this.change=new E,this.toggleChange=new E,this.tabIndex=parseInt(r)||0,this.color=h.color||"accent",this._noopAnimations=g==="NoopAnimations",this.id=this._uniqueId=`mat-mdc-slide-toggle-${++He}`,this.hideIcon=h.hideIcon??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{t==="keyboard"||t==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):t||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(t){t.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(t){this.checked=!!t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}validate(t){return this.required&&t.value!==!0?{required:!0}:null}registerOnValidatorChange(t){this._validatorOnChange=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new S(this,this.checked)))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}};e.\u0275fac=function(c){return new(c||e)(f(X),f(Ce),f(le),U("tabindex"),f(Ue),f(k,8))},e.\u0275cmp=u({type:e,selectors:[["mat-slide-toggle"]],viewQuery:function(c,a){if(c&1&&ce(qe,5),c&2){let r;ae(r=se())&&(a._switchElement=r.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(c,a){c&2&&(ee("id",a.id),I("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),J(a.color?"mat-"+a.color:""),D("mat-mdc-slide-toggle-focused",a._focused)("mat-mdc-slide-toggle-checked",a.checked)("_mat-animation-noopable",a._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",b],color:"color",disabled:[2,"disabled","disabled",b],disableRipple:[2,"disableRipple","disableRipple",b],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:he(t)],checked:[2,"checked","checked",b],hideIcon:[2,"hideIcon","hideIcon",b]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],standalone:!0,features:[re([Xe,{provide:Ae,useExisting:e,multi:!0}]),Y,G,_],ngContentSelectors:Ge,decls:13,vars:24,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-mdc-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(c,a){if(c&1){let r=K();te(),d(0,"div",1)(1,"button",2,0),R("click",function(){return A(r),x(a._handleClick())}),l(3,"div",3),d(4,"div",4)(5,"div",5)(6,"div",6),l(7,"div",7),o(),d(8,"div",8),l(9,"div",9),o(),C(10,Be,5,0,"div",10),o()()(),d(11,"label",11),R("click",function(g){return A(r),x(g.stopPropagation())}),ie(12),o()()}if(c&2){let r=de(2);y("labelPosition",a.labelPosition),v(),D("mdc-switch--selected",a.checked)("mdc-switch--unselected",!a.checked)("mdc-switch--checked",a.checked)("mdc-switch--disabled",a.disabled),y("tabIndex",a.disabled?-1:a.tabIndex)("disabled",a.disabled),I("id",a.buttonId)("name",a.name)("aria-label",a.ariaLabel)("aria-labelledby",a._getAriaLabelledBy())("aria-describedby",a.ariaDescribedby)("aria-required",a.required||null)("aria-checked",a.checked),v(8),y("matRippleTrigger",r)("matRippleDisabled",a.disableRipple||a.disabled)("matRippleCentered",!0),v(),M(a.hideIcon?-1:10),v(),y("for",a.buttonId),I("id",a._labelId)}},dependencies:[Ie,Me],styles:['.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:var(--mdc-elevation-overlay-color)}.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative}.mdc-switch[hidden]{display:none}.mdc-switch:disabled{cursor:default;pointer-events:none}.mdc-switch__track{overflow:hidden;position:relative;width:100%}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%}@media screen and (forced-colors: active){.mdc-switch__track::before,.mdc-switch__track::after{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(-100%)}[dir=rtl] .mdc-switch__track::after,.mdc-switch__track[dir=rtl]::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track[dir=rtl]::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0)}[dir=rtl] .mdc-switch__handle-track,.mdc-switch__handle-track[dir=rtl]{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,.mdc-switch--selected .mdc-switch__handle-track[dir=rtl]{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto}[dir=rtl] .mdc-switch__handle,.mdc-switch__handle[dir=rtl]{left:auto;right:0}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media screen and (forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1}.mdc-switch:disabled .mdc-switch__ripple{display:none}.mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle .mat-internal-form-field{color:var(--mat-switch-label-text-color);font-family:var(--mat-switch-label-text-font);line-height:var(--mat-switch-label-text-line-height);font-size:var(--mat-switch-label-text-size);letter-spacing:var(--mat-switch-label-text-tracking);font-weight:var(--mat-switch-label-text-weight)}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mdc-switch-disabled-label-text-color)}.mdc-switch{width:var(--mdc-switch-track-width)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-selected-handle-color)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-hover-handle-color)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-focus-handle-color)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-selected-pressed-handle-color)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-selected-handle-color)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-unselected-handle-color)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-hover-handle-color)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-focus-handle-color)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-unselected-pressed-handle-color)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-unselected-handle-color)}.mdc-switch .mdc-switch__handle::before{background:var(--mdc-switch-handle-surface-color)}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation)}.mdc-switch:disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation)}.mdc-switch .mdc-switch__focus-ring-wrapper,.mdc-switch .mdc-switch__handle{height:var(--mdc-switch-handle-height)}.mdc-switch .mdc-switch__handle{border-radius:var(--mdc-switch-handle-shape)}.mdc-switch .mdc-switch__handle{width:var(--mdc-switch-handle-width)}.mdc-switch .mdc-switch__handle-track{width:calc(100% - var(--mdc-switch-handle-width))}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:var(--mdc-switch-selected-icon-color)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-selected-icon-color)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:var(--mdc-switch-unselected-icon-color)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-unselected-icon-color)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:var(--mdc-switch-disabled-selected-icon-opacity)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:var(--mdc-switch-disabled-unselected-icon-opacity)}.mdc-switch.mdc-switch--selected .mdc-switch__icon{width:var(--mdc-switch-selected-icon-size);height:var(--mdc-switch-selected-icon-size)}.mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:var(--mdc-switch-unselected-icon-size);height:var(--mdc-switch-unselected-icon-size)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-hover-state-layer-color)}.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-focus-state-layer-color)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-pressed-state-layer-color)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-hover-state-layer-color)}.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-focus-state-layer-color)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-pressed-state-layer-color)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:var(--mdc-switch-selected-hover-state-layer-opacity)}.mdc-switch.mdc-switch--selected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:var(--mdc-switch-selected-focus-state-layer-opacity)}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:var(--mdc-switch-selected-pressed-state-layer-opacity)}.mdc-switch.mdc-switch--selected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-selected-pressed-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:var(--mdc-switch-unselected-hover-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:var(--mdc-switch-unselected-focus-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity)}.mdc-switch .mdc-switch__ripple{height:var(--mdc-switch-state-layer-size);width:var(--mdc-switch-state-layer-size)}.mdc-switch .mdc-switch__track{height:var(--mdc-switch-track-height)}.mdc-switch:disabled .mdc-switch__track{opacity:var(--mdc-switch-disabled-track-opacity)}.mdc-switch:enabled .mdc-switch__track::after{background:var(--mdc-switch-selected-track-color)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-hover-track-color)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-focus-track-color)}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mdc-switch-selected-pressed-track-color)}.mdc-switch:disabled .mdc-switch__track::after{background:var(--mdc-switch-disabled-selected-track-color)}.mdc-switch:enabled .mdc-switch__track::before{background:var(--mdc-switch-unselected-track-color)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-hover-track-color)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-focus-track-color)}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mdc-switch-unselected-pressed-track-color)}.mdc-switch:disabled .mdc-switch__track::before{background:var(--mdc-switch-disabled-unselected-track-color)}.mdc-switch .mdc-switch__track{border-radius:var(--mdc-switch-track-shape)}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation-shadow)}.mdc-switch:disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation-shadow)}.mat-mdc-slide-toggle{display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle .mdc-switch__ripple::after{content:"";opacity:0}.mat-mdc-slide-toggle .mdc-switch:hover .mdc-switch__ripple::after{opacity:.04;transition:75ms opacity cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mdc-switch .mdc-switch__ripple::after{opacity:.12}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-mdc-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-elevation-overlay,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mdc-switch__handle{transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-switch-hidden-track-opacity);transition:var(--mat-switch-hidden-track-transition)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-switch-visible-track-opacity);transition:var(--mat-switch-visible-track-transition)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-switch-visible-track-opacity);transition:var(--mat-switch-visible-track-transition)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-switch-hidden-track-opacity);transition:var(--mat-switch-hidden-track-transition)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-switch-unselected-handle-size);height:var(--mat-switch-unselected-handle-size)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-switch-selected-handle-size);height:var(--mat-switch-selected-handle-size)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-switch-with-icon-handle-size);height:var(--mat-switch-with-icon-handle-size)}.mat-mdc-slide-toggle:active .mdc-switch:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-switch-pressed-handle-size);height:var(--mat-switch-pressed-handle-size)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{margin:var(--mat-switch-selected-handle-horizontal-margin)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-selected-with-icon-handle-horizontal-margin)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{margin:var(--mat-switch-unselected-handle-horizontal-margin)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-unselected-with-icon-handle-horizontal-margin)}.mat-mdc-slide-toggle:active .mdc-switch--selected:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-selected-pressed-handle-horizontal-margin)}.mat-mdc-slide-toggle:active .mdc-switch--unselected:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-unselected-pressed-handle-horizontal-margin)}.mdc-switch__track::after,.mdc-switch__track::before{border-width:var(--mat-switch-track-outline-width);border-color:var(--mat-switch-track-outline-color)}.mdc-switch--selected .mdc-switch__track::after,.mdc-switch--selected .mdc-switch__track::before{border-width:var(--mat-switch-selected-track-outline-width);border-color:var(--mat-switch-selected-track-outline-color)}.mdc-switch--disabled .mdc-switch__track::after,.mdc-switch--disabled .mdc-switch__track::before{border-width:var(--mat-switch-disabled-unselected-track-outline-width);border-color:var(--mat-switch-disabled-unselected-track-outline-color)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-selected-handle-opacity)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-unselected-handle-opacity)}'],encapsulation:2,changeDetection:0});let i=e;return i})();var Fe=(()=>{let e=class e{};e.\u0275fac=function(c){return new(c||e)},e.\u0275mod=V({type:e}),e.\u0275inj=N({imports:[Te,z,z]});let i=e;return i})();var Le=(()=>{let e=class e{};e.\u0275fac=function(c){return new(c||e)},e.\u0275cmp=u({type:e,selectors:[["app-offline"]],standalone:!0,features:[_],decls:27,vars:0,consts:[[1,"wrapper"],["href","https://gabrielsena.dev"],["href","mailto:hello@gabrielsena.dev"],[1,"useful-links"],["href","https://ai.google.dev/competition/projects/munio"],["href","https://github.com/muniocloud"]],template:function(c,a){c&1&&(d(0,"div",0),l(1,"app-logo"),d(2,"h2"),n(3,"Thank you for using munio!"),o(),d(4,"p"),n(5,`Started as an app to compete in the "Gemini API Developer Competition," Munio was a great tool for understanding how we can use AI to improve our skills. With Munio, I found the opportunity to create a production-ready system from scratch using AI and a lot of useful tools. For financial reasons, I'll disable the Munio back end, but you can self-host anytime! This version of the app will always be free.`),o(),d(6,"p"),n(7,"I received some emails and comments congratulating me on this app, so thank you for your comments. We will be back in the future!"),o(),d(8,"p"),n(9,"Thank you again! Best regards,"),o(),d(10,"p"),n(11,"Gabriel Sena. "),d(12,"a",1),n(13,"(Website)"),o()(),d(14,"p"),n(15,"If you want to contact me, feel free to send an email or start a chat on LinkedIn!"),o(),d(16,"p"),n(17,"Email: "),d(18,"a",2),n(19,"hello@gabrielsena.dev"),o()(),d(20,"div",3)(21,"p")(22,"a",4),n(23,"Submission link"),o()(),d(24,"p")(25,"a",5),n(26,"Munio's github profile"),o()()()())},dependencies:[xe],styles:["[_nghost-%COMP%]{margin:auto;padding:20px}[_nghost-%COMP%]   app-logo[_ngcontent-%COMP%]{width:60px;height:60px}[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;max-width:750px}[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{text-align:justify;width:100%}[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   .useful-links[_ngcontent-%COMP%]{width:100%;display:flex;gap:10px}"]});let i=e;return i})();function Qe(i,e){i&1&&l(0,"app-navbar")(1,"router-outlet")}function We(i,e){i&1&&l(0,"app-offline")}var Ne=(()=>{let e=class e{constructor(){this.title="web-client",this.authService=m(p),this.isOnline=!ye.isOffline}};e.\u0275fac=function(c){return new(c||e)},e.\u0275cmp=u({type:e,selectors:[["app-root"]],standalone:!0,features:[_],decls:2,vars:1,template:function(c,a){c&1&&C(0,Qe,2,0)(1,We,1,0,"app-offline"),c&2&&M(a.isOnline?0:1)},dependencies:[be,Fe,Ee,pe,Le],styles:["[_nghost-%COMP%]{display:flex;height:100%;flex-direction:column}"]});let i=e;return i})();_e(Ne,Oe).catch(i=>console.error(i));