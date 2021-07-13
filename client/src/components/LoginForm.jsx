import { useState } from 'react';
import axios from 'axios';

const projectID =  '2cd25e2f-42b7-4158-9b70-a424085368ee';

const LoginForm = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const[error, setError] = useState('');

const handleSubmit = async (e) => {
     e.preventDefault();

     const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };
     try {
        await axios.get('https://api.chatengine.io/chats', { headers: authObject });
  
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
  
        window.location.reload();

        setError('');
      } catch (err) {
        setError('Oops, incorrect credentials');
      }
    };

return (
  <div className="wrapper">
        <div className="form">
            <h1 className="title">Hello...!</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                <div align="center">
                         <button type="submit" className="button">
                                <swap>login</swap>
                         </button>
                </div>  
                <h2 className="error">{error}</h2>     
            </form>
        </div>
    </div>
)};


export default LoginForm;