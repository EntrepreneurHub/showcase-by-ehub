'use client';

import { AuthProvider } from '@/lib/auth/AuthContext';

export function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
} 