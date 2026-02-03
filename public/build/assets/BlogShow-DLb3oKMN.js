import{c as d,j as s,H as h,L as u}from"./app-D5M2wH9J.js";/* empty css            */function j(p){const e=d.c(25),{post:t}=p;let l;e[0]!==t.title?(l=s.jsx(h,{title:t.title}),e[0]=t.title,e[1]=l):l=e[1];let r;e[2]!==t.image||e[3]!==t.title?(r=t.image&&s.jsxs("div",{className:"w-full h-[400px] relative",children:[s.jsx("img",{src:`/storage/${t.image}`,alt:t.title,className:"w-full h-full object-cover opacity-60"}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"})]}),e[2]=t.image,e[3]=t.title,e[4]=r):r=e[4];let g;e[5]===Symbol.for("react.memo_cache_sentinel")?(g=s.jsx(u,{href:"/blog",className:"text-green-400 text-sm hover:underline mb-8 inline-block",children:"← Retour au blog"}),e[5]=g):g=e[5];let a;e[6]!==t.category?(a=t.category&&s.jsx("span",{className:"text-green-400 text-xs uppercase tracking-wider font-semibold",children:t.category}),e[6]=t.category,e[7]=a):a=e[7];let i;e[8]!==t.title?(i=s.jsx("h1",{className:"text-3xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight",children:t.title}),e[8]=t.title,e[9]=i):i=e[9];let o;e[10]!==t.published_at?(o=s.jsx("p",{className:"text-gray-500 text-sm mb-10",children:t.published_at}),e[10]=t.published_at,e[11]=o):o=e[11];let n;e[12]!==t.content?(n=s.jsx("div",{className:`
    rich-content
    prose prose-invert prose-green max-w-none
    prose-headings:text-white
    prose-a:text-green-400 hover:underline
    prose-strong:text-white
    prose-p:text-gray-300
    prose-li:text-gray-300
    prose-blockquote:border-l-green-600 prose-blockquote:text-gray-400
    prose-code:bg-gray-800 prose-code:text-green-400
    prose-pre:bg-gray-900 prose-pre:p-4 prose-pre:rounded-lg
    prose-img:rounded-xl prose-img:shadow-lg
  `,dangerouslySetInnerHTML:{__html:t.content}}),e[12]=t.content,e[13]=n):n=e[13];let c;e[14]!==a||e[15]!==i||e[16]!==o||e[17]!==n?(c=s.jsxs("div",{className:"max-w-4xl mx-auto px-6 py-16",children:[g,a,i,o,n]}),e[14]=a,e[15]=i,e[16]=o,e[17]=n,e[18]=c):c=e[18];let x;e[19]!==r||e[20]!==c?(x=s.jsxs("div",{className:"min-h-screen bg-black text-white",children:[r,c]}),e[19]=r,e[20]=c,e[21]=x):x=e[21];let m;return e[22]!==l||e[23]!==x?(m=s.jsxs(s.Fragment,{children:[l,x]}),e[22]=l,e[23]=x,e[24]=m):m=e[24],m}export{j as default};
