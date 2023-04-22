import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';

export const NextAuthOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.META_APP_ID,
      clientSecret: process.env.META_APP_SECRET,
      authorization: { params: { access_type: 'offline', prompt: 'consent' } },
    }),
    GoogleProvider({
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      authorization: { params: { access_type: 'offline', prompt: 'consent' } },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  theme: {
    colorScheme: 'dark',
    brandColor: '#131415',
    logo: '/assets/logo2.png',
    buttonText: '#080910',
  },
};

const handler = NextAuth(NextAuthOptions);

export { handler as GET, handler as POST };
