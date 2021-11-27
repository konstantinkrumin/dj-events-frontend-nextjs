import { useRouter } from 'next/Router';

const EventPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>My Event</h1>
      <h3>{router.query.slug}</h3>
      <button onClick={() => router.push('/')}>Home Page</button>
    </div>
  );
};

export default EventPage;
