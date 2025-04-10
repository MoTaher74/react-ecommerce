import {MainLayout} from '@layouts/index';
import {createBrowserRouter,RouterProvider,} from "react-router-dom"; 
import {Home,About,Contact,Product,Error, Login, Register} from '@pages/index';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement:<Error/>,
        children:[
            {
                index:true,
                element:<Home title='Home Page' description='this is home page loading...'/>
            },
            {
                path:"product/:prefix",
                element:<Product title='Product Page with prefix' description='this is product page loading...'/>,
                loader:({params})=>{
                   if(typeof params.prefix !== "string" || !/^[a-z]+$/i.test(params.prefix)){
                    throw new Response("Bad Request",{
                        statusText:"Bad Request",
                        status:401
                    });
                   }
                    
                    return true
                 },
            },
            {
                path:"product",
                element:<Product title='Product Page' description='this is product page loading...'/>,

            },
            {
                path:"about",
                element:<About title='About Page' description='this is about page loading...'/>
            },
            {
                path:"contact",
                element:<Contact title='Contact Page' description='this is contact page loading...'/>
            },
            {
                path:"login",
                element:<Login />
            },
            {
                path:"register",
                element:<Register />
            },
        ]

    }
]);

const AppRouter =()=>{
    return <RouterProvider router={router} />
};
export default AppRouter;