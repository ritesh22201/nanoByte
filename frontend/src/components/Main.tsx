import React, { useState, useEffect } from 'react';
import { BiSolidMicrophoneOff } from 'react-icons/bi';
import { FaMicrophone } from 'react-icons/fa';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Main = () => {
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    const [microPhone, setMicroPhone] = useState<boolean>(false);
    const [isTranscript, setIsTranscript] = useState<string>('');

    const handleMicroPhoneStop = () => {
        SpeechRecognition.stopListening();
        setMicroPhone(false)
    }

    const handleMicroPhoneStart = () => {
        SpeechRecognition.startListening();
        setMicroPhone(true);
    }

    useEffect(() => {
        setIsTranscript(transcript);
    }, [transcript]);

    return (
        <div className='bg-gray-300 flex items-end w-3/4 relative'>
            <div className='absolute w-full bottom-8 text-slate-400'>
                <input value={isTranscript} onChange={(e) => setIsTranscript(e.target.value)} className='w-4/5 bg-gray-700 rounded-3xl outline focus:border-blue-400 px-4 py-5 ' type="text" placeholder='Enter your prompt' />
            </div>
            <div className='absolute right-12 bottom-12'>
                {microPhone ?
                    <FaMicrophone className='text-green-700 text-2xl' onClick={handleMicroPhoneStop} />
                    :
                    <BiSolidMicrophoneOff className='text-slate-400 text-2xl' onClick={handleMicroPhoneStart} />
                }
            </div>
        </div>
    )
}

export default Main;