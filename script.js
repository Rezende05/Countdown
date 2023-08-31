class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }
  get _actualDate(){
    return new Date();
  }
  get _futureDate() {
    return new Date(this.futureDate);
  }
  get _timeStampDiff(){
    return this._futureDate.getTime() - this._actualDate.getTime();
  }
  get days() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000))
  }
  get hours() {
    return Math.floor((this._timeStampDiff / (60 * 60 * 1000)) %24)
  }
  get minutes() {
    return Math.floor((this._timeStampDiff / (60 * 1000)) %60)
  }
  get seconds() {
    return Math.floor((this._timeStampDiff / 1000) %60)
  }
}

const diasParaoNatal = new Countdown('25 december 2023 00:00:00 GMT-0300');

console.log(diasParaoNatal)

function atualizarDia() {
const dia = document.getElementById('dias');
setInterval(() => {
  const contagem = diasParaoNatal.days;
  return dia.textContent = contagem;}, 1000)
}

function atualizarHora() {
  const dia = document.getElementById('horas');
  setInterval(() => {
    const contagem = diasParaoNatal.hours;
    return dia.textContent = contagem;}, 1000)
}

function atualizarMinuto() {
  const dia = document.getElementById('minutos');
  setInterval(() => {
    const contagem = diasParaoNatal.minutes;
    return dia.textContent = contagem;}, 1000)
}

function atualizarsegundos() {
  const dia = document.getElementById('segundos');
  setInterval(() => {
  const contagem = diasParaoNatal.seconds;
  return dia.textContent = contagem;}, 1000)
}

atualizarDia();
atualizarHora();
atualizarMinuto();
atualizarsegundos();