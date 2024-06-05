import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
    <h2 className="text-7xl font-bold text-center px-[15px]]"> Welcome to<br/>Nfactorial Blog</h2>
    <p className="text-[#00000] text-3xl py-[20px]">Let's discuss!</p>

    {/* <div className="mt-10 min-w-[500px]">
      <input className="px-[25px] py-[20px] rounded-xl" placeholder="Name"/>
      <input className="px-[25px] py-[20px] rounded-xl" placeholder="Phone"/>
    </div> */}

  <button className="px-[25px] py-[15px] rounded-xl w-[350px] bg-[#E01424] font-medium text-white mx-auto">Get Started</button>


  </main>
  );
}
