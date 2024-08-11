import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import inventoryImage from '../../assets/image/vishwa-2.jpg'; // Adjust the path to your image

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }

    // Add additional sign-up logic here, such as sending data to your backend

    alert('Registration successful! Redirecting to login page.');
    navigate('/login');
  };

  return (
    <div className="h-full w-full flex absolute top-20 justify-center items-center">
      <div className="flex shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/2 bg-green-600/5 p-8">
          <Card className="w-full">
            <CardHeader className="space-y-1">
              <CardTitle className="text-lg">Welcome! 👋🏻</CardTitle>
              <CardDescription className="text-sm">Let's create your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email" className="text-sm">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  className="text-sm"
                  autoFocus
                />
                <span className="text-xs text-gray-500">Never shown to the public.</span>
              </div>
              <div className="space-y-1">
                <Label htmlFor="username" className="text-sm">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  maxLength={20}
                  placeholder="Choose a unique username"
                  className="text-sm"
                />
                <span className="text-xs text-gray-500">Unique, no spaces, short.</span>
              </div>
              <div className="space-y-1">
                <Label htmlFor="password" className="text-sm">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="text-sm"
                />
                <span className="text-xs text-gray-500">At least 10 characters.</span>
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirmPassword" className="text-sm">Password Again</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter your password"
                  className="text-sm"
                />
              </div>
            </CardContent>
            <Button className="w-full" onClick={handleSignUp}>Sign Up</Button>
            <div className="text-center text-xs text-gray-500">
              By registering, you agree to the <Link to="/privacy" className="text-blue-500">privacy policy</Link> and <Link to="/tos" className="text-blue-500">terms of service</Link>.
            </div>
            <div className="text-center text-xs">
              Already have an account? <Button variant="link" onClick={() => navigate('/login')}>Log In</Button>
            </div>
          </Card>
        </div>
        <div className="w-1/2">
          <img src={inventoryImage} alt="Inventory" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Register;
