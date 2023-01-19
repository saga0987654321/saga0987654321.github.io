import{S,i as q,s as H,k as u,q as w,a as _,l as k,m,r as j,h as s,c as g,n as E,b as p,E as b,B as v}from"./index-0726a72e.js";function J(y){let t,d,o,e,P=`<code class="language-css"><span class="token selector">&lt;button class="reset"   on:click=</span><span class="token punctuation">&#123;</span><span class="token selector">() =></span> <span class="token punctuation">&#123;</span>
  clicks = 0<span class="token punctuation">;</span>
  multiplier = 1<span class="token punctuation">;</span>
  workers = []<span class="token punctuation">;</span>
  w = 0<span class="token punctuation">;</span>
  worker_multiplier = 1<span class="token punctuation">;</span>
  <span class="token selector">console.log("reset")
  intervalId.forEach(id =></span> <span class="token punctuation">&#123;</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
    
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code>`,c,r,f,i,l,x='<code class="language-css">        <span class="token selector">&lt;span>Workers:</span> <span class="token punctuation">&#123;</span>workers.length<span class="token punctuation">&#125;</span>&lt;/span></code>';return{c(){t=u("p"),d=w(`Idag har jag gjort klart min reset knapp så att den fungerar.
När man trycker på reset knappen så ställs allting om i spelet.
Spelet startar om. Problemet med knappen var att alla workers i listan
inte startades om, utan bara en.`),o=_(),e=u("pre"),c=_(),r=u("p"),f=w("Jag har också gjort så att det står hur många workers man använder."),i=_(),l=u("pre"),this.h()},l(a){t=k(a,"P",{});var n=m(t);d=j(n,`Idag har jag gjort klart min reset knapp så att den fungerar.
När man trycker på reset knappen så ställs allting om i spelet.
Spelet startar om. Problemet med knappen var att alla workers i listan
inte startades om, utan bara en.`),n.forEach(s),o=g(a),e=k(a,"PRE",{class:!0});var I=m(e);I.forEach(s),c=g(a),r=k(a,"P",{});var h=m(r);f=j(h,"Jag har också gjort så att det står hur många workers man använder."),h.forEach(s),i=g(a),l=k(a,"PRE",{class:!0});var M=m(l);M.forEach(s),this.h()},h(){E(e,"class","language-css"),E(l,"class","language-css")},m(a,n){p(a,t,n),b(t,d),p(a,o,n),p(a,e,n),e.innerHTML=P,p(a,c,n),p(a,r,n),b(r,f),p(a,i,n),p(a,l,n),l.innerHTML=x},p:v,i:v,o:v,d(a){a&&s(t),a&&s(o),a&&s(e),a&&s(c),a&&s(r),a&&s(i),a&&s(l)}}}const N={title:"Monday.16.jan",date:"2023-01-16"};class R extends S{constructor(t){super(),q(this,t,null,J,H,{})}}export{R as default,N as metadata};
