import { TodoTableComponent } from "@/components/TableComponent/TableComponent";
import TodoList from "@/components/TodoListComponent/TodoListComponent";
import type { Todo } from "@/types/Todo";
import React, { useState } from "react";

const TodoPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
        <div className="w-full">
          <TodoTableComponent />
      </div>
    </div>
  );
};

export default TodoPage;
