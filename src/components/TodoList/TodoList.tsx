import React, { useState, type Dispatch, type SetStateAction } from "react";
import { DropdownComponent } from "../DropdownComponent/DropdownComponent";
import type { Todo } from "../Table/Table";
import { stringify } from "querystring";

const TodoList = ({
  todosList,
  setTodosList
}: {
  todosList: Todo[];
  setTodosList: Dispatch<SetStateAction<Todo[]>>;
}) => {

  const [dropdownValue, setDropdownValue] = useState([''])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const valorInput = form.elements.namedItem("inputTodo") as HTMLInputElement;



    const novoTodo = {
      id: todosList.length + 1,
      type: form.elements.namedItem("inputTodo") as HTMLInputElement,
      title: String,
      completed: false,
    

    };

    if (novoTodo) {
      const newTodo: Todo = {
        id: todosList.length,
        type: '',
        title: '',
        completed: false
      }
      setTodosList((prevTodos) => [...prevTodos, newTodo]);
      form.reset();
    }
  };



  return (
    <div className="bg-[#1E1E1E] p-4 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold">To-do List</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row items-center mt-2 gap-2">
        <input
          className="w-full bg-[#121212] border border-[#2A2A2A] p-2 text-white rounded"
          name="inputTodo"
          placeholder="Nome da Tarefa"
        />
          <DropdownComponent setDropdownValue={setDropdownValue} />

          </div>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          type="submit"
        >
          Adicionar
        </button>
      </form>

    </div>
  );
};

export default TodoList;
