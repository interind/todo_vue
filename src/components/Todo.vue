<template>
  <ul class="todo">
    <li class="todo__item"><input type="checkbox" @change="classes($event)"></li>
    <li :class="todoItem">{{title}}</li>
    <li :class="todoItem">{{body}}</li>
    <li class="todo__item">
      <button class="button-delete" type="button" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    title: String,
    body: String,
  },
  data: () => ({
    todoItem: ['todo__item'],
  }),
  methods: {
    classes(event) {
      if (event.target.checked) {
        this.todoItem.push('todo__item_disabled');
      } else {
        this.todoItem.pop();
      }
    },
  },
};
</script>

<style scoped>
  .todo {
    display: grid;
    grid-template-columns: 20px 1fr 3fr 30px;
    grid-auto-flow: row;
    align-items: center;
    max-width: 1000px;
    list-style: none;
    padding: 0;
  }
  .todo__item {
    text-decoration: none;
  }
  .todo__item_disabled {
    text-decoration: line-through;
  }
  .button-delete {
    border: 0;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: var(--color-red);
  }
</style>
