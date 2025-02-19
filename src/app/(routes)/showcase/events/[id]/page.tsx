import React from 'react';
import EventDetails from '@/components/showcase/events/event-details';

export default function EventPage({ params }: { params: { id: string } }) {
  return <EventDetails eventId={parseInt(params.id)} />;
} 