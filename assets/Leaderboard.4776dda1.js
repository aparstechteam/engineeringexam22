var f=Object.defineProperty,g=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var h=(e,t,s)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,u=(e,t)=>{for(var s in t||(t={}))x.call(t,s)&&h(e,s,t[s]);if(m)for(var s of m(t))y.call(t,s)&&h(e,s,t[s]);return e},p=(e,t)=>g(e,b(t));import{_ as v}from"./lodash.b76aa1f0.js";import{E as w,J as R,j as n,k as d,l,m as c,z as S,K as L,F as k,x as B,G as C,L as M,M as j}from"./index.eedf5474.js";import{_ as J}from"./plugin-vue_export-helper.21dcd24c.js";const T={data(){return{search:"",testResults:[],allresult:[],results:[]}},methods:{modeltestResults(){fetch(`${w}?type=examlist&id=${this.$route.params.id}`).then(e=>e.json()).then(e=>{this.url="https://script.google.com/macros/s/AKfycbxHZMx1M1oGvp-wPb7mHwQrfkDBpkS3BG0WtciUJ_HHJTswLgJ2Ba4f8XBLNHOkjYEERQ/exec?sheet="+e.exam.exam.substr(39,44),fetch(this.url).then(t=>t.json()).then(t=>{let s=t,o=localStorage.getItem("exam_"+this.$route.params.id);o&&(o=JSON.parse(o),s.find(i=>i.ttrx==o.roll)||(s.push({name:o.name,college:o.college,score:o.score,duration:o.duration,attempt:o.attempt,reg:o.roll}),fetch(o.reqUrl,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify(o)}))),this.testResults=v.sortBy(s.map(r=>p(u({},r),{attempt:r.attempt||1})),[r=>-r.score,"duration"]).map((r,i)=>u({position:i+1},r)),this.allresult=this.testResults,setTimeout(()=>{location.hash=`#${this.user.roll}`},1e3)})})},millisToMinutesAndSeconds(e){var t=Math.floor(e/6e4),s=(e%6e4/1e3).toFixed(0);return t+":"+(s<10?"0":"")+s},searchResult(){this.testResults=this.allresult.filter(e=>{if(e.name.toLowerCase().includes(this.search.toLowerCase())||e.college.toLowerCase().includes(this.search.toLowerCase()))return e})},getStyle(e){return e==1?"success":e==2?"orange darken-2":e==3?"indigo":""},getborderStyle(e){let t={1:"s singleResult mb-2",2:"f singleResult mb-2",3:"d singleResult mb-2"};return t[e]?t[e]:"singleResult mb-2"}},created(){this.modeltestResults(),window.scrollTo(0,0)},computed:{user(){return R.state.user}}},H=e=>(M("data-v-06fbf4be"),e=e(),j(),e),I={class:"leaderboard"},N={class:"my-4 text-3xl font-bold text-center text-gray-900"},E={class:"p-5 mx-1 rounded md:w-1/2 md:mx-auto bg-gray-50"},O={class:"form-control"},$={class:"mt-4"},D={key:0},F=["id"],G={class:"flex items-center justify-center w-10 h-10 font-semibold text-white rounded-full bg-gradient-to-t from-indigo-400 to-indigo-600"},K={class:"flex-1 ml-2 text-gray-900 md:ml-4"},Q={class:"text-lg font-semibold"},U={class:"p-2 text-gray-900 border-2 border-blue-400"},z={key:1,class:"text-center"},A=H(()=>l("button",{class:"btn loader btn-primary"},"Loading...",-1)),P=[A];function V(e,t,s,o,r,i){return n(),d("div",I,[l("div",null,[l("h1",N,"MCQ Leaderboard-"+c(this.$route.params.id),1),l("div",E,[l("div",O,[S(l("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>r.search=a),placeholder:"Search by Name/College",onKeyup:t[1]||(t[1]=(...a)=>i.searchResult&&i.searchResult(...a)),class:"input input-primary input-bordered"},null,544),[[L,r.search]])]),l("div",$,[r.allresult.length>0?(n(),d("div",D,[(n(!0),d(k,null,B(r.testResults,(a,_)=>(n(),d("div",{key:_,id:a.reg,class:C(`${i.getborderStyle(a.position)} flex justify-between items-center p-5   rounded  shadow-md ${a.reg==i.user.roll?"bg-green-200":""}`),style:{"scroll-margin":"100px"}},[l("span",G,c(a.position),1),l("div",K,[l("h2",Q,c(a.name),1),l("p",null,c(a.college),1)]),l("div",U,c(a.score),1)],10,F))),128))])):(n(),d("div",z,P))])])])])}var Z=J(T,[["render",V],["__scopeId","data-v-06fbf4be"]]);export{Z as default};
