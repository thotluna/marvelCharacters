import{_ as c,a as H,d as M,e as N,f as W,y as J,w as Q,i as X,C as g,Y as $,S as T,g as _,X as q,U as Y,z as k,x as F,b as K}from"./q-48a97820.js";import{t as A,l as z,h as U,r as B,i as G,j as Z,k as tt,c as et,C as at,d as ot,D as nt,R as st,e as rt,f as it,m as ct}from"./q-f1bc7ac9.js";const lt=":root{view-transition-name:none}";const L=()=>c(()=>import("./q-d5fb05d3.js"),["build/q-d5fb05d3.js","build/q-48a97820.js","build/q-f1bc7ac9.js"]),x=[[/^\/$/,[L,()=>c(()=>import("./q-8006b14c.js"),["build/q-8006b14c.js","build/q-48a97820.js"])]],[/^\/api\/characters(?:\/(.*))?\/comics\/?$/,[L,()=>c(()=>import("./q-c31a0420.js"),[])],["all"]],[/^\/api\/characters(?:\/(.*))?\/?$/,[L,()=>c(()=>import("./q-ddcec355.js"),[])],["all"]],[/^\/characters\/([^/]+?)\/?$/,[L,()=>c(()=>import("./q-b7aae04e.js"),["build/q-b7aae04e.js","build/q-48a97820.js"])],["id"]]],S=[];const V=!0;const ut=async(o,t)=>{const[l,n,a,d]=H();o===void 0?(o=n.value,n.value=""):t&&(n.value="");const i=new URL(o,d.url);if(o=A(i),!(!t&&n.value===o))return n.value=o,z(i,M()),U(x,S,V,i.pathname),l.value=void 0,d.isNavigating=!0,new Promise(s=>{a.r=s})},_t=({track:o})=>{const[t,l,n,a,d,i,s,v,h,r]=H();async function m(){const[R,p]=o(()=>[s.value,t.value]),C=N("");let e,f,D=null,I;{e=new URL(R,location),e.pathname.endsWith("/")||(e.pathname+="/");let w=U(x,S,V,e.pathname);I=M();const P=f=await z(e,I,!0,p);if(!P){s.untrackedValue=A(e);return}const y=P.href,u=new URL(y,e.href);u.pathname!==e.pathname&&(e=u,w=U(x,S,V,e.pathname)),D=await w}if(D){const[w,P,y]=D,u=P,j=u[u.length-1];r.prevUrl=r.url,r.url=e,r.params={...w},s.untrackedValue=A(e);const E=B(f,r,u,C);l.headings=j.headings,l.menu=y,n.value=W(u),a.links=E.links,a.meta=E.meta,a.styles=E.styles,a.title=E.title,a.frontmatter=E.frontmatter;{h.viewTransition!==!1&&(document.__q_view_transition__=!0);const b=f==null?void 0:f.loaders;b&&Object.assign(i,b),G.clear(),Z(window,e,s),r.isNavigating=!1,v.r&&J(I).then(v.r)}}}m()},dt=o=>{Q(k(()=>c(()=>Promise.resolve().then(()=>O),void 0),"s_RPDJAz33WLA"));const t=tt();if(!(t!=null&&t.params))throw new Error("Missing Qwik City Env Data");const l=X("url");if(!l)throw new Error("Missing Qwik URL Env Data");const n=new URL(l),a=g({url:n,params:t.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),d={},i=$(g(t.response.loaders,{deep:!1})),s=T(A(n)),v=g(et),h=g({headings:void 0,menu:void 0}),r=T(),m=t.response.action,R=m?t.response.loaders[m]:void 0,p=T(R?{id:m,data:t.response.formData,output:{result:R,status:t.response.status}}:void 0),C=k(()=>c(()=>Promise.resolve().then(()=>O),void 0),"s_fX0bDjeJa0E",[p,s,d,a]);return _(at,h),_(ot,r),_(nt,v),_(st,a),_(rt,C),_(it,i),_(ct,p),q(k(()=>c(()=>Promise.resolve().then(()=>O),void 0),"s_02wMImzEAbk",[p,h,r,v,t,i,s,d,o,a])),Y(F,null,3,"qY_0")},O=Object.freeze(Object.defineProperty({__proto__:null,_hW:K,s_02wMImzEAbk:_t,s_RPDJAz33WLA:lt,s_TxCFOy819ag:dt,s_fX0bDjeJa0E:ut},Symbol.toStringTag,{value:"Module"}));export{K as _hW,_t as s_02wMImzEAbk,lt as s_RPDJAz33WLA,dt as s_TxCFOy819ag,ut as s_fX0bDjeJa0E};