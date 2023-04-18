var j=Object.defineProperty,H=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var w=(c,l,a)=>l in c?j(c,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):c[l]=a,b=(c,l)=>{for(var a in l||(l={}))R.call(l,a)&&w(c,a,l[a]);if(y)for(var a of y(l))A.call(l,a)&&w(c,a,l[a]);return c},k=(c,l)=>H(c,L(l));import{r as x,j as i,k as d,l as e,F as p,x as f,M as D,y as T,H as B,D as U,E as V,z as M,U as z,m as h}from"./index.ec7be98c.js";import{_ as E}from"./lodash.2138e611.js";const F={class:"container mx-auto"},J={class:"print:hidden"},O=e("div",null,[e("h1",{class:"text-lg text-center"}," Select Exams and create leaderboard ")],-1),G={class:"max-w-2xl mx-auto mt-5 overflow-x-auto"},I={class:"table w-full"},P=e("thead",null,[e("tr",null,[e("th",null,"Select"),e("th",null,"Title"),e("th",null,"Total Students")])],-1),Q=["onUpdate:modelValue"],q={class:"flex justify-center gap-3 my-4 text-center"},K=B(),W=e("span",{class:"material-icons"},"upload_file",-1),X=B(" Export "),Y=[W,X],Z={key:0},$={class:"mx-auto mt-5 overflow-x-auto"},ee={class:"table w-full"},te=e("th",{class:"text-center"},"Rank",-1),se=e("th",{class:"text-center"},"Name",-1),le=e("th",{class:"text-center"},"College",-1),ae={class:"text-center"},oe=e("th",{class:"text-center"},"Average Score",-1),re={class:"text-center"},ce={class:"text-center"},ne={class:"text-center"},ue={class:"text-center"},me={setup(c){const l=x([]),a=x([]),g=x([]);(()=>{U.get(V+"?type=examlist").then(_=>{l.value=_.data.map((r,t)=>{let o=[],n="https://script.google.com/macros/s/AKfycbxHZMx1M1oGvp-wPb7mHwQrfkDBpkS3BG0WtciUJ_HHJTswLgJ2Ba4f8XBLNHOkjYEERQ/exec?sheet="+r.exam.substr(39,44);return fetch(n).then(m=>m.json()).then(m=>{o=E.sortBy(m.map(s=>k(b({},s),{attempt:s.attempt||1})),[s=>-s.score,"duration"]).map((s,u)=>k(b({position:1},s),{eid:t,ttrx:s.ttrx?s.ttrx:s.name.split(" ")[0]})),g.value=[...g.value,...o.map(s=>s.ttrx)],l.value[t].results=o,l.value[t].total=o.length}),{select:!0,title:r.topic,results:o}})})})();const v=x(!1),C=()=>{v.value=!0;let _=[...new Set(g.value)];a.value=[],_.forEach(r=>{let t="",o="",n=l.value.filter(s=>s.select).map(s=>{let u=s.results.find(N=>N.ttrx==r);return u?(t=u.name?u.name:u.ttrx,o=u.college?u.college:"",{eid:s.results[0].eid,score:u.score}):{eid:s.results[0].eid,score:0}}),m=n.map(s=>Number(s.score)).reduce((s,u)=>s+u,0);t&&(a.value=[...a.value,{ttrx:r,name:t,college:o,score:m,exams:n,average_score:(m/n.length).toFixed(2)}]),a.value=E.sortBy(a.value,[s=>-s.average_score]),v.value=a.value.length!=_.length}),v.value=!1},S=()=>{let _="ID,Name,"+l.value.filter(t=>t.select).map(t=>t.title).join(",")+`,Total Score
`;a.value.forEach(t=>{_+=t.ttrx+","+t.name+","+t.exams.map(o=>o.score).join(",")+","+t.score+`
`});var r=document.createElement("a");r.href="data:text/csv;charset=utf-8,"+encodeURI(_),r.target="_blank",r.download="overall_result.csv",r.click()};return(_,r)=>(i(),d("div",F,[e("div",J,[O,e("div",G,[e("table",I,[P,e("tbody",null,[(i(!0),d(p,null,f(l.value,(t,o)=>(i(),d("tr",{key:o},[e("th",null,[M(e("input",{type:"checkbox",class:"checkbox","onUpdate:modelValue":n=>l.value[o].select=n},null,8,Q),[[z,l.value[o].select]])]),e("td",null,h(t.title),1),e("td",null,h(t.total?t.total:"Loading..."),1)]))),128))])])]),e("div",q,[e("button",{onClick:C,class:D(["capitalize btn",{loading:v.value}])},"Prepare Overall Leaderboard",2),K,e("button",{class:"btn",onClick:S},Y)])]),a.value.length>0?(i(),d("div",Z,[e("div",$,[e("table",ee,[e("thead",null,[e("tr",null,[te,se,le,(i(!0),d(p,null,f(l.value.filter(t=>t.select),t=>(i(),d("th",ae,h(t.title),1))),256)),oe])]),e("tbody",null,[(i(!0),d(p,null,f(a.value,(t,o)=>(i(),d("tr",{key:o},[e("td",re,h(o+1),1),e("td",ce,h(t.name),1),e("td",ne,h(t.college),1),(i(!0),d(p,null,f(t.exams,n=>(i(),d("td",{class:"text-center",key:n.eid},h(n.score),1))),128)),e("td",ue,h(t.average_score),1)]))),128))])])])])):T("",!0)]))}};export{me as default};
