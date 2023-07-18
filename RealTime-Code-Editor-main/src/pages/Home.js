import React, {useState} from 'react'
import {v4 as uuiDv4} from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');

  const createNewRoom = (e) => {
  e.preventDefault();
  const id = uuiDv4;
  // console.log(id);
  setRoomId(id);
  toast.success('Created a new room');
}
  const joinRoom = () => {
    if(!roomId || !username) {
      toast.error('ROOM ID & Username is required');
      return;
    }
    // redirect
    navigate(`/editor/${roomId}`,{
      state: {
        username,
      },
    });
  };

  const InputEnter = (e) => {
    // console.log(e.code);
    if(e.code == 'Enter')
    {
      joinRoom();
    }
  }


  return (
    <div className="homePageWrapper">
      <div className='formWrapper'>
        <img className='homePageLogo' src= "/code-sync.png" alt="code-sync-logo"/>
        <h4 className='mainLabel'>Paste invitation ROOM ID</h4> 
        <div className='inputGroup'>
          <input type='text' className='inputBox' placeholder='ROOM ID' onChange={(e) => setRoomId(e.target.value)} value = {roomId} onKeyUp={InputEnter}/>
          <input type='text' className='inputBox' placeholder='USERNAME' onChange={(e) => setUsername(e.target.value)} value = {username} onKeyUp={InputEnter}/>
          <button className='btn joinBtn' onClick={joinRoom}>Join</button>
          <span className='createinfo'>
            If you don't have an invite then create &nbsp;
            <a onClick={createNewRoom} href="" className='createNewBtn'>
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h5>
          Built with 💚 by <a href='https://github.com/Jeenesh333'>Jennifer</a>
        </h5>
      </footer>
    </div>
  )
}

export default Home