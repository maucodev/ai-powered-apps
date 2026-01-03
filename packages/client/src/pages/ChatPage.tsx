import ChatBox from '../components/chat/ChatBox';

const ChatPage = () => {
    return (
        <div className="p-4 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h1 className="text-2xl font-bold mb-4">Chatbot</h1>
                    <p className="text-gray-600 mb-6">
                        An interactive chatbot for theme park queries.
                    </p>
                    <ChatBox />
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
