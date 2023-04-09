import{E as f,j as o,k as s,l as i,m as x,y as c,F as u,x as h,G as m}from"./index.f2e7adf1.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";const _={data(){return{solution:[],loading:!1,unknown:!1,download:""}},methods:{downloadQuestion(){window.open(this.download,"_blank")},endalert(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink(){fetch(`${f}?type=examlist&id=${this.$route.params.id}`).then(l=>l.json()).then(l=>{this.url="https://script.google.com/macros/s/AKfycbwzA-t_cUmiQpA7ArN8OEl_LBeu-JM9VgjrX3x0Camq-lsSt2Gd0xPZ3flPFyBipAQkJw/exec?sheet="+l.exam.exam.substr(39,44),this.download=l.exam.pdfsolve?`https://drive.google.com/uc?id=${l.exam.pdfsolve.substr(32,33)}&export=download`:!1;let a=JSON.parse(localStorage.getItem("engineeringad_22_exam")).roll;fetch(this.url+"&type=check&phone="+a).then(d=>d.json()).then(d=>{d.message=="exists"||new Date(l.exam.end_time).getTime()<Date.now()?(fetch(this.url+"&type=question").then(n=>n.json()).then(n=>{n=n.map(e=>(e.question.includes("https://drive.google.com/file/d/")&&(e.question=e.question.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80).replace("/vie","")),e.a.includes("https://drive.google.com/file/d/")&&(e.a=e.a.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80).replace("/vie","")),e.b.includes("https://drive.google.com/file/d/")&&(e.b=e.b.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80).replace("/vie","")),e.c.includes("https://drive.google.com/file/d/")&&(e.c=e.c.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80).replace("/vie","")),e.d.includes("https://drive.google.com/file/")&&(e.d=e.d.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80).replace("/vie","")),e.e&&e.e.includes("https://drive.google.com/file/")&&(e.e=e.e.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80).replace("/vie","")),e.correct.includes("https://drive.google.com/file")&&(e.correct=e.correct.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80).replace("/vie","")),e.explain.includes("https://drive.google.com/file")&&(e.explain=e.explain.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80).replace("/vie","")),e)),this.solution=n}),this.loading=!1):(this.$router.push("/"),this.unknown=!0)})})}},created(){this.getQuestionLink()}},w={key:0},b={key:0,class:"pb-10"},y={class:"py-4 text-center"},k={class:"text-2xl font-bold text-gray-800 poppins"},L={class:"mx-auto md:w-2/3"},j=["href"],M={class:"mx-2 md:w-2/3 md:mx-auto print:text-black",ref:"content"},S=["src"],T=["innerHTML"],$={class:"mt-3 space-y-2"},A=["src"],B=["innerHTML"],H={key:2,class:"my-2 poppins"},E=["src"],Q=["innerHTML"],C={key:1},D=i("h2",{class:"mt-10 text-2xl text-center"}," You must participate in the exam or you will not be able to view this solution untill time ends. ",-1),N=[D],z={key:1,class:"flex items-center justify-center w-full h-screen"},F=i("div",{class:"flex items-center justify-center -mt-24 space-x-1 text-sm text-gray-700"},[i("svg",{fill:"none",class:"w-10 h-10 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[i("path",{"clip-rule":"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor","fill-rule":"evenodd"})]),i("div",{class:"text-lg"},"Loading ...")],-1),J=[F];function V(l,a,d,n,e,G){return e.solution.length>0?(o(),s("div",w,[e.unknown?(o(),s("div",C,N)):(o(),s("div",b,[i("div",y,[i("h1",k," Solution for Exam - "+x(this.$route.params.id),1)]),i("div",L,[e.download?(o(),s("a",{key:0,class:"btn",href:e.download,target:"_blank"},"Download Solution",8,j)):c("",!0)]),i("div",M,[(o(!0),s(u,null,h(e.solution,(t,p)=>(o(),s("div",{key:p,class:"p-5 mx-auto my-3 text-lg bg-white border border-gray-300 rounded-md shadow-lg print:border-none print:shadow-none print:p-1 kalpurush"},[t.question.includes("drive.google.com")?(o(),s("img",{key:0,src:t.question,class:"object-contain w-full py-3",alt:""},null,8,S)):(o(),s("div",{key:1,class:"inline-flex print:text-black",innerHTML:`<span class='mr-2'>${p+1})</span  >`+t.question},null,8,T)),i("div",$,[(o(),s(u,null,h(["a","b","c","d","e"],(r,g)=>i("div",{key:g,class:m(["flex flex-col p-3 rounded shadow",{"border-2 border-green-500 print:border-gray-900":t[r]==t.correct}])},[t[r]&&t[r].includes("drive.google.com")?(o(),s("img",{key:0,src:t[r],class:"object-contain w-full py-3",alt:""},null,8,A)):t[r]?(o(),s("div",{key:1,innerHTML:t[r]},null,8,B)):c("",!0)],2)),64))]),t.explain?(o(),s("h2",H,"Explain:")):c("",!0),t.explain&&t.explain.includes("drive.google.com")?(o(),s("img",{key:3,src:t.question,class:"object-contain w-full py-3",alt:""},null,8,E)):t.explain?(o(),s("div",{key:4,class:"p-3 my-3 bg-white border border-green-500 rounded print:text-black",innerHTML:t.explain},null,8,Q)):c("",!0)]))),128))],512)]))])):(o(),s("div",z,J))}var I=v(_,[["render",V]]);export{I as default};
