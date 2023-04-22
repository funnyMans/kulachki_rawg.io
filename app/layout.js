import { getServerSession } from 'next-auth';

import Sidebar from '@/storybook/Sidebar';
import AppContainer from '@/storybook/AppContainer/AppContainer';

import { NextAuthOptions } from './api/auth/[...nextauth]/route';
import Footer from '../storybook/Footer';
import Header from '../storybook/Header';
import Main from '../storybook/Main';
import './globals.css';

export const metadata = {
  title: 'Kulachki',
  description: 'Created for testing purposes',
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(NextAuthOptions);
  return (
    <html lang='en'>
      <body>
        <AppContainer session={session}>
          <div>
            <Header />
            <Sidebar />
            <Main>{children}</Main>
            <Footer />
          </div>
        </AppContainer>
      </body>
    </html>
  );
}
