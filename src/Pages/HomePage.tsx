import CardComponent from "@/components/CardComponent/CardComponent";
import { TodoListCard } from "@/components/TodoList/TodoList";
import React from "react";

const HomePage = () => {
  return (
    <div className="home-container flex flex-col gap-5 p-20">
      <div className="">
        <h1 className="font-semibold text-4xl">Bem vindo de volta, Luca!</h1>
        <legend className="text-muted-foreground font-semibold">
          Foco no progresso, não na perfeição.
        </legend>
      </div>
      <div className="bg-[#1E1E1E] min-w-350 min-h-150 p-5 rounded-lg gap-5 flex flex-col grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
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
