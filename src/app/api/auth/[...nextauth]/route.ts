// Auth API route reference: https://authjs.dev/getting-started/providers/oauth-tutorial

import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import async from '../../../dashboard/page';

export const authOptions: NextAuthOptions = {
    //Add adapter to authOptions
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? '',
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        })
    ],

    session: {
        strategy: 'jwt'
    },

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            //console.log({user})
            return true;
        },

        async jwt({ token, user, account, profile }) {
            const dbUser = await prisma.user.findUnique({
                where: {
                    email: token.email ?? 'no-user-email'
                }
            });
            token.roles = dbUser?.roles ?? ['undefined'];
            token.id = dbUser?.id ?? 'undefined';
            return token;
        },
        async session({ session, token, user }) {
            
            if(session && session.user) {
                session.user.roles = token.roles;
                session.user.id = token.id;
            }

            return session
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }