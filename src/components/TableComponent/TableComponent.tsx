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

export function TodoTableComponent() {

    const { todos, toggleTodo, removeTodo } = useTodo();
  

  return (
    <Table className="centered-table">
      <TableCaption className="text-gray-200 font-bold">To do's</TableCaption>
      <TableHeader>
        <TableRow >
          <TableHead className="w-[100px] text-gray-200 py-3 px-4"></TableHead>
          <TableHead className="w-[300px] text-gray-200 py-3 px-4">Title</TableHead>
          <TableHead className="w-[300px] text-gray-200 py-3 px-4">Type</TableHead>
          <TableHead className="w-[300px] text-gray-200 py-3 px-4">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">
              <CheckboxComponent 
              todo={todo}
              />
            </TableCell>
            <TableCell className="text-gray-200 py-3 px-4">{todo.title}</TableCell>
            <TableCell className="text-gray-200 py-3 px-4">{todo.type}</TableCell>
            <TableCell className="text-gray-200 py-3 px-4">
                {todo.completed ? "Done" : "Not Done"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        
      </TableFooter>
    </Table>
  );
}
