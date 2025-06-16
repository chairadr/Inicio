function soma(valor1,valor2){
return valor1+valor2;
}
//////
document.getElementById("texto").innerHTML = soma(10,10);

//////
function alertahello(){
alert("ai meu Deus");
}
/////
function paracelcius(valorfar){
    var x = (5 / 9) * (valorfar - 32);

    alert("A temperatura é de " + x + " graus celcius");
}

const carro = {

marca: "ford",
modelo:"ka",
ano:2015,
placa:"abc-1234",
buzinha: function (){ alert('Biiiii')}

}

document.getElementById("saida").innerHTML = 
  "Marca: " + carro.marca + "<br>" +
  "Modelo: " + carro.modelo + "<br>" +
  "Ano: " + carro.ano + "<br>" +
  "Placa: " + carro.placa;

//document.getElementById("saida").innerHTML = carro();


