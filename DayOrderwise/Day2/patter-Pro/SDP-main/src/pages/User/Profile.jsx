import React, { useEffect, useState } from 'react'
import { FaUserEdit, FaCogs, FaLightbulb } from 'react-icons/fa'

const Profile = () => {
  const [aiSuggestions, setAiSuggestions] = useState([])
  const [showEditOptions, setShowEditOptions] = useState(false)
  const [showSettingsOptions, setShowSettingsOptions] = useState(false)

  // Sample user data
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joined: 'January 1, 2020',
    profilePic: 'https://tse4.mm.bing.net/th?id=OIF.fP9W3CrJUBHK6YzQVP3A6A&pid=Api&P=0&h=180'
  }

  // Fetch AI suggestions (mock implementation)
  useEffect(() => {
    // Simulate fetching data from an AI service
    setTimeout(() => {
      setAiSuggestions([
        'Update your profile picture for a fresh look!',
        'Complete your bio to let others know more about you.',
      ])
    }, 1000)
  }, [])

  const handleEditClick = () => {
    setShowEditOptions(!showEditOptions)
  }

  const handleSettingsClick = () => {
    setShowSettingsOptions(!showSettingsOptions)
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-red-500/5 p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <img src={userData.profilePic} alt="Profile" className="w-24 h-24 rounded-full mr-4" />
          <div>
            <h2 className="text-3xl font-bold mb-1">{userData.name}</h2>
            <p className="text-gray-600">{userData.email}</p>
            <p className="text-gray-500">Joined on {userData.joined}</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <FaLightbulb className="mr-2 text-yellow-500" /> Any suggestion?  
          </h3>
          <ul className="list-disc pl-5 text-gray-700">
            {aiSuggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between mt-6">
          <button 
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" 
            onClick={handleEditClick}
          >
            <FaUserEdit className="mr-2" /> Edit Profile
          </button>
          <button 
            className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            onClick={handleSettingsClick}
          >
            <FaCogs className="mr-2" /> Settings
          </button>
        </div>
        {showEditOptions && (
          <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Edit Options</h3>
            <div className="flex flex-col gap-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Change Profile Picture
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Update Bio
              </button>
              <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                Change Password
              </button>
            </div>
          </div>
        )}
        {showSettingsOptions && (
          <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Settings Options</h3>
            <div className="flex flex-col gap-4">
              <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Account Settings
              </button>
              <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
                Privacy Settings
              </button>
              <button className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600">
                Notification Settings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
