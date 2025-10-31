'use client'
import { useState } from 'react';
type User = {
  initials: string;
  name: string;
  email: string;
};
export function useUser() {
  const [initials,setInitials] = useState('SC');
  const [name,setName] = useState('Shiro-cha');
  const [email,setEmail] = useState('noum.rzdr@gmail.com');

  return {
    user: { initials, name, email },
  };
}
    