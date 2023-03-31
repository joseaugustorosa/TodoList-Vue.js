<template>
    <div class="pagina-flutuante">
                <div class="margens">
                    <button class="fechar_btn" v-on:click="close()">X</button>
                <h2 class="titulo_pagina_flutuante">Adicionar tarefa</h2>
                
                <label for="campo-de-entrada">titulo:</label><br>
                <input type="text" id="title_ed"  class="input_pagina_flutuante" name="campo-de-entrada" placeholder="Insira seu título"><br>
                <label for="campo-de-entrada">Tarefa:</label><br>
                <textarea type="text" id="task_ed"  class="input_pagina_flutuante" name="campo-de-entrada" placeholder="Insira sua tarefa"></textarea><br>
               

            <input type="radio" id="Muita urgência" name="nivel_ed" value="Muita urgência"><label class="radio_l">Muita urgência</label>
            <input type="radio" id="Pouca urgência" name="nivel_ed" value="Pouca urgência"><label  class="radio_l">Pouca urgência</label>
           
                
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
    let objeto = JSON.parse(localStorage.getItem('objForEdit')) || [];

    const titulo_ = document.getElementById('title_ed')
     const tarefa_ = document.getElementById('task_ed')
      let valor = objeto.urgencia;
  let radioInput = document.querySelector(`input[name="nivel_ed"][value="${valor}"]`);
  radioInput.checked = true;

    titulo_.value = objeto.titulo
    tarefa_.value = objeto.tarefa
  
  },
  methods: {
validation(){
      const titulo = document.getElementById('title_ed')
      const tarefa = document.getElementById('task_ed')
      

      if(titulo.value == '' && tarefa.value == ''){
        alert('preencha todos os campos.')

      }else if(titulo.value == '' && tarefa.value != '' ){
          alert('É necessário um título para continuar.')

      }else if(titulo.value != '' && tarefa.value == ''){
        
         alert('Insira sua tarefa para continuar.')

      }else if(titulo.value != '' && tarefa.value != ''){
         this.atualizar()

      }
    },
    atualizar(){
         let objeto = JSON.parse(localStorage.getItem('objForEdit')) || [];

         const idzada = objeto.id
            const titulo_ = document.getElementById('title_ed')
            const tarefa_ = document.getElementById('task_ed')

         const listaDeObjetos = JSON.parse(localStorage.getItem('tasks'));
        let objetoParaAtualizar = listaDeObjetos.find(objeto => objeto.id === idzada);  
        objetoParaAtualizar.titulo = titulo_.value;
         objetoParaAtualizar.tarefa = tarefa_.value;
         objetoParaAtualizar.urgencia = document.querySelector('input[name="nivel_ed"]:checked').value;
        localStorage.setItem('tasks', JSON.stringify(listaDeObjetos));
        this.$router.push('/' );
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
#task_ed{
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
