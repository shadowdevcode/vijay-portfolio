/**
 * ErrorBoundary — React Error Safety Net
 * ========================================
 * Catches unhandled JavaScript errors in the component tree
 * and displays a user-friendly fallback instead of a white screen.
 * Wraps the entire <App /> in App.tsx.
 */
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Portfolio Error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-6">
                    <div className="text-center max-w-md">
                        <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl">⚡</span>
                        </div>
                        <h2 className="text-xl font-bold text-zinc-900 mb-2">Something went wrong</h2>
                        <p className="text-zinc-500 text-sm mb-6">
                            The page encountered an unexpected error. Please refresh to try again.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors"
                        >
                            Refresh Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
