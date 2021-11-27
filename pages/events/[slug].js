import { useRouter } from 'next/Router';

import Layout from '../../components/Layout';

const EventPage = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>My Event</h1>
    </Layout>
  );
};

export default EventPage;
