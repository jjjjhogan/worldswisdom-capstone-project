import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);
    console.error(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
          <div className="d-flex align-items-baseline">
            <i className="bi-exclamation-triangle-fill text-danger fs-1 me-2" />
            <h1>Oops, something went wrong</h1>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
