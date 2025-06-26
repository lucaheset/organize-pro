import { TodoTableComponent } from "@/components/TableComponent/TableComponent";
import TodoList from "@/components/TodoListComponent/TodoListComponent";
import type { Todo } from "@/types/Todo";
import React, { useState } from "react";

const TodoPage = () => {

      const [todosList, setTodosList] = useState<Todo[]>([
    {
      id: 1,
      type: "Estudo",
      title: "$250.00",
      completed: false,
    },
  ]);
  return (
    <div className="min-w-300 bg-[#1E1E1E]  p-5 rounded-lg gap-5 flex flex-col">
      <TodoList />
      <div className="bg-[#2C2C2E] rounded-lg p-5">
        <TodoTableComponent/>
      </div>
    </div>
  );
};

export default TodoPage;
