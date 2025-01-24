import React, { useEffect, useState } from "react";
import InputForm from "./components/InputForm";
import MedalList from "./components/MedalList";



// 뿌리는 곳 
const App = () => {
  // LocalStorage 불러오기 및 초기화
  const getInitialMedalRecords = () => {
    const storedMedalRecords = localStorage.getItem("testmedalRecords");
    return storedMedalRecords ? JSON.parse(storedMedalRecords) : [];
  };

  const [medalRecords, setMedalRecords] = useState(getInitialMedalRecords);
// LocalStrage 데이터 저장 및 상태관리 
  useEffect(() => {
    localStorage.setItem("testmedalRecords", JSON.stringify(medalRecords));
  }, [medalRecords]);

  return (
    <div>
      <InputForm medalRecords={medalRecords} setMedalRecords={setMedalRecords}/>
      <MedalList medalRecords={medalRecords} setMedalRecords={setMedalRecords}></MedalList>
    </div>
  );
};

export default App;
