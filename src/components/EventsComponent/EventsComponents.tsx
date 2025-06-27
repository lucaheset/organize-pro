import { Calendar, Clock } from 'lucide-react'
import React from 'react'

const EventsComponents = () => {
  return (
          <div className="w-full">
            <div className="h-full bg-gray-900 rounded-2xl shadow-xl border border-gray-800">
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white">Próximos Eventos</h2>
                  <Calendar className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4 p-4">
                  {[
                    { 
                      title: 'Apresentação do projeto', 
                      time: '14:00', 
                      date: 'Hoje', 
                      color: 'bg-purple-500', 
                      shadow: 'shadow-purple-500/25',
                      duration: '1h 30min',
                      location: 'Sala de Reuniões'
                    },
                    { 
                      title: 'Call com cliente internacional', 
                      time: '16:30', 
                      date: 'Hoje', 
                      color: 'bg-emerald-500', 
                      shadow: 'shadow-emerald-500/25',
                      duration: '45min',
                      location: 'Online'
                    },
                    { 
                      title: 'Reunião de 1:1 com gestor', 
                      time: '10:00', 
                      date: 'Amanhã', 
                      color: 'bg-orange-500', 
                      shadow: 'shadow-orange-500/25',
                      duration: '30min',
                      location: 'Escritório'
                    },
                    { 
                      title: 'Workshop de UX Design', 
                      time: '15:00', 
                      date: 'Amanhã', 
                      color: 'bg-blue-500', 
                      shadow: 'shadow-blue-500/25',
                      duration: '2h',
                      location: 'Auditório'
                    },
                    { 
                      title: 'Consulta médica', 
                      time: '09:30', 
                      date: 'Sexta', 
                      color: 'bg-red-500', 
                      shadow: 'shadow-red-500/25',
                      duration: '1h',
                      location: 'Clínica'
                    },
                  ].map((event, index) => (
                    <div key={index} className="p-4 hover:bg-gray-800 rounded-xl transition-all duration-200 group border border-gray-800 hover:border-gray-700">
                      <div className="flex items-start space-x-4">
                        <div className={`w-4 h-4 rounded-full ${event.color} shadow-lg ${event.shadow} mt-1 flex-shrink-0`}></div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-white text-sm group-hover:text-purple-300 transition-colors duration-200">
                            {event.title}
                          </p>
                          <div className="mt-2 space-y-1">
                            <p className="text-gray-400 text-xs flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {event.date} às {event.time} • {event.duration}
                            </p>
                            <p className="text-gray-500 text-xs">
                              📍 {event.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Botão para ver mais */}
                <button className="w-full mt-6 p-3 border border-gray-700 rounded-xl text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-200 text-sm font-medium">
                  Ver calendário completo
                </button>
              </div>
            </div>
          </div>

  )
}

export default EventsComponents