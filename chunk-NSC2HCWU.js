import{a as Ge,d as Re,e as Te}from"./chunk-ZCXLAYHD.js";import{m as Pe,r as ke}from"./chunk-RLCKPOAB.js";import{Ba as G,Ca as we,Da as Se,Ea as Ie,Ga as E,Ha as g,Ia as te,J as N,Ja as xe,K as O,L as _e,M as Z,N as v,Qa as Ne,S as ve,Sa as Oe,T as X,U as h,X as Y,Y as ye,Z as Ce,_ as Ve,a as l,aa as A,b as d,d as fe,da as K,ea as p,fa as o,ga as J,ha as f,ia as y,j as pe,ja as De,ka as P,la as Q,ma as be,n as me,na as Ae,oa as Me,p as ge,pa as u,qa as c,ra as k,sa as M,ta as ee,xa as m,ya as Ee,za as Fe}from"./chunk-5RRJT77T.js";var ze=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(o(J),o(K))}}static{this.\u0275dir=h({type:i})}}return i})(),_t=(()=>{class i extends ze{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Ve(i)))(r||i)}})()}static{this.\u0275dir=h({type:i,features:[y]})}}return i})(),Ze=new v("");var vt={provide:Ze,useExisting:O(()=>q),multi:!0};function yt(){let i=te()?te().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Ct=new v(""),q=(()=>{class i extends ze{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!yt())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(o(J),o(K),o(Ct,8))}}static{this.\u0275dir=h({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&M("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},features:[G([vt]),y]})}}return i})();var Xe=new v(""),Ye=new v("");function Ke(i){return i!=null}function Je(i){return Ie(i)?pe(i):i}function Qe(i){let e={};return i.forEach(t=>{e=t!=null?l(l({},e),t):e}),Object.keys(e).length===0?null:e}function et(i,e){return e.map(t=>t(i))}function Vt(i){return!i.validate}function tt(i){return i.map(e=>Vt(e)?e:t=>e.validate(t))}function Dt(i){if(!i)return null;let e=i.filter(Ke);return e.length==0?null:function(t){return Qe(et(t,e))}}function it(i){return i!=null?Dt(tt(i)):null}function bt(i){if(!i)return null;let e=i.filter(Ke);return e.length==0?null:function(t){let n=et(t,e).map(Je);return ge(n).pipe(me(Qe))}}function nt(i){return i!=null?bt(tt(i)):null}function je(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function rt(i){return i._rawValidators}function st(i){return i._rawAsyncValidators}function ie(i){return i?Array.isArray(i)?i:[i]:[]}function j(i,e){return Array.isArray(i)?i.includes(e):i===e}function Be(i,e){let t=ie(e);return ie(i).forEach(r=>{j(t,r)||t.push(r)}),t}function Ue(i,e){return ie(e).filter(t=>!j(i,t))}var B=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=it(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=nt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},D=class extends B{get formDirective(){return null}get path(){return null}},x=class extends B{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},U=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},At={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},_i=d(l({},At),{"[class.ng-submitted]":"isSubmitted"}),ot=(()=>{class i extends U{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(x,2))}}static{this.\u0275dir=h({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&Q("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[y]})}}return i})(),at=(()=>{class i extends U{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(D,10))}}static{this.\u0275dir=h({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&Q("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[y]})}}return i})();var F="VALID",R="INVALID",C="PENDING",w="DISABLED",_=class{},H=class extends _{constructor(e,t){super(),this.value=e,this.source=t}},S=class extends _{constructor(e,t){super(),this.pristine=e,this.source=t}},I=class extends _{constructor(e,t){super(),this.touched=e,this.source=t}},V=class extends _{constructor(e,t){super(),this.status=e,this.source=t}},ne=class extends _{constructor(e){super(),this.source=e}},re=class extends _{constructor(e){super(),this.source=e}};function ae(i){return(z(i)?i.validators:i)||null}function Mt(i){return Array.isArray(i)?it(i):i||null}function le(i,e){return(z(e)?e.asyncValidators:i)||null}function Et(i){return Array.isArray(i)?nt(i):i||null}function z(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function lt(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new N(1e3,"");if(!n[t])throw new N(1001,"")}function ut(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new N(1002,"")})}var b=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=E(()=>this.statusReactive()),this.statusReactive=f(void 0),this._pristine=E(()=>this.pristineReactive()),this.pristineReactive=f(!0),this._touched=E(()=>this.touchedReactive()),this.touchedReactive=f(!1),this._events=new fe,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return g(this.statusReactive)}set status(e){g(()=>this.statusReactive.set(e))}get valid(){return this.status===F}get invalid(){return this.status===R}get pending(){return this.status==C}get disabled(){return this.status===w}get enabled(){return this.status!==w}get pristine(){return g(this.pristineReactive)}set pristine(e){g(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return g(this.touchedReactive)}set touched(e){g(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Be(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Be(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ue(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ue(e,this._rawAsyncValidators))}hasValidator(e){return j(this._rawValidators,e)}hasAsyncValidator(e){return j(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(d(l({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new I(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new I(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(d(l({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new S(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new S(!0,n))}markAsPending(e={}){this.status=C;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new V(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(d(l({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=w,this.errors=null,this._forEachChild(r=>{r.disable(d(l({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new H(this.value,n)),this._events.next(new V(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(d(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=F,this._forEachChild(n=>{n.enable(d(l({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(d(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===C)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new H(this.value,t)),this._events.next(new V(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(d(l({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?w:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=Je(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new V(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new A,this.statusChanges=new A}_calculateStatus(){return this._allControlsDisabled()?w:this.errors?R:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(R)?R:F}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new S(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new I(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Mt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Et(this._rawAsyncValidators)}},L=class extends b{constructor(e,t,n){super(ae(t),le(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){ut(this,!0,e),Object.keys(e).forEach(n=>{lt(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,s)=>{n=t(n,r,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var se=class extends L{};var ct=new v("CallSetDisabledState",{providedIn:"root",factory:()=>ue}),ue="always";function Ft(i,e){return[...e.path,i]}function He(i,e,t=ue){ce(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),St(i,e),xt(i,e),It(i,e),wt(i,e)}function Le(i,e,t=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),W(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function $(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function wt(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function ce(i,e){let t=rt(i);e.validator!==null?i.setValidators(je(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=st(i);e.asyncValidator!==null?i.setAsyncValidators(je(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();$(e._rawValidators,r),$(e._rawAsyncValidators,r)}function W(i,e){let t=!1;if(i!==null){if(e.validator!==null){let r=rt(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.validator);s.length!==r.length&&(t=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let r=st(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.asyncValidator);s.length!==r.length&&(t=!0,i.setAsyncValidators(s))}}}let n=()=>{};return $(e._rawValidators,n),$(e._rawAsyncValidators,n),t}function St(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&dt(i,e)})}function It(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&dt(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function dt(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function xt(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Nt(i,e){i==null,ce(i,e)}function Ot(i,e){return W(i,e)}function Pt(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function kt(i){return Object.getPrototypeOf(i.constructor)===_t}function Gt(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Rt(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===q?t=s:kt(s)?n=s:r=s}),r||n||t||null}function Tt(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function $e(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function We(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var T=class extends b{constructor(e=null,t,n){super(ae(t),le(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),z(t)&&(t.nonNullable||t.initialValueIsDefault)&&(We(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){$e(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){$e(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){We(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var jt=i=>i instanceof T;var ht=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=h({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var ft=new v("");var Bt={provide:D,useExisting:O(()=>de)},de=(()=>{class i extends D{get submitted(){return g(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}constructor(t,n,r){super(),this.callSetDisabledState=r,this._submitted=E(()=>this._submittedReactive()),this._submittedReactive=f(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new A,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(W(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return He(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){Le(t.control||null,t,!1),Tt(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this._submittedReactive.set(!0),Gt(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new ne(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new re(this.form))}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,r=this.form.get(t.path);n!==r&&(Le(n||null,t),jt(r)&&(He(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);Nt(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&Ot(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ce(this.form,this),this._oldForm&&W(this._oldForm,this)}_checkFormPresent(){this.form}static{this.\u0275fac=function(n){return new(n||i)(o(Xe,10),o(Ye,10),o(ct,8))}}static{this.\u0275dir=h({type:i,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&M("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[G([Bt]),y,Y]})}}return i})();var Ut={provide:x,useExisting:O(()=>he)},he=(()=>{class i extends x{set isDisabled(t){}static{this._ngModelWarningSentOnce=!1}constructor(t,n,r,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new A,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Rt(this,s)}ngOnChanges(t){this._added||this._setUpControl(),Pt(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Ft(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(n){return new(n||i)(o(D,13),o(Xe,10),o(Ye,10),o(Ze,10),o(ft,8))}}static{this.\u0275dir=h({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[G([Ut]),y,Y]})}}return i})();var Ht=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=X({type:i})}static{this.\u0275inj=Z({})}}return i})(),oe=class extends b{constructor(e,t,n){super(ae(t),le(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,n={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(e,t={}){let n=this._adjustIndex(e);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,n={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),t&&(this.controls.splice(r,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){ut(this,!1,e),e.forEach((n,r)=>{lt(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(e.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((n,r)=>{n.reset(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,n)=>n._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,n)=>{e(t,n)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function qe(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var pt=(()=>{class i{constructor(){this.useNonNullable=!1}get nonNullable(){let t=new i;return t.useNonNullable=!0,t}group(t,n=null){let r=this._reduceControls(t),s={};return qe(n)?s=n:n!==null&&(s.validators=n.validator,s.asyncValidators=n.asyncValidator),new L(r,s)}record(t,n=null){let r=this._reduceControls(t);return new se(r,n)}control(t,n,r){let s={};return this.useNonNullable?(qe(n)?s=n:(s.validators=n,s.asyncValidators=r),new T(t,d(l({},s),{nonNullable:!0}))):new T(t,n,r)}array(t,n,r){let s=t.map(a=>this._createControl(a));return new oe(s,n,r)}_reduceControls(t){let n={};return Object.keys(t).forEach(r=>{n[r]=this._createControl(t[r])}),n}_createControl(t){if(t instanceof T)return t;if(t instanceof b)return t;if(Array.isArray(t)){let n=t[0],r=t.length>1?t[1]:null,s=t.length>2?t[2]:null;return this.control(n,r,s)}else return this.control(t)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=_e({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var mt=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:ft,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:ct,useValue:t.callSetDisabledState??ue}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=X({type:i})}static{this.\u0275inj=Z({imports:[Ht]})}}return i})();var $t=(i,e)=>e.id,Wt=(i,e)=>["/github-repository-analytics/",i,e];function qt(i,e){i&1&&(u(0,"div"),m(1,"Loading..."),c())}function zt(i,e){if(i&1&&(u(0,"div"),m(1),c()),i&2){let t=ee();p(),Ee(t.error())}}function Zt(i,e){if(i&1&&(u(0,"tr")(1,"td",15),m(2),c(),u(3,"td",16)(4,"a",17),m(5," Details "),c()()()),i&2){let t=e.$implicit;p(2),Fe(" ",t.full_name," "),p(2),P("routerLink",Se(2,Wt,t.owner.login,t.name))}}function Xt(i,e){if(i&1&&(u(0,"div",10)(1,"table",11)(2,"thead")(3,"tr")(4,"th",12),m(5," Name "),c(),k(6,"th",13),c()(),u(7,"tbody",14),Ae(8,Zt,6,5,"tr",null,$t),c()()()),i&2){let t=ee();p(8),Me(t.repositories())}}var Si=(()=>{class i{constructor(t,n){this.fb=t,this.store=n,this.repositories=f([]),this.isLoading=f(!1),this.error=f(null),this.searchForm=this.fb.nonNullable.group({query:[""]}),this.subscriptions=[this.store.select(Ge).subscribe(r=>this.repositories.set(r)),this.store.select(Re).subscribe(r=>this.isLoading.set(r)),this.store.select(Te).subscribe(r=>this.error.set(r))]}searchRepositories(){let t=this.searchForm.controls.query.value.trim();this.store.dispatch(ke({query:t}))}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}static{this.\u0275fac=function(n){return new(n||i)(o(pt),o(Pe))}}static{this.\u0275cmp=ve({type:i,selectors:[["app-search-github-repositories"]],standalone:!0,features:[we],decls:16,vars:3,consts:[[1,"p-4"],[3,"ngSubmit","formGroup"],[1,"relative","w-1/2"],["for","query",1,"sr-only"],["type","text","id","query","formControlName","query","placeholder","Search GitHub repositories",1,"w-full","rounded-md","border-gray-200","py-2.5","pe-10","shadow-sm","sm:text-sm"],[1,"absolute","inset-y-0","end-0","grid","w-10","place-content-center"],["type","submit",1,"text-gray-600","hover:text-gray-700",3,"disabled"],[1,"sr-only"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"size-4"],["stroke-linecap","round","stroke-linejoin","round","d","M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"],[1,"overflow-x-auto"],[1,"min-w-fit","divide-y-2","divide-gray-200","bg-white","text-sm"],[1,"whitespace-nowrap","px-4","py-2","text-left","font-medium","text-gray-900"],[1,"px-4","py-2"],[1,"divide-y","divide-gray-200"],[1,"whitespace-nowrap","px-4","py-2","font-medium","text-gray-900"],[1,"whitespace-nowrap","px-4","py-2"],[1,"inline-block","rounded","bg-indigo-600","px-4","py-2","text-xs","font-medium","text-white","hover:bg-indigo-700",3,"routerLink"]],template:function(n,r){n&1&&(u(0,"div",0)(1,"form",1),M("ngSubmit",function(){return r.searchRepositories()}),u(2,"div",2)(3,"label",3),m(4,"Search"),c(),k(5,"input",4),u(6,"span",5)(7,"button",6)(8,"span",7),m(9,"Search"),c(),ye(),u(10,"svg",8),k(11,"path",9),c()()()()()(),Ce(),u(12,"div",0),De(13,qt,2,0,"div")(14,zt,2,1,"div")(15,Xt,10,0,"div",10),c()),n&2&&(p(),P("formGroup",r.searchForm),p(6),P("disabled",r.isLoading()||r.searchForm.invalid),p(6),be(r.isLoading()?13:r.error()?14:r.repositories().length?15:-1))},dependencies:[xe,mt,ht,q,ot,at,de,he,Oe,Ne],encapsulation:2})}}return i})();export{Si as SearchGithubRepositoriesComponent};
