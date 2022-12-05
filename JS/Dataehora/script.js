//DIA DA SEMANA
const days = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"];

const d_s = new Date();
let day = days[d_s.getDay()];
document.getElementById("dia_se").innerHTML = day;

//DIA
const dia = new Date();
document.getElementById("dia").innerHTML = dia.getDate();

//MES
const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

const d = new Date();
let mes = months[d.getMonth()];
document.getElementById("mes").innerHTML = mes;


//ANO
const ano = new Date();
document.getElementById("ano").innerHTML = ano.getFullYear();
