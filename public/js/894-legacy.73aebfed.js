"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[894],{9894:function(t,a,e){e.r(a),e.d(a,{default:function(){return l}});var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex flex-column align-items-center"},[e("br"),e("h1",{staticClass:"my-5"},[t._v("Pide una Cita")]),e("form",{staticClass:"d-flex flex-column align-items-center",on:{submit:function(a){return a.preventDefault(),t.pedirCita()}}},[e("div",{staticClass:"px-5 pb-3",attrs:{id:"form"}},[e("h3",{staticClass:"mt-3"},[t._v("Cita 📝")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.citaAux.tatuador,expression:"citaAux.tatuador"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Tatuador",required:"",disabled:""},domProps:{value:t.citaAux.tatuador},on:{input:function(a){a.target.composing||t.$set(t.citaAux,"tatuador",a.target.value)}}}),e("div",{staticClass:"d-flex align-items-center"},[e("label",{staticClass:"m-2",attrs:{for:"date"}},[t._v("Fecha")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cita.fechaCita,expression:"cita.fechaCita"}],staticClass:"form-control my-2",attrs:{type:"date",id:"date",required:""},domProps:{value:t.cita.fechaCita},on:{change:t.fechaTrue,input:function(a){a.target.composing||t.$set(t.cita,"fechaCita",a.target.value)}}})]),e("div",{staticClass:"input-group mb-2 d-flex align-items-center"},[e("label",{staticClass:"m-2",attrs:{for:"inlineFormInputGroup"}},[t._v("Cliente")]),t._m(0),e("input",{directives:[{name:"model",rawName:"v-model",value:t.citaAux.cliente,expression:"citaAux.cliente"}],staticClass:"form-control my-2",attrs:{type:"text",id:"inlineFormInputGroup",placeholder:"Cliente",required:"",disabled:""},domProps:{value:t.citaAux.cliente},on:{input:function(a){a.target.composing||t.$set(t.citaAux,"cliente",a.target.value)}}})]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.citaAux.tatuaje,expression:"citaAux.tatuaje"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Tatuaje",required:"",disabled:""},domProps:{value:t.citaAux.tatuaje},on:{input:function(a){a.target.composing||t.$set(t.citaAux,"tatuaje",a.target.value)}}})]),e("b-button",{staticClass:"my-4 d-block w-100",attrs:{id:"enviar",pill:"",type:"submit"}},[t._v(" Pedir ")])],1),e("div",{staticClass:"container"},[e("b-alert",{attrs:{show:t.dismissCountDown,variant:t.mensaje.color},on:{dismissed:function(a){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[e("p",[t._v(t._s(t.mensaje.texto))]),e("b-progress",{attrs:{variant:t.mensaje.color,max:t.dismissSecs,value:t.dismissCountDown,height:"4px"}})],1)],1)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text my-2",attrs:{id:"apend"}},[t._v("@")])])}],n=(e(4916),e(3123),e(9600),e(1539),{data:function(){return{dismissSecs:5,dismissCountDown:0,showDismissibleAlert:!1,mensaje:{color:"",texto:""},citas:[],fechaActual:new Date,cita:{tatuador:"",cliente:"",fechaCita:"",precio:"",autorizado:Boolean,tatuaje:""},citaAux:{tatuador:"",cliente:"",tatuaje:""}}},beforeCreate:function(){(null==localStorage.getItem("id")||void 0==location.href.split("?t=")[1]&&void 0==location.href.split("&a=")[1])&&(window.location.href="/login")},created:function(){var t=this,a=location.href.split("?t=")[1],e=a.split("&a=")[0],i=a.split("&a=")[1];this.cita.tatuaje=e,this.cita.cliente=localStorage.getItem("id"),this.citaAux.cliente=localStorage.getItem("usuario"),this.cita.tatuador=i,this.axios.get("/tatuajes/datosCita?t="+a).then((function(a){t.cita.precio=a.data.precio,t.citaAux.tatuador=a.data.autor,t.citaAux.tatuaje=a.data.tatuaje})).catch((function(a){t.alertaFalse()}))},methods:{alertaTrue:function(){this.mensaje.color="success",this.mensaje.texto="Cita pedida con exito! 👌",this.showAlert()},alertaFalse:function(){this.mensaje.color="warning",this.mensaje.texto="Error :(",this.showAlert()},alertaFecha:function(){this.mensaje.color="warning",this.mensaje.texto="La fecha seleccionada no es valida",this.showAlert()},fechaTrue:function(){new Date(this.cita.fechaCita.split("-").join(","))<this.fechaActual&&(this.alertaFecha(),this.cita.fechaCita="")},pedirCita:function(){var t=this;"Sin asignar"==this.cita.tatuador&&(this.cita.tatuador=""),this.axios.post("/citas/agregar",this.cita).then((function(a){t.citas.push(a.data),t.alertaTrue()})).catch((function(a){t.alertaFalse()})).finally((function(a){t.cita.tatuador="",t.cita.cliente="",t.cita.precio="",t.cita.fechaCita=new Date,t.cita.tatuaje="",t.cita.autorizado=!1}))},countDownChanged:function(t){this.dismissCountDown=t,"success"==this.mensaje.color&&setTimeout((function(){window.location.href="/"}),5e3)},showAlert:function(){this.dismissCountDown=this.dismissSecs}}}),o=n,c=e(1001),r=(0,c.Z)(o,i,s,!1,null,null,null),l=r.exports}}]);
//# sourceMappingURL=894-legacy.73aebfed.js.map