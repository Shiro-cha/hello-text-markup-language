'use client'
import { Home, BarChart3, Users, Settings, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Header } from '../components/layouts/Header';
import { NavItem } from '../components/navigation/NavItem';
import { NavMenu } from '../components/navigation/NavMenu';
import { UserProfile } from '../components/layouts/UserProfile';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Users, label: 'Users' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-0'
        } bg-white border-r border-gray-200 transition-all duration-300 overflow-hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 hover:bg-gray-100 rounded"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <NavMenu />
          </nav>

          <UserProfile />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header sidebarOpen={sidebarOpen} onMenuClick={() => setSidebarOpen(true)} />

        {/* Main Area - Empty with placeholder */}
        <main className="flex-1 overflow-auto p-6">
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <BarChart3 size={48} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Your workspace is empty
              </h3>
              <p className="text-gray-500">
                Start by creating your first project or importing existing data
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}