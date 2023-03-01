import spotifyApi, { LOGIN_URL } from "@/lib/spotify"
import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"


async function refreshAccessToken (){
  try{
    spotifyApi.setAccessToken(access.setAccessToken)
    spotifyApi.setRefreshToken(access.setRefreshToken)

    const {body: refreshedToken} = await spotifyApi.refreshAccessToken(token)
    console.log('The refreshed token is', refreshedToken);

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_at * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
      // Replace if new one came back if not Fall back to old refresh token 
    }
  }catch (error){
    console.log(error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    }
  }
}

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization : LOGIN_URL
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      // Initial sign in
      if (account && user) {
        return {
          accessToken: account.access_token,
          accessTokenExpires: Date.now() + account.expires_at * 1000,
          refreshToken: account.refresh_token,
          user,
        }
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        return token
      }

      // Access token has expired, try to update it
      return refreshAccessToken(token)
    },
    async session({ session, token }) {
      session.user.accessToken = token.user.accessToken
      session.user.refreshToken = token.user.refreshToken
      session.user.email = token.user.email

      return session
    },
  }
}

export default NextAuth(authOptions)