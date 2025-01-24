import React from "react";

const MedalList = ({ medalRecords, setMedalRecords }) => {
  const handleDelete = (nation) => {
    const deletedMedalRecords = medalRecords.filter((record) => {
      return record.nation !== nation;
    });
    //  업데이트하면서 금메달 순으로 정렬할까 말까!!!!!!
    setMedalRecords(deletedMedalRecords.sort((a,b)=>b.goldMedal-a.goldMedal));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>총합</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
          {medalRecords.map((record) => (
            <tr key={record.nation}>
              <td>{record.nation}</td>
              <td>{record.goldMedal}</td>
              <td>{record.silverMedal}</td>
              <td>{record.bronzeMedal}</td>
              <td>{record.sumMedals}</td>
              <td>
                <button onClick={() => handleDelete(record.nation)}>
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedalList;
