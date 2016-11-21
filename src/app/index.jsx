import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App.jsx";
import { Provider }from "react-redux";
import store from "./store/store";
//Render App with redux Provider Component
ReactDOM.render(
        <Provider 
            store={store} // passing our app state in Provider Component
        >
             <App />
        </Provider>
    , document.getElementById("react-container"))
