import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/chatFeed';
import LoginForm from './components/loginForm';
import './App.css';

const projectID = '5d7a8045-712a-4cc1-b535-857c14b4f26c';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
