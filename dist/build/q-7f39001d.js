import{a as m,c as b,S as d,r as M,U as l,N as o,O as n,z as i,_ as u,K as h,P as g,b as p}from"./q-48a97820.js";import{M as r,a as c}from"./q-967442c1.js";import{C as v}from"./q-69f75450.js";import{u as y}from"./q-d36f9050.js";import"./q-2e3f1f14.js";const S=({track:e,cleanup:a})=>{const[s,t]=m();if(e(()=>t.storageMessage.message),t.storageMessage.type===r.SUCCESS&&(s.value="bg-emerald-500"),t.storageMessage.type===r.INFO&&(s.value="bg-amber-200"),t.storageMessage.type===r.ERROR&&(s.value="bg-red-500"),t.storageMessage.type===r.LOADING&&(s.value="bg-blue-800"),t.storageMessage.message&&t.storageMessage.requiredTimeout){const f=setInterval(()=>{t.handlerStorageMessage(c)},5e3);a(()=>clearInterval(f))}},O=()=>{const[e]=m();return e.handlerStorageMessage(c)},x=()=>{b();const e=y(),a=d("");return M(i(()=>u(()=>Promise.resolve().then(()=>_),void 0),"s_1buwAjBhHE8",[a,e])),e.storageMessage.message?o("article",null,{class:n(s=>`ticky bottom-4 right-0 left-0 h-10 mx-4 opacity-75 p-4 rounded-sm border-none flex items-center justify-between overflow-hidden ${s.value} `,[a])},[o("p",null,{class:"flex-1"},n(s=>s.storageMessage.message,[e]),3,null),o("button",null,{onClick$:i(()=>u(()=>Promise.resolve().then(()=>_),void 0),"s_09UI2J1AJ1o",[e])},!e.storageMessage.requiredTimeout&&l(v,{width:24,height:24,[g]:{width:g,height:g}},3,"Jf_1"),1,null)],1,"Jf_2"):l(h,null,3,"Jf_0")},_=Object.freeze(Object.defineProperty({__proto__:null,_hW:p,s_09UI2J1AJ1o:O,s_1buwAjBhHE8:S,s_DtloT8dD2Mk:x},Symbol.toStringTag,{value:"Module"}));export{p as _hW,O as s_09UI2J1AJ1o,S as s_1buwAjBhHE8,x as s_DtloT8dD2Mk};
