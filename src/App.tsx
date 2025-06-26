import TodoPage from "./Pages/TodoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider} from "./components/ui/sidebar";
import { SideBarComponent } from "./components/SideBarComponent/SideBarComponent";
import HomePage from "./Pages/HomePage";
import { TodoProvider } from "./contexts/TodoContext";

const App = () => {
  return (
    <div className="bg-gray-950 min-h-screen text-gray-200">
      <SidebarProvider defaultOpen={true}>
        <TodoProvider>
          <div className="flex min-w-full">
            <SideBarComponent />
            <div className="flex-1">
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/todo-page" element={<TodoPage />} />
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </TodoProvider>
      </SidebarProvider>
    </div>
  );
};
export default App;
