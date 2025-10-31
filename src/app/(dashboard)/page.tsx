'use client'
import { Home, BarChart3, Users, Settings, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Header } from '../components/layouts/Header';
import { NavItem } from '../components/navigation/NavItem';
import { NavMenu } from '../components/navigation/NavMenu';
import { UserProfile } from '../components/layouts/UserProfile';
import { EmptyState } from '../components/ui/EmptyState';

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


        <main className="flex-1 overflow-auto p-6">
          <EmptyState icon={BarChart3} title="There is nothing to show here" description="Start doing something" />
        </main>
      </div>
    </div>
  );
}