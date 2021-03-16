import { createStore, action } from "easy-peasy";

const store = createStore({
  todos: [],
  addTodo: action((state, payload) => {
    state.todos.push({ text: payload, done: false });
  }),
});


export default store;
