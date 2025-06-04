import type { Todo } from "@/types/Todo";
import { Checkbox } from "../ui/checkbox";
import { useTodo } from "@/contexts/TodoContext";

type CheckboxComponentProps = {
  todo: Todo;
};

export function CheckboxComponent({ todo }: CheckboxComponentProps) {
  const { toggleTodo } = useTodo();

  const handleCheck = () => {
    toggleTodo(todo.id);
  };

  return (
    <div className="items-top flex space-x-2">
      <Checkbox
        id={`todo-${todo.id}`}
        onCheckedChange={handleCheck}
        checked={todo.completed}
        className="border-black"
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={`todo-${todo.id}`}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
        </label>
      </div>
    </div>
  );
}
