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

export const loadChartDataState = (): any[] => {
  try {
    const data = localStorage.getItem("chartDataState");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveChartDataState = (chartDataState: any[]) => {
  try {
    localStorage.setItem("chartDataState", JSON.stringify(chartDataState));
  } catch {
    console.error("Failed to save chartDataState to localStorage");
  }
};