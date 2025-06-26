import { ChartComponent } from "@/components/ChartComponent/ChartComponent";
import EventsComponents from "@/components/EventsComponent/EventsComponents";
import ProductivityComponent from "@/components/ProductivityComponent/ProductivityComponent";
import StreakComponent from "@/components/StreakComponent/StreakComponent";
import { TodoListCard } from "@/components/TodoListComponent/TodoListComponent";


const HomePage = () => {
  return (
    <div className="w-full">
      <div className="bg-gray-900 p-5">
        <h1 className="font-semibold text-4xl">Bem vindo de volta, Luca!</h1>

        <legend className="text-muted-foreground font-semibold">
          Foco no progresso, não na perfeição.
        </legend>
      </div>
      <div className="bg-gray-950 p-5 rounded-lg flex-col flex gap-5">
        <div className="flex flex-row gap-5">
          <div className="w-1/3">
            <ChartComponent />
          </div>
          <div className="w-1/3">
            <ProductivityComponent />
          </div>
          <div className="w-1/3">
            <StreakComponent />
          </div>
        </div>
        <div className="flex min-w-full">
          <div className="flex min-w-full flex-row gap-5">
            <div className="w-2/3">
              <TodoListCard />
            </div>
            <div className="w-1/3">
              <EventsComponents />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
