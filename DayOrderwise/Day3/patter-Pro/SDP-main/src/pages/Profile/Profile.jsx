import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
    bio: '',
    photo: '', // Add photo field to the profile state
  });
  const [loading, setLoading] = useState(false);
  const [photoPreview, setPhotoPreview] = useState(''); // State for photo preview

  useEffect(() => {
    // Fetch the existing profile data from an API
    // Replace with your API call
    const fetchProfile = async () => {
      const response = await fetch('/api/profile');
      const data = await response.json();
      setProfile(data);
      setPhotoPreview(data.photo); // Set the photo preview
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
        setProfile((prevProfile) => ({
          ...prevProfile,
          photo: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedProfile = await response.json();
      setProfile(updatedProfile);
      console.log('Profile updated:', updatedProfile);
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Profile Page</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4 text-center">
          <label className="block text-sm font-medium text-red-700">Profile Photo</label>
          <div className="mt-2 mb-4">
            <img
              src={photoPreview || '/path/to/default/profile.png'} // Add default image path
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full mx-auto border border-gray-300"
            />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-red-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-red-900 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-red-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-red-900 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-red-500">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={profile.password}
            onChange={handleChange}
            className="mt-1 block w-full border border-red-900 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bio" className="block text-sm font-medium text-red-400">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            className="mt-1 block w-full border border-red-900 rounded-md shadow-sm p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? 'Updating...' : 'Update Profile'}
        </button>
      </form>
    </div>
  );
};

export default Profile;
