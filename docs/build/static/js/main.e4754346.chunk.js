(this["webpackJsonpproject-final-frontend-web-development"]=this["webpackJsonpproject-final-frontend-web-development"]||[]).push([[0],{39:function(e,t,a){},41:function(e,t,a){},47:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),i=a(32),r=a.n(i),l=(a(39),a(40),a(21),a(12)),o=a(2);a(41),a(42);var d=function(){return Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark navbar-purple",children:[Object(n.jsx)(l.b,{className:"navbar-brand disabled",to:"/",children:"S11720037"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(n.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"nav-item active",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/project-final-fwd/",children:"Home"})}),Object(n.jsx)("li",{className:"nav-item active",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/project-final-fwd/about",children:"About"})})]})})]})},b=a(8),j=a(9),h=a(11),u=a(10);a(47);var m=function(e){var t=null;return t=e.overview.length>150?e.overview.substring(0,150)+"...":e.overview,Object(n.jsx)("div",{className:"col mb-4",children:Object(n.jsxs)("div",{className:"card h-100 shadow-sm",children:[Object(n.jsx)(l.b,{to:"/detail/".concat(e.movie_id,"/"),children:Object(n.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster),className:"card-img-top",alt:e.name})}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title text-center",children:e.name}),Object(n.jsx)("p",{className:"card-text",children:t})]})]})})},v=a(13),p=a(15),x=a.n(p),O=(a(65),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={text:""},n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n.handleChange=n.handleChange.bind(Object(v.a)(n)),n}return Object(j.a)(a,[{key:"handleChange",value:function(e){this.setState({text:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.state.text.length>0?x.a.get("https://api.themoviedb.org/3/search/movie/?api_key=44fe7789424456fbecf20efec24af7a4&query=".concat(this.state.text)).then((function(e){var a=e.data;t.props.Callback(a)})):alert("Can't empty")}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"input-group mb-3",children:[Object(n.jsx)("input",{type:"text",className:"form-control",id:"search",name:"search",placeholder:"Search Movie...",onChange:this.handleChange,value:this.state.text}),Object(n.jsx)("div",{className:"input-group-append",children:Object(n.jsx)("button",{type:"submit",className:"btn btn-purple",onClick:this.handleSubmit,children:"Search"})})]})}}]),a}(s.a.Component)),f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).callbackFunction=function(e){n.setState({movies:e})},n.state={success:!1,movie:""},n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://api.themoviedb.org/3/trending/movie/week?api_key=44fe7789424456fbecf20efec24af7a4&page=1").then((function(t){var a=t.data;e.setState({success:!0,movies:a})}))}},{key:"render",value:function(){return!0===this.state.success?Object(n.jsxs)("div",{className:"container-sm mt-4",children:[Object(n.jsx)(O,{Callback:this.callbackFunction}),Object(n.jsx)("div",{className:"row row-cols-1 row-cols-md-3",children:this.state.movies.results.map((function(e){return Object(n.jsx)(m,{name:e.title,overview:e.overview,poster:e.poster_path,movie_id:e.id},e.id)}))})]}):Object(n.jsx)("div",{className:"container-sm mt-4 main-background rounded shadow p-2",children:Object(n.jsx)("h2",{className:"text-center",children:"Please Wait"})})}}]),a}(s.a.Component),g=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container-sm mt-4 pb-3 rounded shadow bg-white",children:[Object(n.jsx)("br",{}),Object(n.jsx)("h3",{className:"text-center",children:"Arter Tendean"}),Object(n.jsx)("hr",{}),Object(n.jsx)("p",{children:"Saya berasal dari Bumi dan saat ini sedang berkuliah pada salah satu perguruan tinggi swasta yang ada di provinsi saya yaitu Universitas Klabat."}),Object(n.jsxs)("p",{children:["Website ini saya dibuat sebgai tugas akhir untuk mata kuliah yang saya ambil yaitu Frontend Web Development yang diajarkan oleh dosen saya sir ",Object(n.jsx)("a",{href:"http://fik.unklab.ac.id/web/Faculty/details/reymon-rotikan",target:"_blank",rel:"noreferrer",children:"Reymon Rotikan"})," "]}),Object(n.jsxs)("p",{children:["Website ini dibuat dengan menggunakan Reactjs, dan semua data yang ditampilkan pada halaman awal diambil dari API ",Object(n.jsx)("a",{href:"https://www.themoviedb.org/",target:"_blank",rel:"noreferrer",children:"themoviedb"}),". themoviedb mewajibkan kita untuk menggunakan api key saat akan mengambil data, jadi kita harus mendaftar dan membuat aplikasinya terlebih dahulu sebelum bisa menggunakan layanan API mereka."]})]})}}]),a}(s.a.Component),k=(a(66),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={success:!1},n.getVideoInfo=n.getVideoInfo.bind(Object(v.a)(n)),n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getVideoInfo()}},{key:"getVideoInfo",value:function(){var e=this,t=window.location.href.split("/")[4];void 0!==t&&x.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=44fe7789424456fbecf20efec24af7a4")).then((function(t){var a=t.data;e.setState({success:!0,video:a})})).catch((function(e){alert(e)}))}},{key:"render",value:function(){return!0!==this.state.success?Object(n.jsx)("div",{className:"text-center mt-5",children:Object(n.jsx)("h2",{className:"text-center",children:"Please wait..."})}):!0===this.state.success?Object(n.jsx)("div",{className:"container-fluid pt-4",children:Object(n.jsx)("div",{className:"card mb-3",children:Object(n.jsxs)("div",{className:"row no-gutters",children:[Object(n.jsx)("div",{className:"col-md-4 p-2 shadow-sm",children:Object(n.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(this.state.video.poster_path),className:"card-img",alt:"..."})}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"col-md-8",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h3",{className:"card-title text-center",children:this.state.video.original_title}),Object(n.jsx)("hr",{className:"p-0 m-0"}),Object(n.jsxs)("small",{className:"text-muted label label-success",children:["Release Date: ",this.state.video.release_date]}),Object(n.jsx)("p",{className:"card-text mt-3",children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."})]})})]})})}):void 0}}]),a}(s.a.Component));var w=function(){return Object(n.jsx)(l.a,{children:Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)(d,{}),Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{exact:!0,path:"/project-final-fwd/",children:Object(n.jsx)(f,{})}),Object(n.jsx)(o.a,{exact:!0,path:"/project-final-fwd/about/about",children:Object(n.jsx)(g,{})}),Object(n.jsx)(o.a,{path:"/project-final-fwd/detail",children:Object(n.jsx)(k,{})})]})]})})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),N()}},[[67,1,2]]]);