import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, User, Box, BarChart2 } from 'lucide-react'

const UserLeftbar = () => {
  const links = [
    { title: 'UserDashboard', 
      link: '/user/dashboard',
      icon: Home 
    },
    { title: 'Profile', 
      link: '/user/profile', 
      icon: User 
    },
    { title: 'Inventory',
      link: '/user/inventory', 
      icon: Box 
    },
    { title: 'Analytics',
      link: '/user/analytics',
      icon: BarChart2 
    },
    { title: 'FAQ',
      link: '/user/FAQ',
      icon: BarChart2 
    },
    { title: 'TermsofService',
      link: '/user/termsofservice',
      icon: BarChart2 
    }
  ]

  return (
    <div className="h-full w-1/6 flex justify-center items-center flex-col bg-red-500/5 pt-10">
      <div className="h-full w-full flex flex-col justify-start items-center gap-4">
        {links.map((data, index) => (
                    <NavLink key={index} to={data.link} className='p-5 border-b-4 border-gray-500 hover:border-primary font-bold mt-2 w-full'>

            <span className="flex flex-row items-center justify-start h-full w-full gap-2">
              {React.createElement(data.icon, { size: 20 })}
              {data.title}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default UserLeftbar
