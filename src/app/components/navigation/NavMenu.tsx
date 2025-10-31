'use client'
import { usePathname } from 'next/navigation';
import { NavItem } from './NavItem';
import { MENU_ITEMS } from '@/app/constants/navigation';


export function NavMenu() {
  const pathname = usePathname();

  return (
    <ul className="space-y-2">
      {MENU_ITEMS.map((item) => (
        <NavItem
          key={item.href}
          {...item}
          active={pathname === item.href}
        />
      ))}
    </ul>
  );
}