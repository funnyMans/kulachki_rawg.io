'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { store } from '@/lib/redux/store';
import StyledComponentsRegistry from '@/lib/registry/registry';

import { AppContainerSC } from './styled';
import ThemeContainer from '../Theme/ThemeContainer';

const client = new QueryClient();

const AppContainer = ({ children, session }) => {
  return (
    <QueryClientProvider client={client}>
      <SessionProvider session={session}>
        <Provider store={store}>
          <StyledComponentsRegistry>
            <ThemeContainer>
              <div>
                <AppContainerSC>{children}</AppContainerSC>
              </div>
            </ThemeContainer>
          </StyledComponentsRegistry>
        </Provider>
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default AppContainer;
