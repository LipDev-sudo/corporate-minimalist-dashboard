import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div style={{ padding: 40 }}>
      <h1>Deploy funcionando 🚀</h1>
      <p>Se você está vendo isso, o Netlify está OK.</p>
    </div>
  );
};

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
