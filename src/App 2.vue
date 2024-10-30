<script>
export default{
  data() {
    return{
      name: 'john doe',
      status: 'pending',
      tasks: ['task one', 'task two', 'task three'],
      link: 'https://google.com'
    };
  },
  methods: {
    toggleStatus () {
      if(this.status === 'active') {
        this.status = 'pending';
      } else if(this.status === 'pending') {
        this.status = 'inactive';
      } else{
        this.status = 'active';
      }
    }
  }
};
</script>

<template>
<h1>{{ name }}</h1>
<P v-if="status === 'active'">user is active</P>
<p v-else-if="status === 'pending'">user is pending</p>
<p v-else>user is inactive</p>


<h3>tasks:</h3>
<ul>
  <li v-for="task in tasks" :key="task">{{ task }}</li>
</ul>
<a v-bind:href="link">click for google</a>
<br>
<button @click="toggleStatus">change status</button>
</template>

















<script setup>
import {ref, onMounted} from 'vue';
  const name = ref('john Doe');
  const status = ref('active');
  const task = ref(['Task one', 'Task two', 'Task three']);
  const newTask = ref('');
 const toggleStatus = () => {
  if(status.value === 'active') {
        status.value = 'pending';
      } else if(this.status === 'pending') {
        status.value = 'inactive';
      } else{
        status.value = 'active';
      }
 };
  const addTask = () => {
   if(newTask.value.trim()!=='') {
    task.value.push(newTask.value);
    newTask.value ='';
   }

  };
  const deleteTask =(index) => {
    task.value.splice(index, 1);
  };
  onMounted(async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      task.value =data.map((task) => task.title);
    }catch (error) {
      console.log('Error fetching tasks');
    }
  }

  
</script>

<template>
<h1>{{ name }}</h1>
<P v-if="status === 'active'">user is active</P>
<p v-else-if="status === 'pending'">user is pending</p>
<p v-else>user is inactive</p>

<form @submit.prevent="addTask">
  <label for="newTask">Add Task</label>
  <input type="text" id="newTask" name="newTask" v-model="newTask">
  <button type="submit">Submit</button>
</form>

<h3>tasks:</h3>
<ul>
  <li v-for="(task, index) in tasks" :key="task">
    <span> {{ task }}</span>
    <button @click="deleteTask(index)">x</button>
  </li>
</ul>

<br>
<button @click="toggleStatus">change status</button>
</template>

