import { type NextPage } from "next";
import { useEffect, useState } from "react";
import Tab from "../components/tabs";
import WindowsBar from "../components/WindowsBar";

import { api } from "../utils/api";

export type tabs = {
  name: String,
  maxed: Boolean
}[]

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const [Tabs, setTabs] = useState<tabs>([]);
  const [selected, setSelected] = useState<String>('');

  // Disable Right-Click
  // useEffect(() => {
  //   const handleContextmenu = (e: any) => {
  //       e.preventDefault()
  //   }
  //   document.addEventListener('contextmenu', handleContextmenu)
  // }, [ ])

  return (
    <div className="w-full h-screen _win10 flex flex-col justify-between" contextMenu={"a"}>
      <div className="overflow-hidden w-full h-full relative">
        <div className="absolute w-full h-full"></div>
        {Tabs.map((tab, i) => (
          <Tab key={i} type={tab.name} selected={selected}/>
        ))}
      </div>
      <WindowsBar func={setTabs} tabs={Tabs} select={setSelected}/>
    </div>
  );
};

export default Home;
