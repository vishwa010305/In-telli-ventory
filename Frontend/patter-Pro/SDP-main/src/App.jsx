
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Shared/Home'
import Login from './pages/Shared/Login'
import Register from './pages/Shared/Register'
import UserLayout from './layout/UserLayout'
import UserDashboard from './pages/User/UserDashboard'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import NotFound from './pages/Shared/NotFound'
import HomeLayout from './layout/HomeLayout'
import AdminCustomers from './pages/Admin/AdminUsers'
import SearchResults from './pages/SearchResult/SearchResult'
import Inventory from './pages/Admin/AdminInventory'
// import UserInventory from './components/UserInventory/UserInventory'
import Profile from './pages/Profile/Profile'
import Analytics from './pages/Admin/AdminAnalyticsData'
import Header from './pages/User/Header'
import Sidebar from './pages/User/Sidebar'
import UserAnalytics from './pages/User/UserAnalytics'
import UserInfo from './pages/User/UserInfo'
import UserProfile from './pages/User/Profile'
import UserInventory from './pages/User/UserInventory'
import UserFAQ from './pages/User/UserFAQ'
import Contact from './pages/Shared/Contact'
import UserTermsofService from './pages/User/UserTermsofService'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        {/* <Route path='/about' element={<About />} /> */}
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path="/search" element={<SearchResults />} />  // Add the search results route

                    </Route>
            
                    <Route element={<UserLayout />}>
                        <Route path='/user/dashboard' element={<UserDashboard />} />
                        <Route path='/user/analytics' element={<UserAnalytics />} />
                        <Route path='/user/Info' element={<UserInfo />} />
                        <Route path='/user/profile' element={<UserProfile />} />
                        <Route path='/user/inventory' element={<UserInventory />} />
                        <Route path='/user/FAQ' element={<UserFAQ />} />
                        <Route path='/user/termsofservice' element={<UserTermsofService />} />

                    </Route>

                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/customers' element={<AdminCustomers />} />
                         <Route path="/admin/inventory" element={<Inventory />} />
                        <Route path="/admin/analyticsdata" element={<Analytics />} />
                        {/* <Route path="/buy/:id" element={<BuyDetailsPage />} /> */}
                        <Route path="/profile" element={<Profile />} />
                          {/* <Route path="/user/inventory" element={<UserInventory />} /> */}
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
                

            </BrowserRouter>


        </>
    )
}

export default App