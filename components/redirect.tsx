// components/RedirectComponent.jsx (Regular React Component)

"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function RedirectComponent() {
  const router = useRouter();

  useEffect(() => {
    router.push('/chat');
  }, []);

  return null; // or any loading indicator if needed
}

export default RedirectComponent;
