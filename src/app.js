import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  const instance = new Vue({
    el: "#app",
    data: {
      todos: [
      {name: "Buy Shopping", priority: true},
      {name: "Clean Car", priority: false},
      {name: "Car's MOT", priority: true}
    ],
      newItem: "",
      priority: false
    },
    methods: {
      saveNewItem: function() {
        this.todos.push({
        name: this.newItem,
        priority: this.priority});
        this.newItem = "";
        this.priority = false;
      }
    }
  });
})
