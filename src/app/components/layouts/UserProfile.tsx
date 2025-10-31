'use client'


export function UserProfile() {
  const { user } = useUser();

  return (
    <div className="p-4 border-t border-gray-200">
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
          {user?.initials || 'SC'}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">
            {user?.name || 'Shiro-cha'}
          </p>
          <p className="text-xs text-gray-500">
            {user?.email || 'noum.rzdr@gmail.com'}
          </p>
        </div>
      </div>
    </div>
  );
}