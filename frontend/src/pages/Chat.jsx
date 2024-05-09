import MainLayout from '../layouts/MainLayout';
import api from '../api';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function Chat() {
  const [messages, setMessages] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const sendMessage = (data) => {
    console.log(data);
    api.post('/chat/', { user_input: data.user_input })
      .then(response => {
        console.log('Response:', response.data);
        setMessages([...messages, { text: data.user_input, sender: 'user' }, { text: response.data.Bot, sender: 'bot' }]);
        reset();
      })
      .catch(error => {
        console.error('Error:', error);
        if (error.response) {
          console.error('Server Error:', error.response.status, error.response.data);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error', error.message);
        }
      });
  };
  
  useEffect(() => {
    // This will run whenever 'messages' state changes
  }, [messages]);
  

  useEffect(() => {
    setMessages([{ text: 'Hello! How can I assist you today?', sender: 'bot' }]);
  }, []);

  return (
    <MainLayout>
      <div className='mx-96 mt-12 h-[88vh]'>
          <div className="p-6 w-full h-[80vh] mx-auto bg-white rounded-xl shadow-md flex items-center justify-end flex-col overflow-auto">
            {messages.map((message, index) => (
              <div key={index} className={`p-2 ${message.sender === 'user' ? 'bg-blue-200 self-end' : 'bg-green-200 self-start'} rounded-lg`}>
                {message.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit(sendMessage)} className="flex items-center justify-center mt-6 gap-4">
            <input {...register('user_input')} className="border-2 w-full border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none" />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Send
            </button>
          </form>
      </div>
    </MainLayout>
  );
}

export default Chat;
