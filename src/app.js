import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  const instance = new Vue({
    el: "#app",
    data: {
      todos: ["Buy Shopping", "Clean Car", "Car's MOT"],
      newItem: ""
    },
    methods: {
      saveNewItem: function() {
        this.todos.push(this.newItem);
        this.newItem = "";
      }
    }
  });
})
