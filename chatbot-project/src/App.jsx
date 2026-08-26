import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import RobotProfileImage from './assets/react.svg'
import UserProfileImage from './assets/user.png'
import './App.css'


      function ChatMessage({ message, sender }) {
        return (
          <div>
            {sender === "robot" && <img src={RobotProfileImage} width="50" />}
            {message}
            {sender === "user" && <img src={UserProfileImage} width="50" />}
          </div>
        );
      }

      function ChatMessages({ chatMessages }) {
        return (
          <>
            {chatMessages.map((chatMessage) => {
              return (
                <ChatMessage
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  key={chatMessage.id}
                />
              );
            })}
          </>
        );
      }

function App() {
        const [chatMessages, setChatMessages] = useState([
          {
            message: "hello chatbot",
            sender: "user",
            id: "id1",
          },
          {
            message: "Hello! How can I help you?",
            sender: "robot",
            id: "id2",
          },
          {
            message: "can you get me todays date?",
            sender: "user",
            id: "id3",
          },
          {
            message: "Today is September 27",
            sender: "robot",
            id: "id4",
          },
        ]);

        return (
          <div className="app-container">
            <ChatMessages chatMessages={chatMessages} />
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App
