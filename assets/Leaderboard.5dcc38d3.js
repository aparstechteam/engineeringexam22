import{_ as h}from"./lodash.b76aa1f0.js";import{E as _,bz as p,J as b,j as l,k as a,l as t,m as d,z as g,K as f,F as x,x as y,L as v,M as w,G as k,I as R}from"./index.eedf5474.js";import{_ as L}from"./plugin-vue_export-helper.21dcd24c.js";const S={data(){return{search:"",testResults:[],allresult:[],results:[]}},methods:{modeltestResults(){fetch(`${_}?type=examlist&id=${this.$route.params.id}`).then(e=>e.json()).then(e=>{this.url=p+"?cs="+e.exam.response_sheet.substr(39,44),fetch(this.url).then(s=>s.json()).then(s=>{this.allresult=s.map((r,m)=>({name:r.name,marks:r.marks,roll:r.roll,position:m+1})),this.testResults=h.sortBy(this.allresult,[r=>-r.marks]),setTimeout(()=>{location.hash=`#${this.user.roll}`},1e3)})})},millisToMinutesAndSeconds(e){var s=Math.floor(e/6e4),r=(e%6e4/1e3).toFixed(0);return s+":"+(r<10?"0":"")+r},searchResult(){this.testResults=this.allresult.filter(e=>{if(e.name.toLowerCase().includes(this.search.toLowerCase())||e.college.toLowerCase().includes(this.search.toLowerCase()))return e})},getStyle(e){return e==1?"success":e==2?"orange darken-2":e==3?"indigo":""},getborderStyle(e){let s={1:"s singleResult mb-2",2:"f singleResult mb-2",3:"d singleResult mb-2"};return s[e]?s[e]:"singleResult mb-2"}},created(){this.modeltestResults(),window.scrollTo(0,0)},computed:{user(){return b.state.user}}},u=e=>(v("data-v-73bad437"),e=e(),w(),e),T={class:"leaderboard"},C={class:"my-4 text-3xl font-bold text-center text-gray-900"},B=u(()=>t("div",{class:"container mx-auto my-2"},[R(" \u09AF\u09A5\u09BE\u09B8\u09AE\u09DF\u09C7, \u09B8\u09A0\u09BF\u0995 \u09A8\u09BF\u09DF\u09AE\u09C7 \u09B2\u09BF\u0996\u09BF\u09A4 \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE\u09B0 \u0996\u09BE\u09A4\u09BE \u09AA\u09C2\u09B0\u09CD\u09AC\u09C7 \u09B8\u09BE\u09AC\u09AE\u09BF\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0\u09C7\u0993 \u09AF\u09A6\u09BF \u09B2\u09BF\u09A1\u09BE\u09B0\u09AC\u09CB\u09B0\u09CD\u09A1\u09C7 \u09A4\u09CB\u09AE\u09BE\u09B0 \u09A8\u09BE\u09AE \u09A8\u09BE \u09A5\u09BE\u0995\u09C7, \u09A4\u09BE\u09B9\u09B2\u09C7 \u09A8\u09BF\u099A\u09C7\u09B0 \u09AC\u09BE\u099F\u09A8\u09C7 \u0995\u09CD\u09B2\u09BF\u0995 \u0995\u09B0\u09C7, \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09AA\u09C7\u0987\u099C\u09C7 \u09A4\u09CB\u09AE\u09BE\u09B0 \u0996\u09BE\u09A4\u09BE\u09B0 \u09AA\u09BF\u09A1\u09BF\u098F\u09AB \u09B2\u09BF\u0982\u0995 \u098F\u09AC\u0982 \u098F\u0987\u099A\u098F\u09B8\u09B8\u09BF \u09B0\u09C7\u099C\u09BF\u09B8\u09CD\u099F\u09CD\u09B0\u09C7\u09B6\u09A8 \u09A8\u09BE\u09AE\u09CD\u09AC\u09BE\u09B0 \u0987\u09A8\u09AC\u0995\u09CD\u09B8 \u0995\u09B0\u09AC\u09C7\u0964 \u09AF\u09A4 \u09A4\u09BE\u09DC\u09BE\u09A4\u09BE\u09DC\u09BF \u09B8\u09AE\u09CD\u09AD\u09AC \u0986\u09AE\u09B0\u09BE \u09A4\u09CB\u09AE\u09BE\u09B0 \u0996\u09BE\u09A4\u09BE \u09A6\u09C7\u0996\u09C7, \u09A4\u09BE \u09B2\u09BF\u09A1\u09BE\u09B0\u09AC\u09CB\u09B0\u09CD\u09A1\u09C7 \u098F\u09A1 \u0995\u09B0\u09C7 \u09A6\u09BF\u09AC\u09CB\u0964 "),t("a",{href:"https://www.facebook.com/asg.varsityguccho/",target:"_blank",class:"btn btn-info"},"Click Here")],-1)),j=u(()=>t("div",{class:"my-4"},[t("p",{class:"text-lg font-bold text-center text-gray-900"},"TBA = To be Announced, \u0985\u09B0\u09CD\u09A5\u09BE\u09CE \u09A4\u09CB\u09AE\u09BE\u09B0 \u0996\u09BE\u09A4\u09BE \u09A6\u09C7\u0996\u09BE\u09B0 \u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09DF\u09BE \u098F\u0996\u09A8\u09CB \u09B6\u09C7\u09B7 \u09B9\u09DF\u09A8\u09BF\u0964 \u09B9\u09B2\u09C7\u0987 \u09A8\u09BE\u09AE\u09CD\u09AC\u09BE\u09B0 \u09AA\u09C7\u09DF\u09C7 \u09AF\u09BE\u09AC\u09C7\u0964")],-1)),I={class:"p-5 mx-1 rounded md:w-1/2 md:mx-auto bg-gray-50"},A={class:"form-control"},M={class:"mt-4"},z={key:0},E=["id"],F={class:"flex items-center justify-center w-10 h-10 font-semibold text-white rounded-full bg-gradient-to-t from-indigo-400 to-indigo-600"},N={class:"flex-1 ml-2 text-gray-900 md:ml-4"},V={class:"text-lg font-semibold"},$={class:"p-2 text-gray-900 border-2 border-blue-400"},D={key:1,class:"text-center"},K=u(()=>t("button",{class:"btn loader btn-primary"},"Loading...",-1)),q=[K];function G(e,s,r,m,n,i){return l(),a("div",T,[t("div",null,[t("h1",C,"Written Exam Leaderboard-"+d(this.$route.params.id),1),B,j,t("div",I,[t("div",A,[g(t("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>n.search=o),placeholder:"Search by Name/College",onKeyup:s[1]||(s[1]=(...o)=>i.searchResult&&i.searchResult(...o)),class:"input input-primary input-bordered"},null,544),[[f,n.search]])]),t("div",M,[n.allresult.length>0?(l(),a("div",z,[(l(!0),a(x,null,y(n.testResults,(o,c)=>(l(),a("div",{key:c,id:o.roll,class:k(`${i.getborderStyle(c+1)} flex justify-between items-center p-5   rounded  shadow-md ${o.roll==i.user.roll?"bg-green-200":""}`),style:{"scroll-margin":"100px"}},[t("span",F,d(c+1),1),t("div",N,[t("h2",V,d(o.name),1)]),t("div",$,d(o.marks!=""?o.marks:"TBA"),1)],10,E))),128))])):(l(),a("div",D,q))])])])])}var W=L(S,[["render",G],["__scopeId","data-v-73bad437"]]);export{W as default};
