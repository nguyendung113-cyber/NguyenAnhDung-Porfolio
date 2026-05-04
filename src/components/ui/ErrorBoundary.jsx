import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-darkblue flex flex-col items-center justify-center p-4">
          <div className="bg-[#1a1c23] border border-red-500/30 p-8 rounded-xl max-w-md w-full text-center shadow-lg">
            <i className="fas fa-triangle-exclamation text-red-500 text-5xl mb-4"></i>
            <h2 className="text-xl font-bold text-ivory mb-2">Đã có lỗi xảy ra!</h2>
            <p className="text-gray-400 mb-6 text-sm">
              Rất tiếc, ứng dụng đang gặp sự cố khi tải. Bạn vui lòng tải lại trang để tiếp tục nhé!
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-cinnabar hover:bg-red-600 text-ivory px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Tải lại trang
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
