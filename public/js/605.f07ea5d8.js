"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[605],{3605:function(a,t,e){e.r(t),e.d(t,{default:function(){return l}});var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"d-flex flex-column align-items-center"},[e("br"),e("h1",{staticClass:"my-5"},[a._v("Te damos la Bienvenida 👋")]),e("form",{staticClass:"d-flex flex-column align-items-center",attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),a.agregarUsuario()}}},[e("div",{staticClass:"container px-5 pb-3",attrs:{id:"form"}},[e("h3",{staticClass:"mt-3"},[a._v("Nuevo usuario")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.usuario.nombre,expression:"usuario.nombre"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Nombre",required:""},domProps:{value:a.usuario.nombre},on:{input:function(t){t.target.composing||a.$set(a.usuario,"nombre",t.target.value)}}}),e("div",{staticClass:"d-flex justify-content-center mt-3"},[e("p",[a._v("Tipo de usuario")]),e("div",{staticClass:"form-check mx-5"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.usuario.tatuador,expression:"usuario.tatuador"}],staticClass:"form-check-input",attrs:{type:"radio",name:"flexRadioDefault",id:"tatuador",value:"true"},domProps:{checked:a._q(a.usuario.tatuador,"true")},on:{change:function(t){return a.$set(a.usuario,"tatuador","true")}}}),e("label",{staticClass:"form-check-label",attrs:{for:"tatuador"}},[a._v("Tatuador")])]),e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.usuario.tatuador,expression:"usuario.tatuador"}],staticClass:"form-check-input",attrs:{type:"radio",name:"cliente",id:"cliente",value:"false"},domProps:{checked:a._q(a.usuario.tatuador,"false")},on:{change:function(t){return a.$set(a.usuario,"tatuador","false")}}}),e("label",{staticClass:"form-check-label",attrs:{for:"cliente"}},[a._v(" Cliente ")])])]),e("div",{staticClass:"d-flex"},[e("label",{attrs:{for:"date"}},[a._v("Fecha de nacimiento")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.usuario.fechaNacimiento,expression:"usuario.fechaNacimiento"}],staticClass:"form-control my-2",attrs:{type:"date",id:"date",required:""},domProps:{value:a.usuario.fechaNacimiento},on:{input:function(t){t.target.composing||a.$set(a.usuario,"fechaNacimiento",t.target.value)}}})]),e("div",{staticClass:"d-flex align-items-center"},[a._v(" Foto de perfil "),e("input",{staticClass:"form-control m-2",attrs:{id:"fotoPerfil",type:"file",required:""},on:{change:a.agregarFile}})]),e("div",{staticClass:"input-group mb-2"},[a._m(0),e("input",{directives:[{name:"model",rawName:"v-model",value:a.usuario.usuario,expression:"usuario.usuario"}],staticClass:"form-control my-2",attrs:{type:"text",id:"inlineFormInputGroup",placeholder:"Username",required:""},domProps:{value:a.usuario.usuario},on:{input:function(t){t.target.composing||a.$set(a.usuario,"usuario",t.target.value)}}})]),e("div",[e("b-form",{on:{submit:function(a){a.stopPropagation(),a.preventDefault()}}},[e("b-form-input",{attrs:{type:"password",placeholder:"Contraseña",state:a.validation,id:"feedback-user"},model:{value:a.usuario.password,callback:function(t){a.$set(a.usuario,"password",t)},expression:"usuario.password"}}),e("b-form-invalid-feedback",{attrs:{state:a.validation}},[a._v(" Debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. ")]),e("b-form-valid-feedback",{attrs:{state:a.validation}},[a._v(" ok. ")])],1)],1)]),e("b-button",{staticClass:"my-4 d-block w-100",attrs:{id:"enviar",pill:"",type:"submit"}},[a._v(" Enviar ")])],1),e("div",{staticClass:"container"},[e("b-alert",{attrs:{show:a.dismissCountDown,variant:a.mensaje.color},on:{dismissed:function(t){a.dismissCountDown=0},"dismiss-count-down":a.countDownChanged}},[e("p",[a._v(a._s(a.mensaje.texto))]),e("b-progress",{attrs:{variant:a.mensaje.color,max:a.dismissSecs,value:a.dismissCountDown,height:"4px"}})],1)],1)])},i=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text my-2",attrs:{id:"apend"}},[a._v("@")])])}],o={data(){return{usuarios:[],dismissSecs:5,dismissCountDown:0,showDismissibleAlert:!1,mensaje:{color:"",texto:""},usuario:{nombre:"",tatuador:Boolean,fechaNacimiento:null,fotoPerfil:"",usuario:"",password:"",aboutYou:""},valida:""}},computed:{validation(){var a=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;return a.test(this.usuario.password)?this.valida=!0:this.valida=!1,a.test(this.usuario.password)}},beforeCreated(){"true"!=localStorage.getItem("tatuador")&&this.$router.go(-1)},methods:{alertaTrue(){this.mensaje.color="success",this.mensaje.texto="Usuario agregado con exito! 👌",this.showAlert()},alertaFalse(){this.mensaje.color="warning",this.mensaje.texto="Error :(",this.showAlert()},alertaNombre(){this.mensaje.color="warning",this.mensaje.texto="Nombre de usuario ya existente",this.showAlert()},agregarUsuario(){this.axios.post("/usuarios/comprobarUsuario",this.usuario).then((a=>{if(0==a.data.existe){if(1==this.valida){const a=new FormData;a.append("fotoPerfil",this.usuario.fotoPerfil),this.axios.post("/usuarios/agregarFoto",a).then((a=>{this.usuarios.push(a.data),this.usuario.fotoPerfil=a.data,this.alertaTrue()})).catch((a=>{this.alertaFalse()})).finally((a=>{this.axios.post("/usuarios/agregar",this.usuario).then((a=>{this.usuarios.push(a.data),this.alertaTrue()})).catch((a=>{this.alertaFalse()})).finally((a=>{this.usuario.nombre="",this.usuario.tatuador="",this.usuario.fotoPerfil="",this.usuario.fechaNacimiento=new Date,this.usuario.usuario="",this.usuario.password=""}))}))}}else this.alertaNombre()}))},agregarFile(a){var t=a.target.files[0];const e=["image/jpg","image/jpeg","image/png"];e.includes(t.type)?this.usuario.fotoPerfil=t:(alert("Solo imagenes con formato jpg, jpeg o png"),a.target.value="")},countDownChanged(a){this.dismissCountDown=a,"success"==this.mensaje.color&&setTimeout((()=>{window.location.href="/usuarios"}),5e3)},showAlert(){this.dismissCountDown=this.dismissSecs}}},r=o,u=e(1001),n=(0,u.Z)(r,s,i,!1,null,null,null),l=n.exports}}]);
//# sourceMappingURL=605.f07ea5d8.js.map