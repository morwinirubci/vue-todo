<template>
  <div id="app" class="container text-center ">

     <TodoInput />
     <TodoList />
      
   
  </div>
</template>

<script>
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";


export default {
  name: "App",
  components: {
    TodoInput,
    TodoList,
  },
};
</script>

<style>
</style>
