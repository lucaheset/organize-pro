import React, { createContext, useContext, useState, useEffect } from "react"
import type { ReactNode } from "react"
import type { Todo } from "@/types/Todo"
import { loadTodos, saveTodos } from "@/utils/localStorage"

type TodoContextType = {
  todos: Todo[]
  addTodo: (title: string, type: string) => void
  toggleTodo: (id: number) => void
  removeTodo: (id: number) => void
}

const TodoContext = createContext<TodoContextType | undefined>(undefined)

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>(() => loadTodos())

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  const addTodo = (title: string, type: string) => {
    const newTodo: Todo = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      title,
      type,
      completed: false,
    }
    setTodos((prev) => [...prev, newTodo])
  }

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodo = () => {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error("useTodo deve ser usado dentro do TodoProvider")
  }
  return context
}
