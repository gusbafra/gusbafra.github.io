/*
VERSÃO EM PORTUGUÊS:

REPARTIÇÃO JavaScript da "GUSTOPPENLIB"
CRIADO POR: Gustavo Bayeux Franco
GERIDO PELA: GusToppen
ADAPTADA PARA:
VERSÃO ATUAL: 0.0.5
LANÇADA EM: 10/04/2021

➟ AVISO: A GUSTOPPEN RECOMENDA O USO DESTA BIBLIOTECA
SOMENTE COMO AUXÍLIO AO SEU PRÓPRIO CÓDIGO CSS
OU OUTRA BIBLIOTECA PRINCIPAL.

TERMOS DE USO:
 1) É proibida a utilização deste código fonte em projetos não 
   desenvolvidos pela empresa GusToppen. 

 2) No caso de você desejar copiar e reutilizar este código
 em outros projetos, altere ele de acordo com suas necessidades.

_______________________________________

ENGLISH VERSION:

JavaScript part of "GUSTOPPENLIB"
CREATED BY: Gustavo Bayeux Franco
MANAGED BY: GusToppen
ADAPTED TO: 
CURRENT VERSION: 0.0.5
RELEASED ON: 10/04/2021

➟ WARNING: GUSTOPPEN RECOMMENDS THE USE OF THIS LIBRARY
ONLY AS AID TO YOUR OWN CSS CODE
OR OTHER MAIN LIBRARY.

TERMS OF USE:
 1) It is prohibited to use this source code in projects not
   developed by the company GusToppen.

 2) In case you want to copy and reuse this code
 in other projects, change it according to your needs.

*/

//Aparência
window.onload = function loader() {

  if (window.jQuery) {
  } else {
    console.log("%cJQuery não foi carregado corretamente!",'color:red; font-size:3.2em;  -webkit-text-stroke: 0.5px black; text-shadow:0px 0px 20px black;');
  }

  setTimeout(mostrarpagina, 600)
  $(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
      return false;
    }
  });
  $('.right').parent().addClass('absolute');
  $('.left').parent().addClass('absolute');
  $('.direita').parent().addClass('absolute');
  $('.esquerda').parent().addClass('absolute');

}

function mostrarpagina() {
  document.getElementById("content").classList.add("animation_fade-in");
  document.getElementById("content").style.display = "inherit";
}

//Inputs
$(document).ready(function () {
  $(window).keydown(function (event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});

//Phone
$().ready(() => {
  var maskToggle = {

    placeholder: " ",
    _onKeyPress: function (content, e, field, options) {
      var formats = ["(00) 0000-00009", "(00) 00000-0000"],
        digits = content.replace(/[^0-9]/g, "").length,
        activeMask = digits <= 10 ? formats[0] : formats[1]; $(".phone").mask(activeMask, options);
    },
    get onKeyPress() {
      return this._onKeyPress;
    },
    set onKeyPress(value) {
      this._onKeyPress = value;
    },
  }; $(".input_phone").mask("(00) 0000-0000", maskToggle);
});
$().ready(() => {
  var maskToggle = {

    placeholder: " ",
    _onKeyPress: function (content, e, field, options) {
      var formats = ["(00) 0000-00009", "(00) 00000-0000"],
        digits = content.replace(/[^0-9]/g, "").length,
        activeMask = digits <= 10 ? formats[0] : formats[1]; $(".input_phone").mask(activeMask, options);
    },
    get onKeyPress() {
      return this._onKeyPress;
    },
    set onKeyPress(value) {
      this._onKeyPress = value;
    },
  }; $(".input_telefone").mask("(00) 0000-0000", maskToggle);
});
//E-Mail
function verifyEmail(email) {
  const regexEmail = /\S+@\S+\.\S+/;
  if (email == null || email == '') {
    return false;
  } else if (regexEmail.test(String(document.getElementById(email).value).toLowerCase()) == false) {
    return true;
  } else {
    return false;
  }
}
//Password
function verifyPass(password, strong = null, count = null) {
  const upperCase = /[A-Z]+/;
  if (strong != null) {

    if (password == null || password == '') {
      return false;
    } else if (password.length < 8) {
      return false;
    } else if (contains(password, 'pass') || contains(password, 'word') || contains(password, 'qwerty') || contains(password, '1234')) {
      return false;
    } else if (contains(password, '*') || contains(password, '!') || contains(password, '@') || contains(password, '$') || contains(password, '%') || contains(password, '&') || contains(password, '#')) {
      if (upperCase.test(String(document.querySelector(password).value).toLowerCase()) == true) {
        return true;
      }
    } else {
      return false;
    }

  } else if (count != null) {
    var strength = 0;
    if (password.match(/[a-z]+/)) {
      strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
      strength += 1;
    }
    if (password.match(/[0-9]+/)) {
      strength += 1;
    }
    if (password.match(/[$@#&!]+/)) {
      strength += 1;
    }
    if (password.length > 7) {
      strength += 1;
    }
    if (contains(password, 'pass') || contains(password, 'word') || contains(password, 'qwerty') || contains(password, '1234')) {
    } else {
      strength += 1;
    }
    return strength;
  } else if (strong == null & password == null) {
    const regexPass = /[A-z0-9\p{P}\p{S}][A-z0-9\p{P}\p{S}][A-z0-9\p{P}\p{S}][A-z0-9\p{P}\p{S}]/;
    if (password == null || password == '') {
      return false;
    } else if (regexPass.test(String(document.querySelector(password).value).toLowerCase()) == true) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }

}
//CEP
$(document).ready(function () { $('input_cep').mask('99999-999'); });
function verifyCep(cep, country) {
  if (country.toLowerCase() == 'brazil' || country.toLowerCase() == 'brasil' || country.toLowerCase() == 'br' || country.toLowerCase() == 'pt-BR') {
    const regexCep = /[0-9]{5}-[\d]{3}/;
    if (regexCep.test(String(document.querySelector(cep).value).toLowerCase()) == true) {
      return true;
    } else {
      return false;
    }
  } else if (country.toLowerCase() == 'eua' || country.toLowerCase() == 'usa' || country.toLowerCase() == 'united states') {
    const regexZip = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (regexZip.test(String(document.querySelector(cep).value).toLowerCase()) == true) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
//File
function file(id, fileid, msg) {
  const oldmsg = '<i class="fas fa-link"></i><p> O arquivo não foi anexado.</p>';
  let file = document.getElementById(id);
  if (document.getElementById(fileid).files.length < 1 || document.getElementById(fileid) == undefined) {
    if (oldmsg == null || oldmsg == "") {
      file.innerHTML = '<i class="fas fa-link"></i><p>Clique e anexe aqui.</p>';
    } else {
      file.innerHTML = oldmsg;
    }
  } else {
    if (msg == null || msg == "") {
      file.innerHTML = 'Anexado ✓';
    } else {
      file.innerHTML = msg;
    }
  }
}

//Segurança
window.addEventListener('contextmenu', e => { e.preventDefault(); });

var userLang = navigator.language || navigator.userLanguage;
if (userLang != 'pt-BR') {
  console.log('%cWarning!', 'color:red; font-size:5em;  -webkit-text-stroke: 0.5px black; text-shadow:0px 0px 20px black;');
  console.log("%cThis is a browser feature aimed at developers, if someone told you to copy and paste something here or from here, doing this can put your information at risk.", 'font-size:2em; ');
} else if (userLang == 'pt-BR') {
  console.log('%cAtenção!', 'color:red; font-size:5em;  -webkit-text-stroke: 0.5px black; text-shadow:0px 0px 20px black;');
  console.log("%cEste é um recurso do navegador voltado para desenvolvedores, se alguém te disse para copiar e colar algo aqui ou daqui saiba que fazer isso pode colocar suas informações em risco.", 'font-size:2em; ');

}

function steps(actual, next) {

  document.querySelector(actual).style.display = "none";
  document.querySelector(next).style.display = "inherit";

}
function addClass(classes,element){
    if(classes != '' && element != ''){
     document.querySelector(element).classList.add(classes);
    }else{
      return false;
    }
 }
function removeClass(classes,element){
    if(classes != '' && element != ''){
     document.querySelector(element).classList.remove(classes);
    }else{
      return false;
    }
 } 
function addParam(param){
    let stateObj = { id: "100" };
    window.history.pushState(stateObj, "Alternate",param);
}
