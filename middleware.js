// import { getToken } from "next-auth/jwt";
// import { NextResponse } from 'next/server'
//  export { default } from "next-auth/middleware";

// export async function middleware(req) {
//     //Token will exist if user is logged in
//     const token = await getToken({req, secret:process.env.JWT_SECRET})

//     const {pathname} = req.nextUrl;

//     /*Allow requests if the following is true
//         1.Its a reuquest for next auth session and provider fetching
//         2.The token exists
//     */
//    if (pathname.includes('/api/auth') || token) {
//         return NextResponse.next;
//    }

//    //Redirect user to login if they don't have a token and are accessing a protected route
//    if (!token && pathname !== '/login'){
//         return NextResponse.redirect('/login');
//    }
// }





// import { withAuth } from "next-auth/middleware"
// import { getToken } from "next-auth/jwt";
// import { NextResponse } from 'next/server'

// // export { default } from "next-auth/middleware"
// export default withAuth (

     
//      function middleware(req){
//        //Token will exist if user is logged in
//           const token = getToken({req, secret:process.env.JWT_SECRET})

//           const {pathname} = req.nextUrl; 

//           if (pathname.includes('/api/auth') || token) {
//                return NextResponse.next;
//           }

//           if (!token && pathname !== '/login'){
//                return NextResponse.redirect(new URL('/login', req.url));
//           }
          
//      }

     
     
// )

// export const config = { matcher: ["/"] }






import { getToken } from "next-auth/jwt";
import { NextResponse} from 'next/server'
import { withAuth } from 'next-auth/middleware'


//export { default } from "next-auth/middleware";
export default withAuth({})

export async function middleware(req) {
     //Token will exist if user is logged in
     const token = await getToken({req, secret:process.env.JWT_SECRET})
     const {pathname} = req.nextUrl;

     /*Allow requests if the following is true
         1.Its a reuquest for next auth session and provider fetching
         2.The token exists
     */

     if (pathname.includes('/api/auth') || token) {
          return NextResponse.next;
     }

        //Redirect user to login if they don't have a token and are accessing a protected route
     if (!token && pathname !== '/login'){
          return NextResponse.redirect('/login');
     }

}

export const config = { matcher: ["/"] }
