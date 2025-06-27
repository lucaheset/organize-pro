export const loadTodos = (): any[] => {
  try {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  } catch {
    return [];
  }
};

export const saveTodos = (todos: any[]) => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch {
    console.error("Failed to save todos to localStorage");
  }
};