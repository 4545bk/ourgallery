'use client';
import { useState, useEffect } from 'react';

export default function VideoCallButton() {
  const [isCallStarted, setIsCallStarted] = useState(false);
  const [roomName, setRoomName] = useState('');

  useEffect(() => {
    if (isCallStarted && roomName) {
      const domain = 'meet.jit.si';
      const options = {
        roomName: roomName,
        parentNode: document.querySelector('#meet'),
        width: '100%',
        height: 500,
      };
      const api = new JitsiMeetExternalAPI(domain, options);

      return () => api.dispose(); // Cleanup on unmount
    }
  }, [isCallStarted, roomName]);

  const handleStartCall = () => {
    if (roomName.trim()) {
      setIsCallStarted(true);
    } else {
      alert('Please enter a room name!');
    }
  };

  return (
    <div>
      {!isCallStarted ? (
        <div>
          <input
            type="text"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            placeholder="Enter a room name"
            style={{ padding: '5px', marginRight: '10px' }}
          />
          <button onClick={handleStartCall}>Start Family Call</button>
        </div>
      ) : (
        <div id="meet" />
      )}
    </div>
  );
}