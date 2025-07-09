import React, { useEffect, useState } from "react";
import { Calendar, Clock } from "lucide-react";

// Add TypeScript declaration for gapi and calendar
declare global {
  interface Window {
    gapi: any;
  }
}
declare var gapi: any;

const CLIENT_ID =
  "YOUR_CLIENT_ID.apps.googleusercontent.com"; // Replace with your actual client ID
const API_KEY = "";
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
];
const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

type EventItem = {
  title: string;
  time: string;
  date: string;
  duration: string;
  location: string;
  color: string;
  shadow: string;
};

const EventsComponent = () => {
  const [events, setEvents] = useState<EventItem[]>([]);

  const fetchEvents = () => {
  gapi.client.calendar.events
    .list({
      calendarId: "primary",
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: "startTime",
    })
    .then((response: any) => {
      const items = response.result.items || [];
      const mapped = items.map((event: any) => {
        const start = event.start.dateTime || event.start.date;
        const end = event.end.dateTime || event.end.date;
        const date = new Date(start);
        const duration =
          new Date(end).getTime() - new Date(start).getTime();
        return {
          title: event.summary,
          time: date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          date: date.toISOString().slice(0, 10),
          duration: `${Math.floor(duration / 60000)}min`,
          location: event.location || "No location",
          color: "bg-purple-500",
          shadow: "shadow-purple-500/25",
        };
      });
      setEvents(mapped);
    });
};

  useEffect(() => {
    const loadGapi = () => {
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/api.js";
      script.onload = () => {
        gapi.load("client:auth2", initClient);
      };
      document.body.appendChild(script);
    };

    

    const initClient = () => {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        })
        .then(() => {
          const authInstance = gapi.auth2.getAuthInstance();
          if (!authInstance.isSignedIn.get()) {
            authInstance.signIn().then(fetchEvents);
          } else {
            fetchEvents();
          }
          gapi.client.calendar.events
            .list({
              calendarId: "primary",
              timeMin: new Date().toISOString(),
              showDeleted: false,
              singleEvents: true,
              maxResults: 5,
              orderBy: "startTime",
            })
            .then((response: any) => {
              const items = response.result.items || [];
              const mapped = items.map((event: any) => {
                const start = event.start.dateTime || event.start.date;
                const end = event.end.dateTime || event.end.date;
                const date = new Date(start);
                const duration =
                  new Date(end).getTime() - new Date(start).getTime();
                return {
                  title: event.summary,
                  time: date.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  }),
                  date: date.toISOString().slice(0, 10),
                  duration: `${Math.floor(duration / 60000)}min`,
                  location: event.location || "No location",
                  color: "bg-purple-500",
                  shadow: "shadow-purple-500/25",
                };
              });
              setEvents(mapped);
            });
        });
    };

    loadGapi();
  }, []);

  const eventsByDate = events.reduce<Record<string, EventItem[]>>(
    (acc, event) => {
      if (!acc[event.date]) acc[event.date] = [];
      acc[event.date].push(event);
      return acc;
    },
    {}
  );

  const dates = Object.keys(eventsByDate).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  const [selectedDate, setSelectedDate] = useState<string>(dates[0] || "");

  useEffect(() => {
    if (dates.length > 0 && !dates.includes(selectedDate)) {
      setSelectedDate(dates[0]);
    }
  }, [dates.join(","), selectedDate]);

  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <div className="w-full">
      <div className="h-full bg-gray-900 rounded-2xl shadow-xl border border-gray-800">
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">
              Upcoming Events
            </h2>
            <div className="flex items-center space-x-2">
              <button
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 hover:text-white transition"
                onClick={() => setShowDatePicker((prev) => !prev)}
                title="Open calendar"
              >
                <Calendar className="w-5 h-5" />
              </button>
            </div>
          </div>
          {showDatePicker && (
            <div className="mt-4">
              <input
                type="date"
                className="bg-gray-800 text-gray-200 border border-gray-700 rounded-lg px-3 py-2 outline-none"
                value={
                  selectedDate
                    ? new Date(selectedDate).toISOString().slice(0, 10)
                    : ""
                }
                onChange={(e) => {
                  setSelectedDate(
                    dates.find(
                      (d) =>
                        new Date(d).toISOString().slice(0, 10) ===
                        e.target.value
                    ) || e.target.value
                  );
                  setShowDatePicker(false);
                }}
                min={
                  dates.length > 0
                    ? new Date(dates[0]).toISOString().slice(0, 10)
                    : undefined
                }
                max={
                  dates.length > 0
                    ? new Date(dates[dates.length - 1])
                        .toISOString()
                        .slice(0, 10)
                    : undefined
                }
              />
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex space-x-2 mb-4 overflow-x-auto">
            {dates.map((date) => (
              <button
                key={date}
                className={`px-3 py-1 rounded-lg text-sm font-medium border ${
                  selectedDate === date
                    ? "bg-purple-600 text-white border-purple-500"
                    : "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700"
                } transition-all`}
                onClick={() => setSelectedDate(date)}
              >
                {new Date(date).toLocaleDateString(undefined, {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </button>
            ))}
          </div>
          <div className="space-y-4 p-4">
            {(eventsByDate[selectedDate] || []).length === 0 ? (
              <div className="text-gray-400 text-center">
                No events for this day.
              </div>
            ) : (
              eventsByDate[selectedDate].map((event, index) => (
                <div
                  key={index}
                  className="p-4 hover:bg-gray-800 rounded-xl transition-all duration-200 group border border-gray-800 hover:border-gray-700"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-4 h-4 rounded-full ${event.color} shadow-lg ${event.shadow} mt-1 flex-shrink-0`}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-white text-sm group-hover:text-purple-300 transition-colors duration-200">
                        {event.title}
                      </p>
                      <div className="mt-2 space-y-1">
                        <p className="text-gray-400 text-xs flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {event.time} • {event.duration}
                        </p>
                        <p className="text-gray-500 text-xs">
                          📍 {event.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <button className="w-full mt-6 p-3 border border-gray-700 rounded-xl text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-200 text-sm font-medium">
            View full calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsComponent;
