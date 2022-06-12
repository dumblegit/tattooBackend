"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[220],{9220:function(a,t,s){s.r(t),s.d(t,{default:function(){return l}});var e=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"d-flex flex-column align-items-center"},[s("br"),s("h1",{staticClass:"my-5"},[a._v("Edición de usuario 🛠")]),s("form",{staticClass:"d-flex flex-column",attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),a.actualizarUsuario(a.usuario)}}},[s("div",{staticClass:"container px-5 pb-3",attrs:{id:"form"}},[s("h3",{staticClass:"mt-3"},[a._v("Usuario")]),s("input",{directives:[{name:"model",rawName:"v-model",value:a.usuario.nombre,expression:"usuario.nombre"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Nombre",required:""},domProps:{value:a.usuario.nombre},on:{input:function(t){t.target.composing||a.$set(a.usuario,"nombre",t.target.value)}}}),a.usuario.admin?s("div",{staticClass:"d-flex justify-content-center mt-3"},[s("p",[a._v("Tipo de usuario:")]),s("div",{staticClass:"form-check mx-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:a.usuario.tatuador,expression:"usuario.tatuador"}],staticClass:"form-check-input",attrs:{type:"radio",name:"flexRadioDefault",id:"tatuador",value:"true",required:""},domProps:{checked:a._q(a.usuario.tatuador,"true")},on:{change:function(t){return a.$set(a.usuario,"tatuador","true")}}}),s("label",{staticClass:"form-check-label",attrs:{for:"tatuador"}},[a._v("Tatuador")])]),s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:a.usuario.tatuador,expression:"usuario.tatuador"}],staticClass:"form-check-input",attrs:{type:"radio",name:"flexRadioDefault",id:"cliente",value:"false",checked:"",required:""},domProps:{checked:a._q(a.usuario.tatuador,"false")},on:{change:function(t){return a.$set(a.usuario,"tatuador","false")}}}),s("label",{staticClass:"form-check-label",attrs:{for:"cliente"}},[a._v("Cliente")])])]):a._e(),s("div",{staticClass:"d-flex"},[s("label",{attrs:{for:"date"}},[a._v("Fecha de nacimiento:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:a.usuario.fechaNacimiento,expression:"usuario.fechaNacimiento"}],staticClass:"form-control my-2",attrs:{type:"date",id:"date",required:""},domProps:{value:a.usuario.fechaNacimiento},on:{input:function(t){t.target.composing||a.$set(a.usuario,"fechaNacimiento",t.target.value)}}})]),s("div",{staticClass:"d-flex align-items-center"},[a._v(" Foto de perfil: "),s("input",{staticClass:"form-control m-2",attrs:{type:"file"},on:{change:a.agregarFile}})]),s("div",{staticClass:"input-group mb-2"},[a._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:a.usuario.usuario,expression:"usuario.usuario"}],staticClass:"form-control my-2",attrs:{type:"text",id:"inlineFormInputGroup",placeholder:"Username",required:""},domProps:{value:a.usuario.usuario},on:{input:function(t){t.target.composing||a.$set(a.usuario,"usuario",t.target.value)}}})]),s("div",[s("b-form",{on:{submit:function(a){a.stopPropagation(),a.preventDefault()}}},[a.accion?s("b-form-input",{attrs:{type:"password",placeholder:"Contraseña",id:"feedback-user"},model:{value:a.usuario.password,callback:function(t){a.$set(a.usuario,"password",t)},expression:"usuario.password"}}):s("b-form-input",{attrs:{type:"password",placeholder:"Contraseña",state:a.validation,id:"feedback-user"},model:{value:a.usuario.password,callback:function(t){a.$set(a.usuario,"password",t)},expression:"usuario.password"}}),a.accion?a._e():s("b-form-invalid-feedback",{attrs:{state:a.validation}},[a._v(" Debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. ")]),a.accion?a._e():s("b-form-valid-feedback",{attrs:{state:a.validation}},[a._v(" ok. ")])],1)],1)]),s("b-button",{staticClass:"my-4",attrs:{id:"enviar",pill:"",type:"submit"}},[a._v("Editar")])],1),s("div",{staticClass:"container"},[s("b-alert",{attrs:{show:a.dismissCountDown,variant:a.mensaje.color},on:{dismissed:function(t){a.dismissCountDown=0},"dismiss-count-down":a.countDownChanged}},[s("p",[a._v(a._s(a.mensaje.texto))]),s("b-progress",{attrs:{variant:a.mensaje.color,max:a.dismissSecs,value:a.dismissCountDown,height:"4px"}})],1)],1)])},i=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text my-2",attrs:{id:"apend"}},[a._v("@")])])}],o={data(){return{usuarios:[],dismissSecs:5,dismissCountDown:0,showDismissibleAlert:!1,mensaje:{color:"",texto:""},usuario:{nombre:"",tatuador:Boolean,fechaNacimiento:"",fotoPerfil:"",usuario:"",password:"",aboutYou:"",archivo:null,acceso:!1,admin:!1},nickname:"",accion:!1,valida:""}},created(){"true"==localStorage.getItem("tatuador")&&(this.accion=!0);var a=location.href.split("?id=")[1];if(void 0==a||"true"!=localStorage.getItem("tatuador")&&a!=localStorage.getItem("id"))this.$router.go(-1);else{"true"==localStorage.getItem("tatuador")&&(this.usuario.acceso=!0,this.usuario.admin=!0);const a=location.href.split("?id=")[1];this.axios.get("usuarios/listar/"+a).then((a=>{this.usuario=a.data,this.nickname=a.data.usuario,this.usuario.fechaNacimiento=a.data.fechaNacimiento.substring(0,10)})).catch((a=>{console.log(a.response)}))}},computed:{validation(){var a=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;return a.test(this.usuario.password)?this.valida=!0:this.valida=!1,a.test(this.usuario.password)}},methods:{alertaArchivoNulo(){this.mensaje.color="warning",this.mensaje.texto="La foto debe ser en formato .jpg .png o .jpeg",this.showAlert()},alertaTrue(){this.mensaje.color="primary",this.mensaje.texto="Usuario editado con exito! 👌",this.showAlert()},alertaFalse(){this.mensaje.color="warning",this.mensaje.texto="Error :(",this.showAlert()},alertaUsuarioExistente(){alert("Nombre de usuario ya existente")},actualizarUsuario(a){1==this.valida&&0==this.accion||1==this.accion?this.axios.post("/usuarios/comprobarUsuario",this.usuario).then((t=>{0==t.data.existe||this.nickname==a.usuario?void 0!=this.usuario.archivo?this.axios.put("usuarios/eliminarFoto/"+a._id,a).then((a=>{})).catch((a=>{this.alertaFalse()})).finally((t=>{const s=new FormData;s.append("fotoPerfil",this.usuario.archivo),this.axios.post("/usuarios/agregarFoto",s).then((a=>{this.usuario.fotoPerfil=a.data})).catch((a=>{this.alertaFalse()})).finally((t=>{this.axios.put("usuarios/actualizar/"+a._id,a).then((a=>{this.usuario.nombre=a.data.nombre,this.usuario.tatuador=a.data.tatuador,this.usuario.fechaNacimiento=a.data.fechaNacimiento,this.usuario.usuario=a.data.usuario,this.usuario.password=a.data.password,this.usuario.aboutYou=a.data.aboutYou,this.usuario.fotoPerfil=a.data,this.alertaTrue()})).catch((a=>{this.alertaFalse()}))}))})):this.axios.put("usuarios/actualizar/"+a._id,a).then((a=>{1==this.valida&&0==this.accion||1==this.accion?(this.usuario.nombre=a.data.nombre,this.usuario.tatuador=a.data.tatuador,this.usuario.fechaNacimiento=a.data.fechaNacimiento,this.usuario.usuario=a.data.usuario,this.usuario.password=a.data.password,this.usuario.aboutYou=a.data.aboutYou,this.alertaTrue()):this.alertaFalse()})).catch((a=>{console.log(a)})):this.alertaUsuarioExistente()})):this.alertaFalse()},agregarFile(a){var t=a.target.files[0];const s=["image/jpg","image/jpeg","image/png"];s.includes(t.type)?this.usuario.archivo=t:(this.alertaArchivoNulo(),a.target.value="")},countDownChanged(a){this.dismissCountDown=a,"primary"==this.mensaje.color&&setTimeout((()=>{this.$router.go(-1)}),5e3)},showAlert(){this.dismissCountDown=this.dismissSecs}}},r=o,u=s(1001),n=(0,u.Z)(r,e,i,!1,null,null,null),l=n.exports}}]);
//# sourceMappingURL=220.0f7a0bc5.js.map