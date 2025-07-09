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
  const [priority, setPriority] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date();
    const createdAt = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")} ${now.getDate().toString().padStart(2, "0")}/${(now.getMonth() + 1).toString().padStart(2, "0")}/${now.getFullYear().toString().slice(-2)}`;
    addTodo(title, type, priority, createdAt);
    setTitle("");
    setType("");
    setPriority("");
    onClose();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 transition-colors duration-300"
      style={{ backdropFilter: "blur(2px)" }}
    >
      <div className="bg-[#232323] p-6 rounded-lg w-full max-w-md shadow-xl transform transition-all duration-300 scale-100 opacity-100 animate-fade-in">
        <h3 className="text-xl font-semibold mb-4">Add New Todo</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const createdAt = new Date().toISOString();
            addTodo(title, type, priority, createdAt);
            setTitle("");
            setType("");
            setPriority("");
            onClose();
          }}
        >
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
            label={"Type"}
            options={[
              { label: "Work", value: "work" },
              { label: "Personal", value: "personal" },
              { label: "Other", value: "other" },
            ]}
          />
          <DropdownComponent
          
            dropdownValue={priority}
            setDropdownValue={setPriority}
            label={"Priority"}
            options={[
              { label: "Low", value: "low" },
              { label: "Medium", value: "medium" },
              { label: "High", value: "high" },
            ]}
          />
          <div className="flex justify-end gap-2 mt-4">
            <Button
              type="button"
              className="bg-gray-600 text-white cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-500 text-white cursor-pointer"
              disabled={!title || !type || !priority}
            >
              Add
            </Button>
          </div>
        </form>
      </div>
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: scale(0.95);}
            to { opacity: 1; transform: scale(1);}
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease;
          }
        `}
      </style>
    </div>
  );
};

export const TodoListCard = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card className="h-full w-full bg-gray-900 border-0 text-gray-200 min-h-50 min-w-30">
        <CardHeader>
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
      </Card>
      <ModalAddTodo open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default TodoListCard;
