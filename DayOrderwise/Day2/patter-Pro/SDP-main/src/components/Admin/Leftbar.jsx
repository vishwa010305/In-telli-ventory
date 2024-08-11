import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Users } from 'lucide-react';

const DashboardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 13h4v8H3zm6-8h4v16H9zm6 8h4v8h-4z"
    />
  </svg>
);

const Leftbar = () => {
  const AdminLinks = [
    {
      title: 'Dashboard',
      link: '/admin/dashboard',
      icon: DashboardIcon, // Use the SVG icon component
    },
    {
      title: 'Customers',
      link: '/admin/customers',
      icon: Users,
    },
    {
      title: 'Inventory',
      link: '/admin/inventory',
      icon: Box, // Use the Box icon from lucide-react
    },
    {
      title: 'Analytics',
      link: '/admin/analyticsdata',
      icon: Box, // Use the Box icon from lucide-react
    },
  ];

  return (
    <div className='h-full w-1/6 flex justify-center items-center flex-col bg-red-500/5 pt-10'>
      <div className='h-full w-full flex flex-col justify-start items-center gap-4'>
        {AdminLinks.map((data, index) => (
          <NavLink key={index} to={data.link} className='p-5 border-b-4 border-gray-500 hover:border-primary font-bold mt-2 w-full'>
            <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
              {React.createElement(data.icon, { size: 20 })}
              {data.title}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Leftbar;
