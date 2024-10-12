'use client';

import React, { useState, useRef } from 'react';

// A component for recording and playing back audio
const AudioRecorder: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  const handleStartRecording = async () => {
    try {
      // Request access to the user's microphone
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      mediaRecorder.current = recorder;

      recorder.start();
      setIsRecording(true);

      // Collect audio data when available
      recorder.ondataavailable = (event) => {
        audioChunks.current.push(event.data);
      };

      // Create audio URL when recording stops
      recorder.onstop = () => {
        const blob = new Blob(audioChunks.current, { type: 'audio/mpeg' });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        audioChunks.current = []; // Reset the audio chunks after saving
      };
    } catch (err) {
      console.error("Error accessing the microphone", err);
      alert('Could not access the microphone. Please check your permissions and try again.');
    }
  };

  const handleStopRecording = () => {
    mediaRecorder.current?.stop();
    setIsRecording(false);
  };

  return (
    <div className="p-4 mx-auto max-w-md text-center bg-white shadow rounded-lg">
      <div className="flex justify-center mb-4">
        <button
          onClick={isRecording ? handleStopRecording : handleStartRecording}
          className={`rounded-full h-16 w-16 flex items-center justify-center 
                      ${isRecording ? 'bg-red-500' : 'bg-green-500'} 
                      text-white hover:opacity-80 transition-opacity duration-150`}
        >
          {isRecording ? 'Stop' : 'Record'}
        </button>
      </div>
      {audioUrl && (
        <div>
          <audio controls src={audioUrl} className="w-full">
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;