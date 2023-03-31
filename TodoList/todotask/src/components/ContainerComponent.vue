<template>
    <main>
       
        <div>
            <h1 class="titulo_container">Tasks</h1>
        <div class="btn_div">
            <button class="btn_add_task" @click="input()"> Add Task </button>
        </div>

        <div  v-for="task in tasks"  :key="task.id">


            <div class="item_container_urgencia" v-if="task.urgencia == 'Muita urgência'">
            <h3>{{task.titulo}} </h3>
            
            <button class="btn_remove" v-on:click="deletarObjeto(task.id)"></button>
            <button  class="btn_editar" v-on:click="editar(task)"></button>

            <p class="descricao_item">{{task.tarefa}}</p>
            <p>{{task.data}}</p>
          </div>
        <div class="item_container" v-else>
            <h3>{{task.titulo}} </h3>
            
            <button class="btn_remove" v-on:click="deletarObjeto(task.id)"></button>
            <button  class="btn_editar" v-on:click="editar(task)"></button>
            <p class="descricao_item">{{task.tarefa}}</p>
            <p>{{task.data}}</p>
          </div>
        </div>  
        <router-view></router-view>


        </div>
    </main>



</template>

<script>

export default {
  created () {
  },
     data() {
    return {
      tasks: []
    }
  },
  mounted() {


    const chamadaLocalStorage = localStorage.getItem('tasks');
    console.log(chamadaLocalStorage)
    const tasks_local_storage = JSON.parse(chamadaLocalStorage);
    console.log(tasks_local_storage)
    this.tasks = tasks_local_storage
    console.log(this.tasks)


    
  },
  methods: {
     input() {
       this.$router.push('/input' );
    },
    deletarObjeto(id) {      
      this.tasks = this.tasks.filter(task => task.id !== id);
        var lista = this.tasks
       localStorage.setItem('tasks', JSON.stringify(lista));    
    }, editar(task){

         this.$router.push('/inputEdit' );
        localStorage.setItem('objForEdit', JSON.stringify(task));
    }
  }
}
</script>

<style>
main{
    margin: 3% auto;
    border-radius: 10px;
    width: 40%;
    padding-bottom: 10px;
    height: auto;
    background-color: white;
    border: 1px solid black;
   
}
.titulo_container{
    text-align: center;
    padding-top: 10px;
}
.btn_add_task{
    text-align: center;
    padding: 5px 15px;
    border-radius: 10px;
    background-color: white;
    }

.btn_add_task:hover{
    background-color: rgb(201, 204, 206);
    cursor: pointer;

}
.btn_div{
    margin: 10px;
    width: auto;
    text-align: center;
}
.item_container{
    width: 90%;
    margin: 5px auto;
    border: 1px solid black;
    padding: 5px;
    border-radius: 10px;

}
.descricao_item{
    padding-top:5px ;
    padding-bottom: 5px;
}
.btn_remove{
    float: right;
    
    background-image: url('../assets/trash_icon.png');
    background-size: cover;
background-repeat: no-repeat;
   background-position: left center;
    padding: 15px;
    border-radius:10px;
    margin-left: 10px;

}
.btn_remove:hover{

    background-color: rgba(255, 0, 0, 0.349);

}
.btn_editar{
    float:right;
    background-image: url('../assets/lupa.png');
    background-size: cover;
background-repeat: no-repeat;
   background-position: left center;
    padding: 15px;
    border-radius:10px;
}
.item_container_urgencia{
     width: 90%;
    margin: 5px auto;
    border: 1px solid red;
    padding: 5px;
    background-color: rgba(255, 0, 0, 0.082);
    border-radius: 10px;
}

</style>