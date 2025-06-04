import TodoPage from "./Pages/TodoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar, SidebarProvider } from "./components/ui/sidebar";
import { SideBarComponent } from "./components/SideBarComponent/SideBarComponent";
import HomePage from "./Pages/HomePage";
import { TodoProvider } from "./contexts/TodoContext";

const App = () => {
  return (
    <div className="bg-[#121212] min-h-screen p-10 text-gray-200 flex justify-center">
      <SidebarProvider defaultOpen={true}>
        <TodoProvider>
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
