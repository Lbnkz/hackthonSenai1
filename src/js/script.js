

//////////////////////////////

var obj = [];
function verificaLista(itemb){
  var b = 0
  for(i of obj){
    if(i.Produto == itemb){
      return b
    }
    b++
  }
}
function addItem(item, ide, id) {
  var qnt = document.getElementById(ide).value;
  var vlr = document.getElementById(id).textContent;
  vlr = parseFloat(vlr.replace("R$ ", "").replace(",", "").replace("00", ""));

  var existe = verificaLista(item);

  if (qnt != 0) {
    if (typeof existe === 'number') {
      num = obj[existe].Quantidade;
      obj[existe].Quantidade = parseInt(num) + parseInt(qnt);
      obj[existe].Valor = vlr * obj[existe].Quantidade;
    } else {
      obj.push({ Produto: item, Quantidade: parseInt(qnt), Valor: vlr * parseInt(qnt) });
    }
  }

  return obj;
}


function exibirObjeto() {
  alert(JSON.stringify(obj));
}

