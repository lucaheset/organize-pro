import CardComponent from "@/components/CardComponent/CardComponent";
import { TodoListCard } from "@/components/TodoList/TodoList";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="bg-gray-900 p-5 w-dvw">
        <h1 className="font-semibold text-4xl">Bem vindo de volta, Luca!</h1>

        <legend className="text-muted-foreground font-semibold">
          Foco no progresso, não na perfeição.
        </legend>
      </div>
      <div className="bg-gray-950 min-w-350 min-h-150 p-5 rounded-lg gap-5 flex flex-col grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        <TodoListCard />
        <TodoListCard />
        <div className="md:col-span-2 flex justify-center">
          <div className="min-w-full min-h-full md:w-1/2">
            <TodoListCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
