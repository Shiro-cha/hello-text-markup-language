'use client'
import { Menu } from 'lucide-react';

interface HeaderProps {
  sidebarOpen: boolean;
  onMenuClick: () => void;
}

export function Header({ sidebarOpen, onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {!sidebarOpen && (
            <button
              onClick={onMenuClick}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu size={24} />
            </button>
          )}
          <h2 className="text-2xl font-semibold text-gray-800">Hello from Shiro</h2>
        </div>
      </div>
    </header>
  );
}