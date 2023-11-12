'use client'
import Image from "next/image"

export default function Loading() {
    return <>
      <style jsx>{`
          .loader {
            border: 16px solid #f3f3f3; 
            border-top: 16px solid #3498db;
            border-radius: 50%;
            width: 120px;
            height: 120px;
            margin: auto;
          }
  
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
      `}</style>
      <div className="loader flex justify-center items-center mt-[50%] py-5 px-5">
        <Image src="/img/LMS.png" width={200} height={200} alt="logo" />
      </div> 
    </>
  }