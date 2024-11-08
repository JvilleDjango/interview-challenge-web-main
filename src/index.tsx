import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { App } from "./components/App";

import Spinner from "./components/spinner";
import ErrorBoundary from "./components/error-boundary";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);
