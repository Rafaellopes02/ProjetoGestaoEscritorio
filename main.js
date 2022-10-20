const baseAPI = "http://localhost:4545/api";
const infopessoa = "http://localhost:4545/api/pessoa";
const infohabacademic = "http://localhost:4545/api/habacademic";
const infohobbies = "http://localhost:4545/api/hobbies";
const inforedes = "http://localhost:4545/api/redes";

function btn() {
  $.get(infopessoa, (result) => {
    $("#nome").text(result.data[0].Nome);
    $("#data").text(result.data[0].Data_Nascimento);
    $("#nacionalidade").text(result.data[0].Nacionalidade);
    $("#cidade").text(result.data[0].Cidade);
    $("#freguesia").text(result.data[0].Freguesia);
    $("#morada").text(result.data[0].Morada);
  });
  // $.get(infohobbies, result => {
  // 	$('#hobbie').text('---> ' + result.data[0].nomeHobbie);
  // 	$('#hobbies').text('---> ' + result.data[1].nomeHobbie);
  // 	$('#hobbiess').text('---> ' + result.data[2].nomeHobbie);
  // });
  // $.get(infohabacademic, result => {
  // 	$('#habacademicas').text('---> Curso: ' + result.data[0].curso);
  // 	$('#habacademica').text('---> Escola: ' + result.data[0].escola);
  // 	$('#habacademic').text('---> Tipo Habilitação: ' + result.data[0].tipohabilitacao);
  // });
}
function cbtn() {
  $("#nome").text("");
  $("#nasc").text("");
  $("#nacionalidade").text("");
  $("#cidade").text("");
  $("#freguesia").text("");
  $("#morada").text("");
  $("#hobbie").text("");
  $("#hobbies").text("");
  $("#hobbiess").text("");
  $("#habacademicas").text("");
  $("#habacademica").text("");
  $("#habacademic").text("");
}
