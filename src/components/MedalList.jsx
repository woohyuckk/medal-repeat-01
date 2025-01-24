import React, { useState } from "react";

const medalListBtn = {
  backgroundColor: "transparent",
  border: "0",
  cursor: "pointer",
  margin : "0"
};

const MedalList = ({ medalRecords, setMedalRecords }) => {

  const [isGoldDescending, setIsGoldDescending] = useState(true); // 금메달 정렬 상태

  const handleGoldSort = () => {
    const sortedRecords = medalRecords.sort((a, b) => {
      if (b.goldMedal !== a.goldMedal) {
        return isGoldDescending
          ? b.goldMedal - a.goldMedal
          : a.goldMedal - b.goldMedal;
      }
      return isGoldDescending
        ? b.goldMedal - a.goldMedal
        : a.goldMedal - b.goldMedal;
    });
    setMedalRecords(sortedRecords);
    setIsGoldDescending(!isGoldDescending);
  };

  const handleDelete = (nation) => {
    const deletedMedalRecords = medalRecords.filter((record) => {
      return record.nation !== nation;
    });
    //  업데이트하면서 금메달 순으로 정렬할까 말까!!!!!!
    setMedalRecords(
      deletedMedalRecords.sort((a, b) => b.goldMedal - a.goldMedal)
    );
  };

  return (
    <div className="table-container">
      <table >
        <thead>
          <tr>
            <th>국가명</th>
            <th>
              금메달
              <button style={medalListBtn} onClick={handleGoldSort}>
                {isGoldDescending ? "▼" : "▲"}
              </button>
            </th>
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
                <button className="button.delete-button" onClick={() => handleDelete(record.nation)}>
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
