import{a as n}from"./q-48a97820.js";import{b as m}from"./q-48a97820.js";import{h as c}from"./q-ff3c731a.js";import"./q-f1bc7ac9.js";const p=({track:r})=>{const[s]=n();r(()=>s.data),s.loading=!1,console.log("/*/**/*/*/*/**/*//**/*/ Cambiando a false")},u=async({track:r,cleanup:s})=>{const[o,a]=n();r(()=>a.search);const e=new AbortController;if(s(()=>e.abort()),a.search.length<3)return;a.data&&(a.data.results=[]),a.page=0;const l=`${o}api/characters/${a.page}/${a.search}`,t=await c(l,e);t&&(a.data?a.data={...t.data,results:[...a.data.results,...t.data.results]}:a.data=t.data,a.loading=!1)},h=async({track:r,cleanup:s})=>{const[o,a]=n();r(()=>a.page);const e=new AbortController;s(()=>e.abort());const l=`${o}api/characters/${a.page}/${a.search}`,t=await c(l,e);t&&(a.data?a.data={...t.data,results:[...a.data.results,...t.data.results]}:a.data=t.data)};export{m as _hW,p as s_0wTGOENUC4Q,u as s_39ELvALxrpo,h as s_Cd8jIWg9XtM};
