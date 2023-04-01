import{_ as h}from"./lodash.b76aa1f0.js";import{J as x,j as d,k as c,l as e,z as m,K as p,A as g,F as v,x as f,L as b,M as y,G as R,m as r}from"./index.eedf5474.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";const k={data(){return{search:"",testResults:[],allresult:[],results:[],sortCr:"aoae"}},methods:{sortResults(){this.testResults=h.orderBy(this.testResults,[this.sortCr],["desc"])},modeltestResults(){this.url="https://script.google.com/macros/s/AKfycbxHGt2q5JWuyyQGNnWtzU0N9KGbwJVI-VBN5d66WZQD8X2Pv0eHmeDEyCaszilx_IEx6Q/exec",fetch(this.url).then(t=>t.json()).then(t=>{let o=t.routines.map(l=>({name:l.name,aoae:l["Average of All Exams"],aoge:l["Average of Given Exams"],total_exam_given:l["Total Exam Given"],total_exam_skipped:l["Total Exam Skipped"],college:l.college}));this.testResults=o.sort((l,u)=>u.aoae-l.aoae),this.allresult=this.testResults,setTimeout(()=>{location.hash=`#${this.user.reg}`},1e3)})},millisToMinutesAndSeconds(t){var o=Math.floor(t/6e4),l=(t%6e4/1e3).toFixed(0);return o+":"+(l<10?"0":"")+l},searchResult(){this.testResults=this.allresult.filter(t=>{if(t.name.toLowerCase().includes(this.search.toLowerCase())||t.college.toLowerCase().includes(this.search.toLowerCase()))return t})},getStyle(t){return t==1?"success":t==2?"orange darken-2":t==3?"indigo":""},getborderStyle(t){let o={1:"s singleResult mb-2",2:"f singleResult mb-2",3:"d singleResult mb-2"};return o[t]?o[t]:"singleResult mb-2"}},created(){this.modeltestResults(),window.scrollTo(0,0)},computed:{user(){return x.state.user}}},a=t=>(b("data-v-7a56eb5a"),t=t(),y(),t),w={class:"leaderboard"},S=a(()=>e("div",{class:"my-4"},[e("h1",{class:"text-3xl font-bold text-center text-gray-900"},"Overall Leaderboard"),e("p",{class:"text-center"},"(Except Final Model Test 1-10)")],-1)),A={class:"p-5 mx-1 rounded md:w-1/2 md:mx-auto bg-gray-50"},C={class:"space-y-3"},T={class:"form-control"},G={class:"form-control"},L=a(()=>e("label",{for:"",class:"text-black label"},"Ranked By:",-1)),N=a(()=>e("option",{value:"aoae"},"Average of All Exams",-1)),F=a(()=>e("option",{value:"aoge"},"Average of Given Exams",-1)),B=a(()=>e("option",{value:"total_exam_given"},"Total Exam Given ",-1)),I=a(()=>e("option",{value:"total_exam_skipped"},"Total Exam Skipped",-1)),M=[N,F,B,I],V={class:"mt-4"},j={key:0},z=["id"],D={class:"flex items-center justify-center w-10 h-10 font-semibold text-white rounded-full bg-gradient-to-t from-indigo-400 to-indigo-600"},K={class:"flex-1 ml-2 text-gray-900 md:ml-4"},J={class:"text-lg font-semibold"},O={class:"text-lg font-light"},Q=a(()=>e("hr",null,null,-1)),U={class:"text-sm"},W={class:"text-sm"},H={class:"text-sm"},q={class:"text-sm"},P={key:1,class:"text-center"},X=a(()=>e("button",{class:"btn loader btn-primary"},"Loading...",-1)),Z=[X];function Y(t,o,l,u,i,n){return d(),c("div",w,[e("div",null,[S,e("div",A,[e("div",C,[e("div",T,[m(e("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>i.search=s),placeholder:"Search by Name/College",onKeyup:o[1]||(o[1]=(...s)=>n.searchResult&&n.searchResult(...s)),class:"input input-primary input-bordered"},null,544),[[p,i.search]])]),e("div",G,[L,m(e("select",{"onUpdate:modelValue":o[2]||(o[2]=s=>i.sortCr=s),class:"select",onChange:o[3]||(o[3]=(...s)=>n.sortResults&&n.sortResults(...s))},M,544),[[g,i.sortCr]])])]),e("div",V,[i.allresult.length>0?(d(),c("div",j,[(d(!0),c(v,null,f(i.testResults,(s,_)=>(d(),c("div",{key:_,id:s.roll,class:R(`${n.getborderStyle(s.position)} flex justify-between items-center p-5   rounded  shadow-md ${s.roll==n.user.roll?"bg-green-200":""}`),style:{"scroll-margin":"100px"}},[e("span",D,r(_+1),1),e("div",K,[e("h2",J,r(s.name),1),e("p",O,r(s.college),1),Q,e("p",U,"Average of All Exams: "+r(Number(s.aoae).toFixed(4)),1),e("p",W,"Average of Given Exams: "+r(Number(s.aoge).toFixed(4)),1),e("p",H,"Total Exam Given: "+r(Number(s.total_exam_given).toFixed(4)),1),e("p",q,"Total Exam Skipped: "+r(Number(s.total_exam_skipped).toFixed(4)),1)])],10,z))),128))])):(d(),c("div",P,Z))])])])])}var se=E(k,[["render",Y],["__scopeId","data-v-7a56eb5a"]]);export{se as default};
