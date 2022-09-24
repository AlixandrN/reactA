import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeContext from "./context";
import { store } from "./components/store/store";
import { Provider } from "react-redux";

function Main() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeContext.Provider value={{ modalVisible, setModalVisible }}>
          <App />
        </ThemeContext.Provider>
      </BrowserRouter>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
