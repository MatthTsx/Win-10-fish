import { type NextPage } from "next";
import { useEffect, useState } from "react";
import WindowsBar from "../components/WindowsBar";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const [Tabs, setTabs] = useState([]);

  // Disable Right-Click
  useEffect(() => {
    const handleContextmenu = (e: any) => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
  }, [ ])
  function sla(){

  }
  return (
    <div className="w-full h-screen _win10 flex flex-col justify-between" contextMenu={"a"}>
      <div className="overflow-hidden w-full h-full">
        <div></div>
        
      </div>
      <WindowsBar func={sla} tabs={Tabs}/>
    </div>
  );
};

export default Home;