import { ChartComponent } from "@/components/ChartComponent/ChartComponent";
import EventsComponents from "@/components/EventsComponent/EventsComponents";
import ProductivityComponent from "@/components/ProductivityComponent/ProductivityComponent";
import StreakComponent from "@/components/StreakComponent/StreakComponent";
import { TodoListCard } from "@/components/TodoListComponent/TodoListComponent";

const HomePage = () => {
  return (
    <div className="w-full">
      <div className="bg-gray-900 p-5">
        <h1 className="font-semibold text-4xl">Welcome Back, Luca!</h1>

        <legend className="text-muted-foreground font-semibold">
          Focus on progress, not perfection.
        </legend>
      </div>
      <div className="bg-gray-950 p-5 rounded-lg grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <ChartComponent />
        </div>
        <div className="col-span-1">
          <ProductivityComponent />
        </div>
        <div className="col-span-1">          
          <StreakComponent />
        </div>
        <div className="col-start-4 row-span-2">
          <EventsComponents />
        </div>
        <div className="col-span-3 row-start-2">
          <TodoListCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
