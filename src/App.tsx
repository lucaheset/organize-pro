import TodoList from "./components/TodoList/TodoList";
import { TableComponent, type Todo } from "./components/Table/Table";
import { useState } from "react";

const App = () => {
  const [todosList, setTodosList] = useState<Todo[]>([
    {
      id: 1,
      type: "Estudo",
      title: "$250.00",
      completed: false,
    },
  ]);

  return (
    <div className="bg-[#222222] min-h-screen p-10 text-gray-200">
      <TodoList 
        todosList={todosList}
        setTodosList={setTodosList}
      />
      <TableComponent todosList={todosList} />
    </div>
  );
};

export default App;
