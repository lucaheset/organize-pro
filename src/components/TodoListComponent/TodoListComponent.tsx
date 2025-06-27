import React, { useState } from "react";
import { Button } from "../ui/button";
import { useTodo } from "@/contexts/TodoContext";
import { DropdownComponent } from "../DropdownComponent/DropdownComponent";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "../ui/card";
import { TodoTableComponent } from "../TableComponent/TableComponent";

// ModalAddTodo Component
const ModalAddTodo = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const { addTodo } = useTodo();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(title, type);
    setTitle("");
    setType("");
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#232323] p-6 rounded-lg w-full max-w-md shadow-xl">
        <h3 className="text-xl font-semibold mb-4">Add New Todo</h3>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full mb-3 p-2 rounded bg-[#121212] border border-[#2A2A2A] text-white"
            placeholder="Title of todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <DropdownComponent
            dropdownValue={type}
            setDropdownValue={setType}
          />
          <div className="flex justify-end gap-2 mt-4">
            <Button
              type="button"
              className="bg-gray-600 text-white"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-500 text-white"
              disabled={!title || !type}
            >
              Add
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const TodoListCard = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card className="bg-gray-900 border-0 text-gray-200 min-h-50 min-w-30">
        <CardHeader>
          <CardTitle>To do's</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>
            <Button
              className="bg-blue-500 text-gray-100 cursor-pointer"
              onClick={() => setOpenModal(true)}
            >
              <i className="fa fa-plus mr-2" aria-hidden="true"></i>
              Add
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <TodoTableComponent />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <ModalAddTodo open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default TodoListCard;
