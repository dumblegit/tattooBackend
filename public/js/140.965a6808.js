"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[140],{8140:function(t,a,e){e.r(a),e.d(a,{default:function(){return u}});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("br"),e("h1",{staticClass:"my-5"},[t._v("Edición de tatuaje 🛠")]),e("div",{staticClass:"d-flex flex-column align-items-center"},[e("form",{on:{submit:function(a){return a.preventDefault(),t.actualizarTatuaje(t.tatuaje)}}},[e("div",{staticClass:"row d-flex align-items-center justify-content-center"},[e("div",{staticClass:"col d-flex flex-column justify-content-evenly my-2 px-3",attrs:{id:"form"}},[e("h3",{staticClass:"mt-3"},[t._v("Tatuaje 💉")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tatuaje.nombre,expression:"tatuaje.nombre"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Nombre",required:""},domProps:{value:t.tatuaje.nombre},on:{input:function(a){a.target.composing||t.$set(t.tatuaje,"nombre",a.target.value)}}}),e("div",{staticClass:"d-flex justify-content-center mt-3"},[e("p",[t._v("¿Lo has tatuado ya?")]),e("div",{staticClass:"form-check mx-5"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tatuaje.tatuado,expression:"tatuaje.tatuado"}],staticClass:"form-check-input",attrs:{type:"radio",name:"flexRadioDefault",id:"noTatuado",value:"false",checked:"",required:""},domProps:{checked:t._q(t.tatuaje.tatuado,"false")},on:{change:function(a){return t.$set(t.tatuaje,"tatuado","false")}}}),e("label",{staticClass:"form-check-label",attrs:{for:"noTatuado"}},[t._v("No")])]),e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tatuaje.tatuado,expression:"tatuaje.tatuado"}],staticClass:"form-check-input",attrs:{type:"radio",name:"flexRadioDefault",id:"siTatuado",value:"true",required:""},domProps:{checked:t._q(t.tatuaje.tatuado,"true")},on:{change:function(a){return t.$set(t.tatuaje,"tatuado","true")}}}),e("label",{staticClass:"form-check-label",attrs:{for:"siTatuado"}},[t._v("Si")])])]),e("div",{staticClass:"input-group mb-2 d-flex align-items-center"},[e("span",{staticClass:"mx-2"},[t._v("Autores")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.tatuaje.autor,expression:"tatuaje.autor"}],staticClass:"form-control",attrs:{id:"seleccion"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.tatuaje,"autor",a.target.multiple?e:e[0])}}})]),e("div",{staticClass:"input-group d-flex align-items-center"},[t._m(0),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tatuaje.precio,expression:"tatuaje.precio"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Precio",required:""},domProps:{value:t.tatuaje.precio},on:{input:function(a){a.target.composing||t.$set(t.tatuaje,"precio",a.target.value)}}})]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tatuaje.aboutTattoo,expression:"tatuaje.aboutTattoo"}],staticClass:"form-control my-2",attrs:{placeholder:"Descripción",required:""},domProps:{value:t.tatuaje.aboutTattoo},on:{input:function(a){a.target.composing||t.$set(t.tatuaje,"aboutTattoo",a.target.value)}}})]),e("div",{staticClass:"col my-2"},[e("form",{attrs:{enctype:"multipart/form-data"}},[e("div",{staticClass:"drop-container"},[e("div",{staticClass:"drop"},[e("svg",{staticClass:"bi bi-images",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"60",height:"60",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"}}),e("path",{attrs:{d:"M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"}})]),e("span",{staticClass:"text"},[t._v("Arrastra tus fotos aqui! 👇")]),t._m(1),e("label",{attrs:{for:"file-upload"}},[t._v("Busca tus fotos")]),e("input",{staticClass:"file-input",attrs:{type:"file",name:"",id:"file-upload"},on:{change:t.subirFile}})])])])])]),e("div",{staticClass:"row"},[e("b-button",{staticClass:"my-4",attrs:{id:"enviar",pill:"",type:"submit"}},[t._v(" Editar ")])],1)])]),e("div",{staticClass:"container"},[e("b-alert",{attrs:{show:t.dismissCountDown,variant:t.mensaje.color},on:{dismissed:function(a){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[e("p",[t._v(t._s(t.mensaje.texto))]),e("b-progress",{attrs:{variant:t.mensaje.color,max:t.dismissSecs,value:t.dismissCountDown,height:"4px"}})],1)],1),e("div",{staticClass:"container d-flex flex-wrap justify-content-center",attrs:{id:"mostrarImagenes"}},t._l(t.tatuaje.imagenes,(function(a,s){return e("div",{key:s,staticClass:"cajaTattoo"},[e("img",{staticClass:"imagenTattoo",attrs:{src:t.src+a,alt:"tattoo img"}}),e("img",{staticClass:"xTattoo",attrs:{src:"X.png"},on:{click:function(e){return t.showMsgBox(a)}}})])})),0)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text",attrs:{id:"apend"}},[t._v("€")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"or-con"},[e("span",{staticClass:"line"}),e("span",{staticClass:"or"},[t._v("O")]),e("span",{staticClass:"line"})])}],o={data(){return{box:"",src:"https://tattoo-backend.vercel.app/",tatuajes:[],dismissSecs:5,dismissCountDown:0,showDismissibleAlert:!1,mensaje:{color:"",texto:""},tatuaje:{nombre:"",tatuado:Boolean,autor:"",imagenes:Array(),imagen:null,precio:0,aboutTattoo:""},autores:[],files:[]}},created(){if("true"!=localStorage.getItem("tatuador")||void 0==location.href.split("?id=")[1])this.$router.go(-1);else{const t=location.href.split("?id=")[1];this.axios.get("tatuajes/listar/"+t).then((t=>{this.tatuaje=t.data})).catch((t=>{console.log(t.response)})),this.axios.get("/usuarios/tatuadores").then((t=>{this.autores=t.data,this.insertarTatuadores(this.autores)})).catch((t=>{console.log(t)}))}},methods:{alertaTrue(){this.mensaje.color="primary",this.mensaje.texto="Tatuaje editado con exito! 👌",this.showAlert()},alertaFalse(){this.mensaje.color="warning",this.mensaje.texto="Error :(",this.showAlert()},actualizarTatuaje(t){this.axios.put("tatuajes/actualizar/"+t._id,t).then((t=>{this.tatuaje=t.data,this.alertaTrue()})).catch((t=>{this.alertaFalse()}))},insertarTatuadores(t){document.getElementById("seleccion").innerHTML="<option value=''>Desconocido</option>";for(var a=0;a<t.length;a++)t[a]._id==this.tatuaje.autor?document.getElementById("seleccion").innerHTML+='\n          <option value="'+t[a]._id+'" selected>'+t[a].nombre+"</option>":document.getElementById("seleccion").innerHTML+='\n          <option value="'+t[a]._id+'">'+t[a].nombre+"</option>"},subirFile(t){var a,e=t.target.files[0];const s=["image/jpg","image/jpeg","image/png"];s.includes(e.type)&&(this.tatuaje.imagen=e);const i=new FormData;i.append("imagen",e),this.axios.post("/tatuajes/agregarFoto",i).then((t=>{this.tatuaje.imagenes.push(t.data),a=t.data})).catch((t=>{this.alertaFalse()})).finally((t=>{this.tatuaje.imagen=a,this.axios.put("tatuajes/nuevaImagen/"+this.tatuaje._id,this.tatuaje).then((t=>{})).catch((t=>{this.alertaFalse()}))}))},eliminarImagen(t){this.tatuaje.imagen=t,this.axios.put("tatuajes/borrarImagen/"+this.tatuaje._id,this.tatuaje).then((t=>{window.location.href=window.location.href})).catch((t=>{this.alertaFalse()}))},countDownChanged(t){this.dismissCountDown=t,"primary"==this.mensaje.color&&setTimeout((()=>{window.location.href="/"}),5e3)},showAlert(){this.dismissCountDown=this.dismissSecs},showMsgBox(t){this.boxTwo="",this.$bvModal.msgBoxConfirm("¿Quieres eliminarlo?",{title:"Por favor, confirme",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"ELIMINAR",cancelTitle:"CANCELAR",footerClass:"p-2",hideHeaderClose:!1,backgroundColor:"success",centered:!0}).then((a=>{this.box=a,1==this.box&&this.eliminarImagen(t)})).catch((t=>{console.log(t)}))},setFile(t){var a,e=t[0];const s=["image/jpg","image/jpeg","image/png"];s.includes(e.type)&&(this.tatuaje.imagen=e);const i=new FormData;i.append("imagen",e),this.axios.post("/tatuajes/agregarFoto",i).then((t=>{this.tatuaje.imagenes.push(t.data),a=t.data})).catch((t=>{this.alertaFalse()})).finally((t=>{this.tatuaje.imagen=a,this.axios.put("tatuajes/nuevaImagen/"+this.tatuaje._id,this.tatuaje).then((t=>{})).catch((t=>{this.alertaFalse()}))}))}},mounted:function(){const t=document.querySelector(".drop"),a=document.querySelector(".text");t.addEventListener("dragover",(e=>{e.preventDefault(),a.innerHTML="Suelte el mouse para que caiga",t.classList.add("active")})),t.addEventListener("dragleave",(e=>{e.preventDefault(),a.innerHTML="Arrastra tus fotos aquí! 👇",t.classList.remove("active")})),t.addEventListener("drop",(a=>{a.preventDefault(),t.classList.remove("active"),this.setFile(a.dataTransfer.files)}))}},n=o,r=e(1001),l=(0,r.Z)(n,s,i,!1,null,null,null),u=l.exports}}]);
//# sourceMappingURL=140.965a6808.js.map