// components/NavbarItem.tsx
import React from 'react';
import Link from 'next/link';

interface NavbarItemProps {
  icon: React.ReactNode; // The icon to display
  name: string;         // The name of the item
  href: string;         // The link for the item
}

const NavbarItem: React.FC<NavbarItemProps> = ({ icon, name, href }) => {
  return (
    <Link href={href}>
      <a className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded-md transition">
        <span className="text-lg">{icon}</span>
        <span className="text-sm">{name}</span>
      </a>
    </Link>
  );
};

export default NavbarItem;
