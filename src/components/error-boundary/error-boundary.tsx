import React, { Component, ReactNode, ErrorInfo } from "react";

import "./error-boundary.styles.css";

// Define state type
interface ErrorBoundaryState {
  hasErrored: boolean;
}

class ErrorBoundary extends Component<React.PropsWithChildren<{}>, ErrorBoundaryState> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);

    // Initialize state with hasErrored set to false
    this.state = {
      hasErrored: false,
    };
  }

  // Update state when an error is caught
  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasErrored: true };
  }

  // Log error information
  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log("Error caught by ErrorBoundary:", error, info);
  }

  render(): ReactNode {
    if (this.state.hasErrored) {
      return (
        <div className="error-boundary-overlay">
          <div className="error-boundary-container"></div>
          <h2 className="error-boundary-text">This Page is Lost in Space</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
