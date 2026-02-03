import{r as m,c as ke,j as s,H as Ne}from"./app-BfzvRhAi.js";import{N as _e,A as Ee}from"./NavBar-BqwyxfXU.js";import{m as Y}from"./proxy-CQXJ--WW.js";/* empty css            */let $e={data:""},Ce=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||$e},Se=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ae=/\/\*[^]*?\*\/|  +/g,ce=/\n+/g,w=(e,t)=>{let a="",l="",c="";for(let o in e){let i=e[o];o[0]=="@"?o[1]=="i"?a=o+" "+i+";":l+=o[1]=="f"?w(i,o):o+"{"+w(i,o[1]=="k"?"":t)+"}":typeof i=="object"?l+=w(i,t?t.replace(/([^,])+/g,r=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,n=>/&/.test(n)?n.replace(/&/g,r):r?r+" "+n:n)):o):i!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=w.p?w.p(o,i):o+":"+i+";")}return a+(t&&c?t+"{"+c+"}":c)+l},y={},me=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+me(e[a]);return t}return e},Ie=(e,t,a,l,c)=>{let o=me(e),i=y[o]||(y[o]=(n=>{let p=0,x=11;for(;p<n.length;)x=101*x+n.charCodeAt(p++)>>>0;return"go"+x})(o));if(!y[i]){let n=o!==e?e:(p=>{let x,f,b=[{}];for(;x=Se.exec(p.replace(Ae,""));)x[4]?b.shift():x[3]?(f=x[3].replace(ce," ").trim(),b.unshift(b[0][f]=b[0][f]||{})):b[0][x[1]]=x[2].replace(ce," ").trim();return b[0]})(e);y[i]=w(c?{["@keyframes "+i]:n}:n,a?"":"."+i)}let r=a&&y.g?y.g:null;return a&&(y.g=y[i]),((n,p,x,f)=>{f?p.data=p.data.replace(f,n):p.data.indexOf(n)===-1&&(p.data=x?n+p.data:p.data+n)})(y[i],t,l,r),i},ze=(e,t,a)=>e.reduce((l,c,o)=>{let i=t[o];if(i&&i.call){let r=i(a),n=r&&r.props&&r.props.className||/^go/.test(r)&&r;i=n?"."+n:r&&typeof r=="object"?r.props?"":w(r,""):r===!1?"":r}return l+c+(i??"")},"");function G(e){let t=this||{},a=e.call?e(t.p):e;return Ie(a.unshift?a.raw?ze(a,[].slice.call(arguments,1),t.p):a.reduce((l,c)=>Object.assign(l,c&&c.call?c(t.p):c),{}):a,Ce(t.target),t.g,t.o,t.k)}let pe,oe,ie;G.bind({g:1});let v=G.bind({k:1});function Pe(e,t,a,l){w.p=t,pe=e,oe=a,ie=l}function j(e,t){let a=this||{};return function(){let l=arguments;function c(o,i){let r=Object.assign({},o),n=r.className||c.className;a.p=Object.assign({theme:oe&&oe()},r),a.o=/ *go\d+/.test(n),r.className=G.apply(a,l)+(n?" "+n:"");let p=e;return e[0]&&(p=r.as||e,delete r.as),ie&&p[0]&&ie(r),pe(p,r)}return c}}var Le=e=>typeof e=="function",le=(e,t)=>Le(e)?e(t):e,Me=(()=>{let e=0;return()=>(++e).toString()})(),Re=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Fe=20,ue="default",ge=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(i=>i.id===t.toast.id?{...i,...t.toast}:i)};case 2:let{toast:l}=t;return ge(e,{type:e.toasts.find(i=>i.id===l.id)?1:0,toast:l});case 3:let{toastId:c}=t;return{...e,toasts:e.toasts.map(i=>i.id===c||c===void 0?{...i,dismissed:!0,visible:!1}:i)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(i=>i.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(i=>({...i,pauseDuration:i.pauseDuration+o}))}}},Oe=[],Te={toasts:[],pausedAt:void 0,settings:{toastLimit:Fe}},S={},xe=(e,t=ue)=>{S[t]=ge(S[t]||Te,e),Oe.forEach(([a,l])=>{a===t&&l(S[t])})},fe=e=>Object.keys(S).forEach(t=>xe(e,t)),De=e=>Object.keys(S).find(t=>S[t].toasts.some(a=>a.id===e)),re=(e=ue)=>t=>{xe(t,e)},Ve=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:a?.id||Me()}),A=e=>(t,a)=>{let l=Ve(t,e,a);return re(l.toasterId||De(l.id))({type:2,toast:l}),l.id},g=(e,t)=>A("blank")(e,t);g.error=A("error");g.success=A("success");g.loading=A("loading");g.custom=A("custom");g.dismiss=(e,t)=>{let a={type:3,toastId:e};t?re(t)(a):fe(a)};g.dismissAll=e=>g.dismiss(void 0,e);g.remove=(e,t)=>{let a={type:4,toastId:e};t?re(t)(a):fe(a)};g.removeAll=e=>g.remove(void 0,e);g.promise=(e,t,a)=>{let l=g.loading(t.loading,{...a,...a?.loading});return typeof e=="function"&&(e=e()),e.then(c=>{let o=t.success?le(t.success,c):void 0;return o?g.success(o,{id:l,...a,...a?.success}):g.dismiss(l),c}).catch(c=>{let o=t.error?le(t.error,c):void 0;o?g.error(o,{id:l,...a,...a?.error}):g.dismiss(l)}),e};var He=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,qe=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,We=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Ze=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${He} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${qe} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${We} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Be=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ke=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Be} 1s linear infinite;
`,Qe=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ye=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Ge=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Qe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ye} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Je=j("div")`
  position: absolute;
`,Ue=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Xe=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,et=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Xe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,tt=({toast:e})=>{let{icon:t,type:a,iconTheme:l}=e;return t!==void 0?typeof t=="string"?m.createElement(et,null,t):t:a==="blank"?null:m.createElement(Ue,null,m.createElement(Ke,{...l}),a!=="loading"&&m.createElement(Je,null,a==="error"?m.createElement(Ze,{...l}):m.createElement(Ge,{...l})))},at=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,st=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,ot="0%{opacity:0;} 100%{opacity:1;}",it="0%{opacity:1;} 100%{opacity:0;}",lt=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,rt=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,nt=(e,t)=>{let a=e.includes("top")?1:-1,[l,c]=Re()?[ot,it]:[at(a),st(a)];return{animation:t?`${v(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};m.memo(({toast:e,position:t,style:a,children:l})=>{let c=e.height?nt(e.position||t||"top-center",e.visible):{opacity:0},o=m.createElement(tt,{toast:e}),i=m.createElement(rt,{...e.ariaProps},le(e.message,e));return m.createElement(lt,{className:e.className,style:{...c,...a,...e.style}},typeof l=="function"?l({icon:o,message:i}):m.createElement(m.Fragment,null,o,i))});Pe(m.createElement);G`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;const de=[{id:1,category:"cuisine",title:"Cuisine teck & noir",description:"...",image:"https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg?w=900",isNew:!0},{id:2,category:"porte",title:"Porte pivotante massive",description:"...",image:"https://images.pexels.com/photos/209290/pexels-photo-209290.jpeg?w=900"},{id:3,category:"escalier",title:"Escalier suspendu chêne",description:"...",image:"https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?w=900"},{id:4,category:"escalier",title:"Escalier suspendu chêne",description:"...",image:"https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?w=900"},{id:5,category:"escalier",title:"Escalier suspendu chêne",description:"...",image:"https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?w=900"},{id:6,category:"escalier",title:"Escalier suspendu chêne",description:"...",image:"https://images.pexels.com/photos/212721/pexels-photo-212721.jpeg?w=900"}];function xt(){const e=ke.c(42),[t,a]=m.useState("all"),[l,c]=m.useState("masonry"),[o,i]=m.useState("recent"),[r,n]=m.useState(null),[p,x]=m.useState(12),[f,b]=m.useState(!1),he=m.useRef(null),be=t==="all"?de:de.filter(d=>d.category===t);let I;e[0]!==o?(I=(d,h)=>o==="alpha"?d.title.localeCompare(h.title):o==="oldest"?d.id-h.id:h.id-d.id,e[0]=o,e[1]=I):I=e[1];const J=[...be].sort(I),u=J.slice(0,p),U=p<J.length;let z;e[2]===Symbol.for("react.memo_cache_sentinel")?(z=()=>{b(!0),setTimeout(()=>{x(dt),b(!1)},800)},e[2]=z):z=e[2];const X=z;m.useEffect(()=>{const d=h=>{r!==null&&(h.key==="Escape"&&n(null),h.key==="ArrowRight"&&n(se=>(se+1)%u.length),h.key==="ArrowLeft"&&n(se=>(se-1+u.length)%u.length))};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[r,u.length]);let P;e[3]===Symbol.for("react.memo_cache_sentinel")?(P=[{value:"all",label:"Toutes"},{value:"cuisine",label:"Cuisines"},{value:"porte",label:"Portes"},{value:"escalier",label:"Escaliers"},{value:"meuble",label:"Meubles"},{value:"agencement",label:"Agencements"},{value:"renovation",label:"Rénovations"}],e[3]=P):P=e[3];const ye=P,ne=u.length,ve=J.length;let L,M;e[4]===Symbol.for("react.memo_cache_sentinel")?(L=s.jsx(Ne,{title:"Réalisations – Ndjimolux Menuiserie Douala"}),M=s.jsx(_e,{}),e[4]=L,e[5]=M):(L=e[4],M=e[5]);let R;e[6]===Symbol.for("react.memo_cache_sentinel")?(R=s.jsx("div",{className:"absolute inset-0 opacity-10 bg-[url('/images/wood-texture-dark.jpg')] bg-cover mix-blend-overlay pointer-events-none"}),e[6]=R):R=e[6];let F,O;e[7]===Symbol.for("react.memo_cache_sentinel")?(F={opacity:0,y:30},O={opacity:1,y:0},e[7]=F,e[8]=O):(F=e[7],O=e[8]);let T;e[9]===Symbol.for("react.memo_cache_sentinel")?(T=s.jsxs(Y.h1,{initial:F,animate:O,className:"text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white mb-4",children:["Nos ",s.jsx("span",{className:"text-emerald-500",children:"Réalisations"})]}),e[9]=T):T=e[9];let k;e[10]!==l?(k=()=>c(l==="masonry"?"grid":"masonry"),e[10]=l,e[11]=k):k=e[11];const ee=l==="masonry"?"Vue grille":"Vue masonry";let N;e[12]!==ee||e[13]!==k?(N=s.jsx("button",{onClick:k,className:"px-4 py-2 bg-gray-800 hover:bg-emerald-900/60 rounded-lg text-sm font-medium transition-colors",children:ee}),e[12]=ee,e[13]=k,e[14]=N):N=e[14];let D;e[15]===Symbol.for("react.memo_cache_sentinel")?(D=d=>i(d.target.value),e[15]=D):D=e[15];let V,H,q;e[16]===Symbol.for("react.memo_cache_sentinel")?(V=s.jsx("option",{value:"recent",children:"Plus récent"}),H=s.jsx("option",{value:"oldest",children:"Plus ancien"}),q=s.jsx("option",{value:"alpha",children:"Alphabétique"}),e[16]=V,e[17]=H,e[18]=q):(V=e[16],H=e[17],q=e[18]);let _;e[19]!==o?(_=s.jsxs("select",{value:o,onChange:D,className:"px-4 py-2 bg-gray-800 border border-emerald-900/50 rounded-lg text-sm text-white",children:[V,H,q]}),e[19]=o,e[20]=_):_=e[20];let W;e[21]!==N||e[22]!==_?(W=s.jsxs("div",{className:"flex gap-3",children:[N,_]}),e[21]=N,e[22]=_,e[23]=W):W=e[23];let Z;e[24]!==t?(Z=s.jsx("div",{className:"sticky top-0 z-20 bg-black/95 backdrop-blur-lg border-b border-emerald-900/40 py-5",children:s.jsx("div",{className:"max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 overflow-x-auto",children:s.jsx("div",{className:"flex gap-3 sm:gap-4 justify-center min-w-max",children:ye.map(d=>s.jsx("button",{onClick:()=>{a(d.value),x(12)},className:`px-5 sm:px-7 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all whitespace-nowrap ${t===d.value?"bg-emerald-700 text-white shadow-md":"bg-gray-900/70 text-gray-300 hover:bg-emerald-900/60 border border-emerald-900/50"}`,children:d.label},d.value))})})}),e[24]=t,e[25]=Z):Z=e[25];const we="py-10 md:py-16 bg-black",je="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8",te=`
              ${l==="masonry"?"columns-2 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 gap-4 sm:gap-6 space-y-4 sm:space-y-6":"grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6"}
            `;let B;e[26]===Symbol.for("react.memo_cache_sentinel")?(B=(d,h)=>s.jsx(Y.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:h*.05},className:"group break-inside-avoid cursor-pointer relative",onClick:()=>n(h),children:s.jsxs("div",{className:"relative rounded-2xl overflow-hidden border border-emerald-900/30 bg-gray-950 shadow-lg hover:shadow-2xl hover:border-emerald-700/50 transition-all duration-400",children:[s.jsx("img",{src:d.image,alt:d.title,className:"w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]",loading:"lazy"}),d.isNew&&s.jsx("div",{className:"absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md",children:"Nouveau"}),s.jsxs("div",{className:`
                    absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent
                    flex flex-col justify-end p-4 sm:p-5
                    ${typeof window<"u"&&window.innerWidth<768?"opacity-100":"opacity-0 group-hover:opacity-100"}
                    transition-opacity duration-400
                  `,children:[s.jsx("h3",{className:"text-base sm:text-lg md:text-xl font-serif font-bold text-white mb-1.5 line-clamp-2",children:d.title}),s.jsx("p",{className:"text-xs sm:text-sm md:text-base text-gray-200 line-clamp-2 md:line-clamp-3",children:d.description})]})]})},d.id),e[26]=B):B=e[26];const ae=u.map(B);let E;e[27]!==te||e[28]!==ae?(E=s.jsx("div",{className:te,children:ae}),e[27]=te,e[28]=ae,e[29]=E):E=e[29];let $;e[30]!==U||e[31]!==X||e[32]!==f?($=U&&s.jsx("div",{className:"text-center mt-16 md:mt-20",children:s.jsx("button",{onClick:X,disabled:f,className:`inline-flex px-8 sm:px-10 py-4 sm:py-5 bg-emerald-800/70 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all ${f?"opacity-70 cursor-wait":"hover:shadow-xl hover:scale-[1.03]"}`,children:f?"Chargement...":"Charger plus de réalisations"})}),e[30]=U,e[31]=X,e[32]=f,e[33]=$):$=e[33];let K;e[34]!==E||e[35]!==$?(K=s.jsx("section",{className:we,children:s.jsxs("div",{className:je,children:[E,$]})}),e[34]=E,e[35]=$,e[36]=K):K=e[36];let C;e[37]!==u||e[38]!==r?(C=r!==null&&s.jsx(Y.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4",onClick:()=>n(null),children:s.jsxs(Y.div,{ref:he,initial:{scale:.92,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.92,opacity:0},transition:{type:"spring",damping:22},className:"relative max-w-[95vw] max-h-[95vh] rounded-xl overflow-hidden shadow-2xl bg-gray-950",onClick:ct,children:[s.jsx("img",{src:u[r].image,alt:u[r].title,className:"max-w-full max-h-[90vh] object-contain"}),s.jsxs("div",{className:"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6",children:[s.jsx("h3",{className:"text-xl md:text-2xl font-serif font-bold text-white mb-2",children:u[r].title}),s.jsx("p",{className:"text-gray-200 text-base md:text-lg",children:u[r].description})]}),s.jsx("button",{onClick:()=>n(null),className:"absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-colors text-xl",children:"✕"}),s.jsx("button",{onClick:()=>n(d=>(d-1+u.length)%u.length),className:"absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-colors",children:"←"}),s.jsx("button",{onClick:()=>n(d=>(d+1)%u.length),className:"absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-colors",children:"→"}),s.jsxs("div",{className:"absolute top-4 left-4 flex gap-3",children:[s.jsx("button",{onClick:()=>{navigator.clipboard.writeText(u[r].image),g.success("Lien copié !")},className:"bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-colors",title:"Copier le lien",children:"🔗"}),s.jsx("a",{href:u[r].image,download:!0,className:"bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-colors",title:"Télécharger l'image",children:"⬇"})]})]})}),e[37]=u,e[38]=r,e[39]=C):C=e[39];let Q;return e[40]!==C?(Q=s.jsx(Ee,{children:C}),e[40]=C,e[41]=Q):Q=e[41],s.jsxs(s.Fragment,{children:[L,M,s.jsxs("section",{className:"relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-950 via-black to-emerald-950/70",children:[R,s.jsxs("div",{className:"relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center",children:[T,s.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300",children:[s.jsxs("p",{className:"text-lg",children:[ne," projet",ne!==1?"s":""," sur ",ve]}),W]})]})]}),Z,K,Q]})}function ct(e){return e.stopPropagation()}function dt(e){return e+12}export{xt as default};
