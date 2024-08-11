import React from 'react'

const UserInfo = () => {
  // Sample user data
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joined: 'January 1, 2020'
  }

  return (
    <section id="user-info" className="p-4">
      <h2 className="text-xl font-bold mb-4">User Info</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Joined:</strong> {userData.joined}</p>
    </section>
  )
}

export default UserInfo
