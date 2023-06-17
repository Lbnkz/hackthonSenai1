/*
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFuVNR5zBhehcrHOQCsaPD4urbCcOmuRA",
  authDomain: "cantina-sesi-senaiu.firebaseapp.com",
  projectId: "cantina-sesi-senaiu",
  storageBucket: "cantina-sesi-senaiu.appspot.com",
  messagingSenderId: "32917445635",
  appId: "1:32917445635:web:5962f08940201e0e9f0236",
  measurementId: "G-67RNKTP0T7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Cadastra Pedido
function cadastraPedido(item, valor, quantidade) {
  console.log("Foi")
  // Acesso ao Firestore
  var db = firebase.firestore();

  // Coleção onde os pedidos serão armazenados
  var pedidosCollection = db.collection('pedidos');

  // Definir os dados do pedido
  var novoPedido = {
    item: item,
    valor: valor,
    quantidade: quantidade,
    data: new Date()
  };

  // Adicionar o novo pedido ao Firestore
  pedidosCollection.add(novoPedido)
    .then(function(docRef) {
      // O pedido foi enviado com sucesso
      console.log('Pedido enviado com sucesso! ID do documento:', docRef.id);
    })
    .catch(function(error) {
      // Ocorreu um erro ao enviar o pedido
      console.error('Erro ao enviar o pedido:', error);
    });
}
*/

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
function addItem(item, ide) {
  var qnt = document.getElementById(ide).value
  var existe = verificaLista(item)
if(qnt != 0){
  if(typeof existe === 'number'){
    num = obj[existe].Quantidade
    obj[existe].Quantidade = parseInt(num) + parseInt(qnt)
  }
  else{
  obj.push({ Produto: item, Quantidade: parseInt(qnt) });
}
}
console.log(obj)
}

function criarComanda(){
  for(i in obj){
    alert(obj[i])
  }
}
