import React from 'react';
import EventDetails from '@/components/showcase/events/event-details';

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function EventPage({ 
  params,
  searchParams, // eslint-disable-line @typescript-eslint/no-unused-vars 
}: PageProps) {
  const resolvedParams = await params;
  return <EventDetails eventId={parseInt(resolvedParams.id)} />;
} 