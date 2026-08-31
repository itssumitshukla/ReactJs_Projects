import RobotProfileImage from '../assets/react.svg'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css';

  export function ChatMessage({ message, sender }) {
        return (
          <div>
            {sender === "robot" && <img src={RobotProfileImage} width="50" />}
            {message}
            {sender === "user" && <img src={UserProfileImage} width="50" />}
          </div>
        );
      }