import Image from "next/image";

const AuthLayout = ({children}:{children:React.ReactNode}) => {
    return ( 
        <div className="h-full flex items-center mt-28 justify-center">
            {children}
        </div>
     );
}
 
export default AuthLayout;