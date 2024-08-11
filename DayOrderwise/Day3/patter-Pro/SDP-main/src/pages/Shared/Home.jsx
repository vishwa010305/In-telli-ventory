import React, { useState } from 'react';
import LetterPullup from '@/components/magicui/letter-pullup';
import { BorderBeam } from '@/components/magicui/border-beam';
import ChatBox from '@/components/ChatBox/ChatBox';
import Footer from '@/components/Shared/Footer';
// import IntegrationSection from '@/components/Integrate/IntegrationSection';
import video from '../../assets/videos/sasuke.mp4';
// import Contact from './Contact';

const Home = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'system', text: 'Welcome to the chat! How can I help you today?' }
  ]);

  const handleSendMessage = () => {
    if (message.trim() === '') return;

    const newMessage = { sender: 'user', text: message };
    setChatMessages([...chatMessages, newMessage]);
    setMessage('');

    // Simulate a reply from the system
    setTimeout(() => {
      const replyMessage = generateAIResponse(newMessage.text);
      setChatMessages(prevMessages => [...prevMessages, replyMessage]);
    }, 1000);
  };

  const generateAIResponse = (userMessage) => {
    // Mock AI response logic
    const responses = [
      "That's interesting! Tell me more.",
      "I see. What else can I assist you with?",
      "Can you please elaborate on that?",
      "Sure, let me help you with that.",
      "Thanks for sharing! How can I assist you further?"
    ];

    // Simple AI logic to generate a random response
    const randomIndex = Math.floor(Math.random() * responses.length);
    return { sender: 'system', text: responses[randomIndex] };
  };

  const bodyStyle = {
    width: '100vw',
    height: '200vh',
    padding: '1rem',
    fontFamily: 'Avenir, sans-serif',
    fontSize: '112.5%',
    backgroundImage: `
      url('https://your-image-url.com/background.jpg'), /* Background Image */
      url('https://videocdn.cdnpk.net/videos/f658d5e8-2080-4119-8ac2-6acb6e47dc00/horizontal/previews/watermarked/small.mp4'),
      url('https://ak.picdn.net/shutterstock/videos/1108630731/preview/stock-footage-online-modern-logistic-d-isometric-cartoon-animation-in-k-uhd-x.mp4')
    `,
    backgroundPosition: `
      center center,
      center center,
      -40vw 14rem,
      50% 10rem,
      60vw 14rem,
      -10vw calc(14rem + 20vw),
      30vw calc(14rem + 20vw)
    `,
    backgroundSize: `
      cover, /* Ensure your image covers the page */
      cover,
      80vw 80vw
    `,
    backgroundRepeat: 'no-repeat',
    animation: 'backgroundAnimation 15s infinite alternate',
  };
  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    zIndex: -1, // Ensure video stays in the background
  };
  

  const headerStyle = {
    maxWidth: '600px',
    margin: '24vh auto',
    textAlign: 'center',
    animation: 'headerAnimation 2s ease-in-out',
  };

  const h1Style = {
    fontSize: '3.2rem',
    fontWeight: 700,
    lineHeight: 1.2,
    color: '#222',
  };

  const mainStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '1rem',
  };

  const cardsStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    margin: '2rem 0',
    gap: '1rem',
  };

  const cardStyle = {
    flex: '1 1 calc(33% - 2rem)',
    margin: '1rem',
    padding: '1.5rem',
    backgroundColor: '#fff',
    borderRadius: '0.75rem',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    animation: 'cardAnimation 3s infinite alternate',
  };

  const cardImageStyle = {
    fontSize: '2rem',
    lineHeight: 1,
    marginBottom: '1rem',
    animation: 'iconDance 2s infinite',
  };

  const chatButtonStyle = {
    position: 'fixed',
    bottom: '1rem',
    right: '1rem',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: 'brown',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    cursor: 'pointer',
    zIndex: 1000,
  };

  const chatBoxStyle = {
    position: 'fixed',
    bottom: '80px',
    right: '1rem',
    width: '400px',
    height: '400px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    display: chatOpen ? 'flex' : 'none',
    zIndex: 1000,
    flexDirection: 'column',
  };

  const chatHeaderStyle = {
    backgroundColor: 'brown',
    color: '#fff',
    padding: '1rem',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    textAlign: 'center',
  };

  const chatContentStyle = {
    flex: 1,
    padding: '1rem',
    overflowY: 'auto',
  };

  const chatInputContainerStyle = {
    padding: '0.5rem',
    borderTop: '1px solid #ddd',
    display: 'flex',
    alignItems: 'center',
  };

  const chatInputStyle = {
    flex: 1,
    padding: '0.5rem',
    borderRadius: '0.25rem',
    border: '1px solid #ddd',
    marginRight: '0.5rem',
  };

  const sendButtonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: 'brown',
    color: '#fff',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    width: '30%',
  };

  return (
    <div style={bodyStyle}>
      <video
        src="https://cdn.pixabay.com/video/2017/11/02/12716-241674181_tiny.mp4"
        autoPlay
        muted
        loop
        style={videoStyle}
      />
      <div className="relative flex h-[10rem] w-full items-center justify-center absolute top-20 right-12 overflow-hidden">
        <div className='text-3xl font-bold mt-20'>Welcome to My INV_Toby</div>
        
      </div>
      <header style={headerStyle}>
        <h1 style={h1Style}>
          <LetterPullup words={"Dream big, manage inventory bigger."} delay={0.05} />
        </h1>
        <p>Success in inventory management is not about having the most, but having what you need, when you need it...</p>
      </header> 
      <BorderBeam />

      <div className="flex flex-wrap justify-center mt-8 gap-4">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-card text-card-foreground rounded-lg p-6 shadow-md transition-transform transition-shadow hover:shadow-lg">
                <div className="text-center">
                  <img src="https://placehold.co/300x180" alt="Card 1" className="w-full" />
                </div>
                <h3 className="text-lg font-bold mt-4">Real-time Stock Monitoring</h3>
                <p>Monitor stock levels in real-time to avoid shortages and overstock situations.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-card text-card-foreground rounded-lg p-6 shadow-md transition-transform transition-shadow hover:shadow-lg">
                <div className="text-center">
                  <img src="https://placehold.co/300x180" alt="Card 2" className="w-full" />
                </div>
                <h3 className="text-lg font-bold mt-4">Automated Alerts</h3>
                <p>Get automated alerts for low stock, expiration dates, and other critical inventory events.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-card text-card-foreground rounded-lg p-6 shadow-md transition-transform transition-shadow hover:shadow-lg">
                <div className="text-center">
                  <img src="https://placehold.co/300x180" alt="Card 3" className="w-full" />
                </div>
                <h3 className="text-lg font-bold mt-4">Comprehensive Reports</h3>
                <p>Generate detailed reports to analyze inventory performance and make informed decisions.</p>
              </div>
            </div>
            
             
      </div>

      <div style={chatBoxStyle}>
        <div style={chatHeaderStyle}>Chat</div>
        <div style={chatContentStyle}>
          {chatMessages.map((msg, index) => (
            <p key={index} style={{ textAlign: msg.sender === 'system' ? 'left' : 'right', margin: '0.5rem 0' }}>
              <strong>{msg.sender === 'system' ? 'System:' : 'You:'}</strong> {msg.text}
            </p>
          ))}
        </div>
        <div style={chatInputContainerStyle}>
          <input
            type="text"
            style={chatInputStyle}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button style={sendButtonStyle} onClick={handleSendMessage}>Send</button>
        </div>
      </div>
      <div style={chatButtonStyle} onClick={() => setChatOpen(!chatOpen)}>
        <i className="fas fa-comments" style={{ fontSize: '24px' }}></i>
      </div>
      {/* <Contact /> */}
      <Footer />
      {/* <IntegrationSection /> */}
    </div>
  );
};

export default Home;