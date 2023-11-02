import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {connectDB} from '@/libs/mongodb';
import User from '@/models/user';
import bcrypt from 'bcryptjs'

const handler = NextAuth({
  
    providers:[
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "jsmith" },
                password: { label: "Password", type: "password", placeholder:"*******" }
              },
              async authorize(credentials, req) {  
                await connectDB();     
                console.log(credentials)        
                // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }   
                const userFound = await User.findOne({email: credentials?.email}).select("+password")   
                if(!userFound) throw new Error('Invalid Credentials');

                const passwordMatch = await bcrypt.compare(credentials!.password, userFound.password)
                if(!passwordMatch) throw new Error('Invalid Credentials')
                
                console.log(userFound)
                return userFound
                
              }
            })
          ],
          callbacks: {
            jwt({account, user, token, profile, session}){
              if(user) token.user= user;
              // console.log(token)
              return token;
            },
            session({session, token}) {
              session.user = token.user as any
              return session
            },
            
      },
      // pages:{
      //         signIn: "/login"
      //       }
        })


export { handler as GET, handler as POST }