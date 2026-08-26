import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import RobotProfileImage from './assets/react.svg'
import UserProfileImage from './assets/user.png'
import './App.css'

      function ChatInput({ chatMessages, setChatMessages }) {
        const [inputText, setInputText] = useState("");

        function saveInputText(event) {
          setInputText(event.target.value);
        }

        function sendMessage() {
          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: "user",
              id: crypto.randomUUID(),
            },
          ];

          setChatMessages(newChatMessages);

          const response = Chatbot.getResponse(inputText);
          setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: "robot",
              id: crypto.randomUUID().value,
            },
          ]);

          setInputText("");
        }

        return (
          <>
            <input
              placeholder="Send a message to Chatbot"
              size="30"
              onChange={saveInputText}
              value={inputText}
            />
            <button onClick={sendMessage} className="send-button">
              Send
            </button>
          </>
        );
      }

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
