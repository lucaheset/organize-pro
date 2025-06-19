import TodoPage from "./Pages/TodoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar, SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { SideBarComponent } from "./components/SideBarComponent/SideBarComponent";
import HomePage from "./Pages/HomePage";
import { TodoProvider } from "./contexts/TodoContext";

const App = () => {
  return (
    <div className="bg-gray-950 min-h-screen text-gray-200 flex justify-center">
      <SidebarProvider defaultOpen={true}>
        <TodoProvider>
      <SidebarTrigger></SidebarTrigger>
          <SideBarComponent />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/todo-page" element={<TodoPage />} />
            </Routes>
          </BrowserRouter>
        </TodoProvider>
      </SidebarProvider>
    </div>
  );
};

export default App;
