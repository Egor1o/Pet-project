(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors~pages/account-settings~pages/brand-dashboard~pages/brand-studio~pages/bring-your-own-logo/in~825a9f64"],{707:function(e,t,i){"use strict";i.d(t,"a",(function(){return v})),i.d(t,"b",(function(){return q})),i.d(t,"c",(function(){return S})),i.d(t,"d",(function(){return E})),i.d(t,"e",(function(){return w}));var r=i(22),n=i(44),a=".".charCodeAt(0),u=/\\(\\)?/g,s=RegExp("[^.[\\]]+|\\[(?:([^\"'][^[]*)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))","g"),o={},d=function(e){if(null==e||!e.length)return[];if("string"!=typeof e)throw new Error("toPath() expects a string");var t,i;return null==o[e]&&(o[e]=(i=[],(t=e).charCodeAt(0)===a&&i.push(""),t.replace(s,(function(e,t,r,n){var a=e;r?a=n.replace(u,"$1"):t&&(a=t.trim()),i.push(a)})),i)),o[e]},l=function(e,t){for(var i=d(t),r=e,n=0;n<i.length;n++){var a=i[n];if(null==r||"object"!=typeof r||Array.isArray(r)&&isNaN(a))return;r=r[a]}return r};function f(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}var c=function(e,t,i,a){if(void 0===a&&(a=!1),null==e)throw new Error("Cannot call setIn() with "+String(e)+" state");if(null==t)throw new Error("Cannot call setIn() with "+String(t)+" key");return function e(t,i,a,u,s){if(i>=a.length)return u;var o=a[i];if(isNaN(o)){var d;if(null==t){var l,c=e(void 0,i+1,a,u,s);return void 0===c?void 0:((l={})[o]=c,l)}if(Array.isArray(t))throw new Error("Cannot set a non-numeric property on an array");var v=e(t[o],i+1,a,u,s);if(void 0===v){var b=Object.keys(t).length;if(void 0===t[o]&&0===b)return;return void 0!==t[o]&&b<=1?isNaN(a[i-1])||s?void 0:{}:(t[o],Object(n.a)(t,[o].map(f)))}return Object(r.a)({},t,((d={})[o]=v,d))}var m=Number(o);if(null==t){var S=e(void 0,i+1,a,u,s);if(void 0===S)return;var h=[];return h[m]=S,h}if(!Array.isArray(t))throw new Error("Cannot set a numeric property on an object");var g=e(t[m],i+1,a,u,s),y=[].concat(t);if(s&&void 0===g){if(y.splice(m,1),0===y.length)return}else y[m]=g;return y}(e,0,d(t),i,a)},v="FINAL_FORM/form-error",b="FINAL_FORM/array-error";function m(e,t){var i=e.errors,r=e.initialValues,n=e.lastSubmittedValues,a=e.submitErrors,u=e.submitFailed,s=e.submitSucceeded,o=e.submitting,d=e.values,f=t.active,c=t.blur,v=t.change,m=t.data,S=t.focus,h=t.modified,g=t.modifiedSinceLastSubmit,y=t.name,p=t.touched,E=t.validating,O=t.visited,j=l(d,y),F=l(i,y);F&&F[b]&&(F=F[b]);var V=a&&l(a,y),w=r&&l(r,y),k=t.isEqual(w,j),L=!F&&!V;return{active:f,blur:c,change:v,data:m,dirty:!k,dirtySinceLastSubmit:!(!n||t.isEqual(l(n,y),j)),error:F,focus:S,initial:w,invalid:!L,length:Array.isArray(j)?j.length:void 0,modified:h,modifiedSinceLastSubmit:g,name:y,pristine:k,submitError:V,submitFailed:u,submitSucceeded:s,submitting:o,touched:p,valid:L,value:j,visited:O,validating:E}}var S=["active","data","dirty","dirtySinceLastSubmit","error","initial","invalid","length","modified","modifiedSinceLastSubmit","pristine","submitError","submitFailed","submitSucceeded","submitting","touched","valid","value","visited","validating"],h=function(e,t){if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),r=Object.keys(t);if(i.length!==r.length)return!1;for(var n=Object.prototype.hasOwnProperty.bind(t),a=0;a<i.length;a++){var u=i[a];if(!n(u)||e[u]!==t[u])return!1}return!0};function g(e,t,i,r,n,a){var u=!1;return n.forEach((function(n){r[n]&&(e[n]=t[n],i&&(~a.indexOf(n)?h(t[n],i[n]):t[n]===i[n])||(u=!0))})),u}var y=["data"],p=function(e,t,i,r){var n={blur:e.blur,change:e.change,focus:e.focus,name:e.name};return g(n,e,t,i,S,y)||!t||r?n:void 0},E=["active","dirty","dirtyFields","dirtyFieldsSinceLastSubmit","dirtySinceLastSubmit","error","errors","hasSubmitErrors","hasValidationErrors","initialValues","invalid","modified","modifiedSinceLastSubmit","pristine","submitting","submitError","submitErrors","submitFailed","submitSucceeded","touched","valid","validating","values","visited"],O=["touched","visited"];function j(e,t,i,r){var n={};return g(n,e,t,i,E,O)||!t||r?n:void 0}var F=function(e){var t,i;return function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t&&n.length===t.length&&!n.some((function(e,i){return!h(t[i],e)}))||(t=n,i=e.apply(void 0,n)),i}},V=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},w="4.20.6",k=function(e,t){return e===t},L=function e(t){return Object.keys(t).some((function(i){var r=t[i];return!r||"object"!=typeof r||r instanceof Error?void 0!==r:e(r)}))};function N(e,t,i,r,n,a){var u=n(i,r,t,a);return!!u&&(e(u),!0)}function A(e,t,i,r,n){var a=e.entries;Object.keys(a).forEach((function(e){var u=a[Number(e)];if(u){var s=u.subscription,o=u.subscriber,d=u.notified;N(o,s,t,i,r,n||!d)&&(u.notified=!0)}}))}function q(e){if(!e)throw new Error("No config specified");var t=e.debug,i=e.destroyOnUnregister,n=e.keepDirtyOnReinitialize,a=e.initialValues,u=e.mutators,s=e.onSubmit,o=e.validate,d=e.validateOnBlur;if(!s)throw new Error("No onSubmit function specified");var f={subscribers:{index:0,entries:{}},fieldSubscribers:{},fields:{},formState:{asyncErrors:{},dirtySinceLastSubmit:!1,modifiedSinceLastSubmit:!1,errors:{},initialValues:a&&Object(r.a)({},a),invalid:!1,pristine:!0,submitting:!1,submitFailed:!1,submitSucceeded:!1,resetWhileSubmitting:!1,valid:!0,validating:0,values:a?Object(r.a)({},a):{}},lastFormState:void 0},S=0,g=!1,y=!1,E=!1,O=0,w={},q=function(e,t,i){var r=i(l(e.formState.values,t));e.formState.values=c(e.formState.values,t,r)||{}},P=function(e,t,i){if(e.fields[t]){var n,a;e.fields=Object(r.a)({},e.fields,((n={})[i]=Object(r.a)({},e.fields[t],{name:i,blur:function(){return $.blur(i)},change:function(e){return $.change(i,e)},focus:function(){return $.focus(i)},lastFieldState:void 0}),n)),delete e.fields[t],e.fieldSubscribers=Object(r.a)({},e.fieldSubscribers,((a={})[i]=e.fieldSubscribers[t],a)),delete e.fieldSubscribers[t];var u=l(e.formState.values,t);e.formState.values=c(e.formState.values,t,void 0)||{},e.formState.values=c(e.formState.values,i,u),delete e.lastFormState}},x=function(e){return function(){if(u){for(var t={formState:f.formState,fields:f.fields,fieldSubscribers:f.fieldSubscribers,lastFormState:f.lastFormState},i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];var a=u[e](r,t,{changeValue:q,getIn:l,renameField:P,resetFieldState:$.resetFieldState,setIn:c,shallowEqual:h});return f.formState=t.formState,f.fields=t.fields,f.fieldSubscribers=t.fieldSubscribers,f.lastFormState=t.lastFormState,R(void 0,(function(){z(),J()})),a}}},C=u?Object.keys(u).reduce((function(e,t){return e[t]=x(t),e}),{}):{},I=function(e){return Object.keys(e.validators).reduce((function(t,i){var r=e.validators[Number(i)]();return r&&t.push(r),t}),[])},R=function(e,t){if(g)return y=!0,void t();var i=f.fields,n=f.formState,a=Object(r.a)({},i),u=Object.keys(a);if(o||u.some((function(e){return I(a[e]).length}))){var s=!1;if(e){var d=a[e];if(d){var S=d.validateFields;S&&(s=!0,u=S.length?S.concat(e):[e])}}var p,E={},j={},F={},k=[].concat(function(e){var t=[];if(o){var i=o(Object(r.a)({},f.formState.values));V(i)?t.push(i.then((function(t){return e(t,!0)}))):e(i,!1)}return t}((function(e,t){t?j=e||{}:E=e||{}})),u.reduce((function(e,t){return e.concat(function(e,t){var i,r=[],n=I(e);n.length&&(n.forEach((function(n){var a=n(l(f.formState.values,e.name),f.formState.values,0===n.length||3===n.length?m(f.formState,f.fields[e.name]):void 0);if(a&&V(a)){e.validating=!0;var u=a.then((function(i){f.fields[e.name]&&(f.fields[e.name].validating=!1,t(i))}));r.push(u)}else i||(i=a)})),t(i));return r}(i[t],(function(e){F[t]=e})))}),[])),L=k.length>0,N=++O,A=Promise.all(k).then((p=N,function(e){return delete w[p],e}));L&&(w[N]=A);var q=function(e){var t=Object(r.a)({},s?n.errors:{},E,e?j:n.asyncErrors),d=function(e){u.forEach((function(r){if(i[r]){var n=l(E,r),u=l(t,r),d=I(a[r]).length,f=F[r];e(r,d&&f||o&&n||(n||s?void 0:u))}}))};d((function(e,i){t=c(t,e,i)||{}})),d((function(e,i){if(i&&i[b]){var r=l(t,e),n=[].concat(r);n[b]=i[b],t=c(t,e,n)}})),h(n.errors,t)||(n.errors=t),e&&(n.asyncErrors=j),n.error=E[v]};if(L&&(f.formState.validating++,t()),q(!1),t(),L){var P=function(){f.formState.validating--,t()};A.then((function(){O>N||q(!0)})).then(P,P)}}else t()},z=function(e){if(!S){var t=f.fields,i=f.fieldSubscribers,n=f.formState,a=Object(r.a)({},t),u=function(e){var t=a[e],r=m(n,t),u=t.lastFieldState;t.lastFieldState=r;var s=i[e];s&&A(s,r,u,p,void 0===u)};e?u(e):Object.keys(a).forEach(u)}},U=function(){Object.keys(f.fields).forEach((function(e){f.fields[e].touched=!0}))},W=function(){var e=f.fields,t=f.formState,i=f.lastFormState,n=Object(r.a)({},e),a=Object.keys(n),u=!1,s=a.reduce((function(e,i){return!n[i].isEqual(l(t.values,i),l(t.initialValues||{},i))&&(u=!0,e[i]=!0),e}),{}),o=a.reduce((function(e,i){var r=t.lastSubmittedValues||{};return n[i].isEqual(l(t.values,i),l(r,i))||(e[i]=!0),e}),{});t.pristine=!u,t.dirtySinceLastSubmit=!(!t.lastSubmittedValues||!Object.values(o).some((function(e){return e}))),t.modifiedSinceLastSubmit=!(!t.lastSubmittedValues||!Object.keys(n).some((function(e){return n[e].modifiedSinceLastSubmit}))),t.valid=!(t.error||t.submitError||L(t.errors)||t.submitErrors&&L(t.submitErrors));var d=function(e){var t=e.active,i=e.dirtySinceLastSubmit,r=e.modifiedSinceLastSubmit,n=e.error,a=e.errors,u=e.initialValues,s=e.pristine,o=e.submitting,d=e.submitFailed,l=e.submitSucceeded,f=e.submitError,c=e.submitErrors,v=e.valid,b=e.validating,m=e.values;return{active:t,dirty:!s,dirtySinceLastSubmit:i,modifiedSinceLastSubmit:r,error:n,errors:a,hasSubmitErrors:!!(f||c&&L(c)),hasValidationErrors:!(!n&&!L(a)),invalid:!v,initialValues:u,pristine:s,submitting:o,submitFailed:d,submitSucceeded:l,submitError:f,submitErrors:c,valid:v,validating:b>0,values:m}}(t),c=a.reduce((function(e,t){return e.modified[t]=n[t].modified,e.touched[t]=n[t].touched,e.visited[t]=n[t].visited,e}),{modified:{},touched:{},visited:{}}),v=c.modified,b=c.touched,m=c.visited;return d.dirtyFields=i&&h(i.dirtyFields,s)?i.dirtyFields:s,d.dirtyFieldsSinceLastSubmit=i&&h(i.dirtyFieldsSinceLastSubmit,o)?i.dirtyFieldsSinceLastSubmit:o,d.modified=i&&h(i.modified,v)?i.modified:v,d.touched=i&&h(i.touched,b)?i.touched:b,d.visited=i&&h(i.visited,m)?i.visited:m,i&&h(i,d)?i:d},B=!1,D=!1,J=function e(){if(B)D=!0;else{if(B=!0,t&&t(W(),Object.keys(f.fields).reduce((function(e,t){return e[t]=f.fields[t],e}),{})),!(S||g&&E)){var i=f.lastFormState,r=W();r!==i&&(f.lastFormState=r,A(f.subscribers,r,i,j))}B=!1,D&&(D=!1,e())}},M=function(){return Object.keys(f.fields).forEach((function(e){return f.fields[e].modifiedSinceLastSubmit=!1}))};R(void 0,(function(){J()}));var $={batch:function(e){S++,e(),S--,z(),J()},blur:function(e){var t=f.fields,i=f.formState,n=t[e];n&&(delete i.active,t[e]=Object(r.a)({},n,{active:!1,touched:!0}),d?R(e,(function(){z(),J()})):(z(),J()))},change:function(e,t){var i=f.fields,n=f.formState;if(l(n.values,e)!==t){q(f,e,(function(){return t}));var a=i[e];a&&(i[e]=Object(r.a)({},a,{modified:!0,modifiedSinceLastSubmit:!!n.lastSubmittedValues})),d?(z(),J()):R(e,(function(){z(),J()}))}},get destroyOnUnregister(){return!!i},set destroyOnUnregister(e){i=e},focus:function(e){var t=f.fields[e];t&&!t.active&&(f.formState.active=e,t.active=!0,t.visited=!0,z(),J())},mutators:C,getFieldState:function(e){var t=f.fields[e];return t&&t.lastFieldState},getRegisteredFields:function(){return Object.keys(f.fields)},getState:function(){return W()},initialize:function(e){var t=f.fields,i=f.formState,a=Object(r.a)({},t),u="function"==typeof e?e(i.values):e;n||(i.values=u);var s=n?Object.keys(a).reduce((function(e,t){return a[t].isEqual(l(i.values,t),l(i.initialValues||{},t))||(e[t]=l(i.values,t)),e}),{}):{};i.initialValues=u,i.values=u,Object.keys(s).forEach((function(e){i.values=c(i.values,e,s[e])})),R(void 0,(function(){z(),J()}))},isValidationPaused:function(){return g},pauseValidation:function(e){void 0===e&&(e=!0),g=!0,E=e},registerField:function(e,t,r,n){void 0===r&&(r={}),f.fieldSubscribers[e]||(f.fieldSubscribers[e]={index:0,entries:{}});var a=f.fieldSubscribers[e].index++;f.fieldSubscribers[e].entries[a]={subscriber:F(t),subscription:r,notified:!1},f.fields[e]||(f.fields[e]={active:!1,afterSubmit:n&&n.afterSubmit,beforeSubmit:n&&n.beforeSubmit,blur:function(){return $.blur(e)},change:function(t){return $.change(e,t)},data:n&&n.data||{},focus:function(){return $.focus(e)},isEqual:n&&n.isEqual||k,lastFieldState:void 0,modified:!1,modifiedSinceLastSubmit:!1,name:e,touched:!1,valid:!0,validateFields:n&&n.validateFields,validators:{},validating:!1,visited:!1});var u=!1,s=n&&n.silent,o=function(){s?z(e):(J(),z())};if(n){u=!(!n.getValidator||!n.getValidator()),n.getValidator&&(f.fields[e].validators[a]=n.getValidator);var d=void 0===l(f.formState.values,e);void 0===n.initialValue||!d&&l(f.formState.values,e)!==l(f.formState.initialValues,e)||(f.formState.initialValues=c(f.formState.initialValues||{},e,n.initialValue),f.formState.values=c(f.formState.values,e,n.initialValue),R(void 0,o)),void 0!==n.defaultValue&&void 0===n.initialValue&&void 0===l(f.formState.initialValues,e)&&d&&(f.formState.values=c(f.formState.values,e,n.defaultValue))}return u?R(void 0,o):o(),function(){var t=!1;f.fields[e]&&(t=!(!f.fields[e].validators[a]||!f.fields[e].validators[a]()),delete f.fields[e].validators[a]);var r=!!f.fieldSubscribers[e];r&&delete f.fieldSubscribers[e].entries[a];var n=r&&!Object.keys(f.fieldSubscribers[e].entries).length;n&&(delete f.fieldSubscribers[e],delete f.fields[e],t&&(f.formState.errors=c(f.formState.errors,e,void 0)||{}),i&&(f.formState.values=c(f.formState.values,e,void 0,!0)||{})),s||(t?R(void 0,(function(){J(),z()})):n&&J())}},reset:function(e){void 0===e&&(e=f.formState.initialValues),f.formState.submitting&&(f.formState.resetWhileSubmitting=!0),f.formState.submitFailed=!1,f.formState.submitSucceeded=!1,delete f.formState.submitError,delete f.formState.submitErrors,delete f.formState.lastSubmittedValues,$.initialize(e||{})},resetFieldState:function(e){f.fields[e]=Object(r.a)({},f.fields[e],{active:!1,lastFieldState:void 0,modified:!1,touched:!1,valid:!0,validating:!1,visited:!1}),R(void 0,(function(){z(),J()}))},restart:function(e){void 0===e&&(e=f.formState.initialValues),$.batch((function(){for(var t in f.fields)$.resetFieldState(t),f.fields[t]=Object(r.a)({},f.fields[t],{active:!1,lastFieldState:void 0,modified:!1,modifiedSinceLastSubmit:!1,touched:!1,valid:!0,validating:!1,visited:!1});$.reset(e)}))},resumeValidation:function(){g=!1,E=!1,y&&R(void 0,(function(){z(),J()})),y=!1},setConfig:function(e,r){switch(e){case"debug":t=r;break;case"destroyOnUnregister":i=r;break;case"initialValues":$.initialize(r);break;case"keepDirtyOnReinitialize":n=r;break;case"mutators":u=r,r?(Object.keys(C).forEach((function(e){e in r||delete C[e]})),Object.keys(r).forEach((function(e){C[e]=x(e)}))):Object.keys(C).forEach((function(e){delete C[e]}));break;case"onSubmit":s=r;break;case"validate":o=r,R(void 0,(function(){z(),J()}));break;case"validateOnBlur":d=r;break;default:throw new Error("Unrecognised option "+e)}},submit:function(){var e=f.formState;if(!e.submitting){if(delete e.submitErrors,delete e.submitError,e.lastSubmittedValues=Object(r.a)({},e.values),f.formState.error||L(f.formState.errors))return U(),M(),f.formState.submitFailed=!0,J(),void z();var t=Object.keys(w);if(t.length)Promise.all(t.map((function(e){return w[Number(e)]}))).then($.submit,console.error);else if(!Object.keys(f.fields).some((function(e){return f.fields[e].beforeSubmit&&!1===f.fields[e].beforeSubmit()}))){var i,n=!1,a=function(t){e.submitting=!1;var r=e.resetWhileSubmitting;return r&&(e.resetWhileSubmitting=!1),t&&L(t)?(e.submitFailed=!0,e.submitSucceeded=!1,e.submitErrors=t,e.submitError=t[v],U()):(r||(e.submitFailed=!1,e.submitSucceeded=!0),Object.keys(f.fields).forEach((function(e){return f.fields[e].afterSubmit&&f.fields[e].afterSubmit()}))),J(),z(),n=!0,i&&i(t),t};e.submitting=!0,e.submitFailed=!1,e.submitSucceeded=!1,e.lastSubmittedValues=Object(r.a)({},e.values),M();var u=s(e.values,$,a);if(!n){if(u&&V(u))return J(),z(),u.then(a,(function(e){throw a(),e}));if(s.length>=3)return J(),z(),new Promise((function(e){i=e}));a(u)}}}},subscribe:function(e,t){if(!e)throw new Error("No callback given.");if(!t)throw new Error("No subscription provided. What values do you want to listen to?");var i=F(e),r=f.subscribers,n=r.index++;r.entries[n]={subscriber:i,subscription:t,notified:!1};var a=W();return N(i,t,a,a,j,!0),function(){delete r.entries[n]}}};return $}}}]);
//# sourceMappingURL=in~825a9f64.4bcaaa32dbc1439387b3.looka.js.map