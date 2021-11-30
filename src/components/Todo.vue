<template>
  <ul :class="todo">
    <li class="todo__item"><input type="checkbox" @change="classes($event)"></li>
    <li class="todo__item">{{title}}</li>
    <li class="todo__item">{{description}}</li>
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
    description: String,
  },
  data: () => ({
    todo: ['todo'],
  }),
  methods: {
    classes(event) {
      if (event.target.checked) {
        this.todo.push('todo_disabled');
      } else {
        this.todo.pop();
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
    position: relative;
  }
  .todo_disabled::after {
    position: absolute;
    top: 50%;
    bottom: 50%;
    left: 20px;
    right: 40px;
    transform: translate(0, -50%);
    content: '';
    background-color: var(--color-white);
    height: 2px;

  }
  .button-delete {
    border: 0;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: var(--color-red);
  }
</style>
