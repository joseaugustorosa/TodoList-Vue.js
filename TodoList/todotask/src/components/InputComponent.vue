<template>
    <div class="pagina-flutuante">
                <div class="margens">
                    <button class="fechar_btn" v-on:click="close()">X</button>
                <h2 class="titulo_pagina_flutuante">Adicionar tarefa</h2>
                
                <label for="campo-de-entrada">titulo:</label><br>
                <input type="text" id="title"  class="input_pagina_flutuante" name="campo-de-entrada" placeholder="Insira seu título"><br>
                <label for="campo-de-entrada">Tarefa:</label><br>
                <textarea type="text" id="task"  class="input_pagina_flutuante" name="campo-de-entrada" placeholder="Insira sua tarefa"></textarea><br>
               

            <input type="radio" id="Muita urgência" name="nivel" value="Muita urgência"><label class="radio_l">Muita urgência</label>
            <input type="radio" id="Pouca urgência" name="nivel" value="Pouca urgência"><label  class="radio_l">Pouca urgência</label>
           
                
            <div class="btn_save_div">
              <button class="save_btn" v-on:click="validation()">Salvar</button>
              </div>
            </div>
    </div>

</template>

<script>


export default ({
   
    created () {
  },
     data() {
    return {
      
    }
  },
  mounted() {


    
  },
  methods: {
    validation(){
      const titulo = document.getElementById('title')
      const tarefa = document.getElementById('task')
      const radio = document.querySelector('input[name="nivel"]:checked')

      if(titulo.value == '' && tarefa.value == '' && radio == null){
        alert('preencha todos os campos.')

      }else if(titulo.value == '' && tarefa.value != '' && radio == null){
         alert('Insira sua tarefa, e marque sua urgência.')

      }else if(titulo.value == '' && tarefa.value != '' && radio != null){
         alert('É necessário um título para continuar.')

      }else if(titulo.value != '' && tarefa.value == '' && radio != null){
         alert('É necessária uma tarefa para continuar.')

      }else if(titulo.value != '' && tarefa.value != '' && radio == null){
         alert('É necessário marcar uma das caixinhas abaixo.')

      }else if(titulo.value != '' && tarefa.value == '' && radio == null){
         alert('É necessário marcar uma das caixinhas abaixo e uma tarefa.')

      }else if(titulo.value != '' && tarefa.value != '' && radio != null){
         this.save()

      }
    },


     save(){
     
let listaObjetos = JSON.parse(localStorage.getItem('tasks')) || [];
console.log(listaObjetos)
// Cria um novo objeto
const titulo = document.getElementById('title')
      const tarefa = document.getElementById('task')


    

        const Obj = {
        id:this.gerarID(),
        titulo : titulo.value,
        tarefa: tarefa.value,
        data:this.data(),
        urgencia:document.querySelector('input[name="nivel"]:checked').value
      }

// Adiciona o novo objeto à lista
if (!Array.isArray(listaObjetos)) {
  // Se listaObjetos não é um array, inicializa com um array vazio
  listaObjetos = [];
}

// Adiciona o novo objeto à lista
listaObjetos.push(Obj);
console.log(listaObjetos)
// Armazena a lista atualizada de objetos no localStorage
localStorage.setItem('tasks', JSON.stringify(listaObjetos));
 this.$router.push('/' );     
     }, data(data){
   data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    var dataAtual = dia + '/' + mes + '/' + ano;
    console.log(dataAtual); 
    
    return dataAtual;
    },gerarID() {
  const timestamp = Date.now().toString();
  const valorAleatorio = Math.floor(Math.random() * 10000).toString();
  return timestamp + '-' + valorAleatorio;
}, close(){
   this.$router.push('/' );
}
  }
  
  
  })

</script>
<style>
.pagina-flutuante {
   position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
    box-shadow: 1px 0px 10px 1px grey;
    
  }
.input_pagina_flutuante{
  height: 30px;
  padding: 10px;
  border: 1px solid rgba(135, 135, 135, 0.429);
  border-radius: 3px;
  width: 100%;
  font-size: 17px;

}
#task{
  padding: 10px;
  width: 400px;
  height: 150px;
}
.fechar_btn{
  float: right;
  padding: 1px 4px;
  background: red;
  color: white;
  border: none;
  cursor: pointer;
}
  .btn_save_div{
    text-align: center;
    margin-top: 15px;
   
  }
  .save_btn{
     padding: 10px 20px;
      padding: 5px 15px;
    border-radius: 10px;
    background-color: white;
    cursor: pointer;
  }
   .save_btn:hover{
    background-color: rgba(0, 128, 0, 0.356);
   }
</style>
