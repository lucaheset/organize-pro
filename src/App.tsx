import React from "react";

const App = () => {
  return (
    <div className="bg-[#121212] min-h-screen p-6 text-gray-200">
      <div className="bg-[#1E1E1E] p-4 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold">Minha To-do List</h2>
        <input
          className="w-full bg-[#121212] border border-[#2A2A2A] p-2 mt-4 text-white rounded"
          placeholder="Nova tarefa"
        />
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Adicionar
        </button>
      </div>

      <table>
        <th >julio</th>
        <td></td>
      </table>
    </div>
  );
};

export default App;
