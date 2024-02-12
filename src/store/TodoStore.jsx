import { create } from 'zustand'

export const TodoStore = create(set => ({
  todos: [],
  addTodo: todo => set(state => ({ todos: [...state.todos, todo] })),
  removeTodo: id => set(state => ({ todos: state.todos.filter(todo => todo.id !== id) })),
  editTodo: (id, title) =>
    set(state => ({
      todos: state.todos.map(todo => (todo.id === id ? { ...todo, title: title } : { ...todo })),
    })),
  toggleTodo: (id, value) =>
    set(state => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: value } : { ...todo }
      ),
    })),
}))
