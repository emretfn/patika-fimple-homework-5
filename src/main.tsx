import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/reset.css";
import "./styles/global.css";
import "weather-react-icons/lib/css/weather-icons.css";
import { WeatherProvider } from "./contexts/WeatherContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>
);
