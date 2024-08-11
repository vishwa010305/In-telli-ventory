import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import LetterPullup from '@/components/magicui/letter-pullup';
import inventoryImage from '../../assets/image/vishwa.jpg'; // Make sure to replace this path with the actual path to your image

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check email and show alert message before navigating
    if (email === 'admin@gmail.com') {
      alert('Welcome Admin! Redirecting to the Admin Dashboard.');
      navigate('/admin/dashboard');
    } else {
      alert('Login successful! Redirecting to your User Dashboard.');
      navigate('/user/dashboard');
    }
  };

  return (
    <div className="h-full w-full flex absolute top-20 justify-center items-center">
      <div className="flex shadow-lg rounded-lg overflow-hidden">
        <div className="w-3/2 bg-red-600/5 p-8">
          <Card className="w-full">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription className="text-2x1">
                <LetterPullup words={"Hello, Who's this?"} delay={0.05} />
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
              </div>
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full">Login</Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="w-1/2">
          <img src={inventoryImage} alt="Inventory" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Login;
