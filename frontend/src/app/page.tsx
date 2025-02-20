import { redirect } from 'next/navigation';

// This is a feature module of EntrepreneurHub
// All routes in this app should be under /showcase/*
export default function RootPage() {
  redirect('/showcase');
} 