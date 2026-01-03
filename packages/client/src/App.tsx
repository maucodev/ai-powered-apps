import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation,
} from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import ReviewPage from './pages/ReviewPage';

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

function AppContent() {
    const location = useLocation();

    const Home = () => {
        return (
            <div className="p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    AI-Powered Apps
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    Welcome to our AI-powered application featuring a chatbot
                    and review summarizer.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">Chatbot</h2>
                        <p className="text-gray-600 mb-4">
                            An interactive chatbot for theme park queries.
                        </p>
                        <Link
                            to="/chat"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Try Chatbot
                        </Link>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">
                            Review Summarizer
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Analyze and summarize customer reviews.
                        </p>
                        <Link
                            to="/reviews"
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        >
                            View Reviews
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex space-x-8">
                            <Link
                                to="/"
                                className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                                    location.pathname === '/'
                                        ? 'border-indigo-500 text-indigo-600'
                                        : 'border-transparent text-gray-900 hover:border-gray-300'
                                }`}
                            >
                                Home
                            </Link>
                            <Link
                                to="/chat"
                                className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                                    location.pathname === '/chat'
                                        ? 'border-indigo-500 text-indigo-600'
                                        : 'border-transparent text-gray-900 hover:border-gray-300'
                                }`}
                            >
                                Chatbot
                            </Link>
                            <Link
                                to="/reviews"
                                className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                                    location.pathname === '/reviews'
                                        ? 'border-indigo-500 text-indigo-600'
                                        : 'border-transparent text-gray-900 hover:border-gray-300'
                                }`}
                            >
                                Review Summarizer
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chat" element={<ChatPage />} />
                    <Route path="/reviews" element={<ReviewPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
