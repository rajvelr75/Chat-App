import React, { useState } from 'react';
import { PaperAirplaneIcon, PaperClipIcon } from '@heroicons/react/24/outline';
import { collection, addDoc, serverTimestamp, updateDoc, doc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, auth, storage } from '../firebase';

const Input = ({ selectedChat }) => {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState('');
  const [caption, setCaption] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  // Handle file input change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileType(selectedFile.type.startsWith('image/') ? 'image' : 'document');
      setShowPreview(true); // Show preview for both images and documents
    }
  };

  // Send the message (image or document)
  const sendMessage = async () => {
    if (!message.trim() && !file) return;

    try {
        const user = auth.currentUser;
        if (!user || !selectedChat) return;

        const chatId = [selectedChat.uid, user.uid].sort().join('_');
        const messagesRef = collection(db, 'chats', chatId, 'messages');
        let fileUrl = null;
        let fileName = null;

        if (file) {
            const fileRef = ref(storage, `files/${selectedChat.uid}/${Date.now()}_${file.name}`);
            await uploadBytes(fileRef, file);
            fileUrl = await getDownloadURL(fileRef);
            fileName = file.name;
        }

        const content = fileUrl && fileType === 'image'
            ? caption || ''
            : message || fileName;

        // Create a new message and get its ID
        const messageDoc = await addDoc(messagesRef, {
            content,
            from: user.displayName || 'Anonymous',
            time: serverTimestamp(),
            profilePic: user.photoURL,
            fileUrl: fileUrl || null,
            fileType: fileType || null,
            fileName: fileName || null,
        });

        // Update the message with its own ID
        await updateDoc(doc(db, 'chats', chatId, 'messages', messageDoc.id), {
            id: messageDoc.id,
        });

        // Update streak logic
        const chatDocRef = doc(db, 'users', selectedChat.uid); // Adjust to your structure
        const currentTime = new Date();

        const chatSnapshot = await getDoc(chatDocRef);
        if (chatSnapshot.exists()) {
            const chatData = chatSnapshot.data();
            const lastInteraction = chatData.lastInteraction ? new Date(chatData.lastInteraction) : null;

            // Calculate the difference
            const diff = lastInteraction ? (currentTime - lastInteraction) / (1000 * 60 * 60) : null;

            if (lastInteraction && diff < 24) {
                // Increment streak
                await updateDoc(chatDocRef, {
                    streakCount: (chatData.streakCount || 0) + 1,
                    lastInteraction: currentTime.toISOString(),
                });
            } else {
                // Reset or start a new streak
                await updateDoc(chatDocRef, {
                    streakCount: 1,
                    lastInteraction: currentTime.toISOString(),
                });
            }
        }

        // Reset state
        setMessage('');
        setFile(null);
        setFileType('');
        setCaption('');
        setShowPreview(false);
    } catch (error) {
        console.error('Error sending message:', error);
    }
};


  return (
    <div className="relative">
      <div className="p-4 bg-gray-800 flex items-center">
        {/* File input */}
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          accept="*"
          onChange={handleFileChange}
        />

        {/* Paperclip button for attaching files */}
        <button
          type="button"
          className="p-2 bg-gray-700 rounded-full text-gray-300 hover:bg-gray-600 focus:outline-none"
          onClick={() => document.getElementById('fileInput').click()}
        >
          <PaperClipIcon className="w-6 h-6" />
        </button>

        {/* Message input field */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="w-full px-3 py-2 ml-3 rounded-md bg-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none"
        />

        {/* Send message button */}
        <button
          type="button"
          onClick={sendMessage}
          className="ml-3 p-2 bg-yellow-500 rounded-full text-white hover:bg-yellow-600 focus:outline-none"
        >
          <PaperAirplaneIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Preview for image or document */}
      {showPreview && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-lg mx-4 relative">
            <div className="overflow-y-auto" style={{ maxHeight: '80vh' }}>
              {fileType === 'image' ? (
                <>
                  {/* Image Preview */}
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Preview"
                    className="w-full h-auto mb-2 rounded-md"
                    style={{ maxHeight: '500px', objectFit: 'contain' }}
                  />
                  <input
                    type="text"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Add a caption..."
                    className="w-full px-3 py-2 mb-2 rounded-md bg-gray-700 text-gray-300 placeholder-gray-500"
                  />
                </>
              ) : (
                <>
                  {/* Document Preview */}
                  <p className="text-white mb-2">File: {file.name}</p>
                </>
              )}
            </div>

            <div className="flex justify-between mt-2">
              <button
                className="bg-gray-300 px-4 py-2 rounded-md"
                onClick={() => {
                  setShowPreview(false);
                  setFile(null);
                }}
              >
                Cancel
              </button>
              <button
                className="bg-yellow-500 px-4 py-2 text-white rounded-md"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Input;