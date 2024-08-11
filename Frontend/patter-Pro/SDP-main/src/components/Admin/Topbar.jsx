import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ModeToggle } from '../mode-toggle';
import { NavLink, useNavigate } from 'react-router-dom';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { Home } from 'lucide-react';
// import Navbar from '../Shared/Navbar';

const UserTopbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout operations here (e.g., clearing auth tokens)
    navigate('/');
  };

  return (
    <div className='h-[8vh] w-full bg-primary/5 flex justify-center bg-red-500/5 items-center'>
      <div className='w-[100%] flex items-center justify-end gap-4'>
      <NavLink to="/" className='text-primary flex items-center'>
          <Home size={26 } />
        </NavLink>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <NavLink to="#">
              <Avatar>
                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzKh3VVcCK5uMD1dhwBhgFWryxEmxFlzkPw&s" alt="@shadcn" />
                <AvatarFallback>V</AvatarFallback>
              </Avatar>
            </NavLink>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => navigate('/profile')}><button>Profile</button></DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}><button>Logout</button></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ModeToggle />
      </div>
    </div>
  );
};

export default UserTopbar;
