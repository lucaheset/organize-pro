import { Flame } from "lucide-react";
import React from "react";

const StreakComponent = () => {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-xl border border-gray-800 p-6 hover:shadow-2xl hover:border-gray-700 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Streak de Hábitos
          </h3>
          <p className="text-gray-400 text-sm">Sequência atual</p>
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
          <Flame className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="text-center mb-4">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Flame className="w-8 h-8 text-orange-500" />
          <span className="text-3xl font-bold text-white">15</span>
          <span className="text-gray-400 text-lg">dias</span>
        </div>
        <p className="text-orange-400 text-sm">Melhor sequência: 23 dias</p>
      </div>

      {/* Mini calendário de hábitos */}
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 14 }, (_, i) => (
          <div
            key={i}
            className={`w-6 h-6 rounded-md ${
              i < 12
                ? "bg-gradient-to-br from-orange-500 to-red-500 shadow-lg shadow-orange-500/25"
                : "bg-gray-800"
            }`}
          ></div>
        ))}
      </div>

      <div className="mt-4 flex justify-between text-xs text-gray-400">
        <span>Exercício</span>
        <span>Leitura</span>
        <span>Meditação</span>
      </div>
    </div>
  );
};

export default StreakComponent;
