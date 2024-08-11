import React from 'react'

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <nav>
        <ul>
          <li className="mb-4">
            <a href="#user-info" className="hover:text-gray-400">User Info</a>
          </li>
          <li className="mb-4">
            <a href="#user-analytics" className="hover:text-gray-400">User Analytics</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
