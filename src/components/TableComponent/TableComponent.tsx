import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Todo } from "@/types/Todo";


interface todosListInterface {
  todosList: Todo[];
  setTodosList: React.Dispatch<React.SetStateAction<Todo[]>>
}
import { CheckboxComponent } from "../CheckboxComponent/CheckboxComponent";
import { useTodo } from "@/contexts/TodoContext";

import React, { useState } from "react";

export function TodoTableComponent() {

    const { todos, toggleTodo, removeTodo } = useTodo();
    const [showDeleteModal, setShowDeleteModal] = useState<number | null>(null);
  

  return (
    <div className="lg:col-span-2">
      <div className="bg-gray-900 rounded-2xl shadow-xl border border-gray-800">
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">To do's</h2>
            <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center transition-colors duration-200">
              Ver todas
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center space-x-4 p-4 hover:bg-gray-800 rounded-xl transition-all duration-200 group"
              >
                <span
                  className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center cursor-pointer transition-all duration-200 ${
                    todo.completed
                      ? 'bg-emerald-500 border-emerald-500 shadow-lg shadow-emerald-500/25'
                      : 'border-gray-600 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/25'
                  }`}
                  onClick={() => toggleTodo(todo.id)}
                  tabIndex={0}
                  role="checkbox"
                  aria-checked={todo.completed}
                >
                  {todo.completed && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4"></path></svg>
                  )}
                </span>
                <div className="flex-1">
                  <p className={`font-medium ${todo.completed ? 'text-gray-500 line-through' : 'text-white'}`}>
                    {todo.title}
                  </p>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="text-gray-400 text-sm flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"></path></svg>
                      {todo.time || '--:--'}
                    </span>
                    <span className="px-2 py-1 rounded-md text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700">
                      {todo.type}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      todo.priority === 'alta'
                        ? 'bg-red-900/50 text-red-400 border border-red-800'
                        : todo.priority === 'média'
                        ? 'bg-orange-900/50 text-orange-400 border border-orange-800'
                        : 'bg-gray-800 text-gray-400 border border-gray-700'
                    }`}>
                      {todo.priority || 'baixa'}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      todo.completed
                        ? 'bg-emerald-900/50 text-emerald-400 border border-emerald-800'
                        : 'bg-gray-800 text-gray-400 border border-gray-700'
                    }`}>
                      {todo.completed ? 'Feito' : 'Pendente'}
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    className="p-2 rounded hover:bg-red-600 transition-colors cursor-pointer"
                    onClick={() => setShowDeleteModal(todo.id)}
                    aria-label={`Delete ${todo.title}`}
                    title={`Delete ${todo.title}`}
                    type="button"
                  >
                    <i className="fa fa-trash text-gray-200" aria-hidden="true"></i>
                  </button>
                  {showDeleteModal === todo.id && (
                    <div
                      className="fixed inset-0 flex items-center justify-center z-50"
                      style={{ backgroundColor: "rgba(17, 24, 39, 0.5)" }}
                    >
                      <div className="bg-white rounded shadow-lg p-6 w-80">
                        <h2 className="text-lg font-bold mb-4 text-gray-800">Confirm Deletion</h2>
                        <p className="mb-6 text-gray-700">Are you sure you want to delete <span className="font-semibold">{todo.title}</span>?</p>
                        <div className="flex justify-end gap-2">
                          <button
                            className="px-4 py-2 rounded bg-gray-300 text-gray-800 hover:bg-gray-400"
                            onClick={() => setShowDeleteModal(null)}
                            type="button"
                          >
                            Cancel
                          </button>
                          <button
                            className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
                            onClick={() => {
                              removeTodo(todo.id);
                              setShowDeleteModal(null);
                            }}
                            type="button"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
