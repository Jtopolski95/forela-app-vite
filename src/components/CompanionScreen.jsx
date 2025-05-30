import React, { useState, useRef, useEffect } from 'react';
import { Menu as MenuIcon, Send, Mic, MicOff, Plus } from 'lucide-react';

const CompanionScreen = ({
  openDrawer,
  allChatSessions,
  currentChatSessionId,
  setCurrentChatSessionId,
  addNewChatMessage,
  startNewChatSession
}) => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [allChatSessions, currentChatSessionId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      addNewChatMessage(currentChatSessionId, {
        id: `msg_${Date.now()}`,
        sender: 'user',
        text: message,
        timestamp: new Date().toISOString()
      });
      setMessage('');
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Add voice recording logic here
  };

  const currentSession = allChatSessions.find(
    (session) => session.id === currentChatSessionId
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Companion</h1>
          <button
            onClick={openDrawer}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <MenuIcon size={24} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="px-4 py-4">
          <button
            onClick={startNewChatSession}
            className="w-full bg-white rounded-lg shadow-sm p-4 text-left hover:bg-gray-50 transition-colors flex items-center space-x-3"
          >
            <Plus size={20} className="text-gray-400" />
            <span className="text-gray-700">Start New Chat</span>
          </button>
        </div>

        {currentSession && (
          <div className="flex flex-col h-[calc(100vh-12rem)]">
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {currentSession.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={handleSubmit}
              className="border-t border-gray-200 bg-white p-4"
            >
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={toggleRecording}
                  className={`p-2 rounded-full ${
                    isRecording ? 'bg-red-100' : 'hover:bg-gray-50'
                  }`}
                >
                  {isRecording ? (
                    <MicOff size={20} className="text-red-500" />
                  ) : (
                    <Mic size={20} className="text-gray-600" />
                  )}
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="p-2 text-blue-500 hover:bg-blue-50 rounded-full"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanionScreen; 