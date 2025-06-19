import React, { useState, type Dispatch, type SetStateAction } from "react";
import { DropdownComponent } from "../DropdownComponent/DropdownComponent";
import { TodoTableComponent} from "../Table/Table";
import { Button } from "../ui/button";
import { useTodo } from "@/contexts/TodoContext";
import type { Todo } from "@/types/Todo";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "../ui/card";

const TodoList = () => {
  const [dropdownValue, setDropdownValue] = useState("");
  const { todos, addTodo, toggleTodo, removeTodo } = useTodo();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const inputElement = form.elements.namedItem(
      "inputTodo"
    ) as HTMLInputElement;

    const valorInput = inputElement.value;

    addTodo(valorInput, dropdownValue)

    }

  return (
    <div className="flex gap-5 flex-col">
      <h2 className="text-3xl font-semibold">To-do List</h2>

      <div className="bg-[#2C2C2E] p-4 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row  items-center mt-2 gap-2">
            <input
              className="w-full bg-[#121212] border border-[#2A2A2A] p-2 text-white rounded-md max-w-125"
              name="inputTodo"
              placeholder="Task Title"
            />
            <div className="cursor-pointer">
              <DropdownComponent
                dropdownValue={dropdownValue}
                setDropdownValue={setDropdownValue}
              />
            </div>
          </div>
          <Button
            className="mt-4 cursor-pointer bg-secondary text-black py-2 px-4 rounded-lg min-w-30"
            type="submit"
          >
            Add
          </Button>
        </form>
      </div>
    </div>
  );
};
export default TodoList;

export const TodoListCard = () => {


  return (
    <Card className="bg-gray-900 border-0">
      <CardHeader>
        <CardTitle>To do's</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <TodoTableComponent/>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

