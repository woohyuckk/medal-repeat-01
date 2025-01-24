import React, { useState } from "react";

const InputForm = ({ medalRecords, setMedalRecords }) => {
  const [nation, setNation] = useState("");
  const [goldMedal, setgoldMedal] = useState(0);
  const [silverMedal, setsilverMedal] = useState(0);
  const [bronzeMedal, setbronzeMedal] = useState(0);

  const clearInput = () => {
    setNation("");
    setgoldMedal(0);
    setsilverMedal(0);
    setbronzeMedal(0);
  };

  const addMedalrecords = (e) => {
    e.preventDefault();

    if (goldMedal < 0 || silverMedal < 0 || bronzeMedal < 0) {
      alert("메달 수는 0보다 크게 입력해주세요 ");
      return;
    }
    const isDuplicate = medalRecords.some((record) => {
      return record.nation === nation;
    });

    if (isDuplicate) {
      alert("이미 등록된 국가입니다.");
      return;
    }
    const sumMedals = goldMedal + silverMedal + bronzeMedal;
    const newRecord = {
      nation,
      goldMedal,
      silverMedal,
      bronzeMedal,
      sumMedals,
    };
    setMedalRecords(
      [...medalRecords, newRecord].sort((a, b) => b.goldMedal - a.goldMedal)
    );

    clearInput();
  };

  const handleUpdate = () => {
    let hasNationRecord = false;

    const updatedMedalRecords = medalRecords.map((record) => {
      if (record.nation === nation) {
        // hasNation 전환하는 거 까먹음
        hasNationRecord = true;
        return {
          ...record,
          goldMedal,
          silverMedal,
          bronzeMedal,
          sumMedals : goldMedal+silverMedal+bronzeMedal,
        };
      }
      return record;
    });

    if (!hasNationRecord) {
      alert("등록되지 않은 국가입니다.");
    } else {
      setMedalRecords(
        updatedMedalRecords.sort((a, b) => b.goldMedal - a.goldMedal)
      );
      alert("국가 정보가 업데이트 되었습니다.");
    }
    clearInput();
  };

  return (
    <form
      onSubmit={addMedalrecords}
      style={{
        display: "flex",
        gap: "12px",
      }}
    >
      <div>
        <label>국가명</label>
        <br />
        <input
          id="국가명"
          type="text"
          value={nation}
          onChange={(e) => {
            setNation(e.target.value);
            console.log(nation);
          }}
          required
        ></input>
      </div>
      <div>
        <label>금메달</label>
        <br />
        <input
          id="금메달"
          type="number"
          value={goldMedal}
          onChange={(e) => {
            setgoldMedal(Number(e.target.value));
          }}
          required
        ></input>
      </div>
      <div>
        <label>은메달</label>
        <br />
        <input
          id="은메달"
          type="number"
          value={silverMedal}
          onChange={(e) => {
            setsilverMedal(Number(e.target.value));
          }}
          required
        ></input>
      </div>
      <div>
        <label>동메달</label>
        <br />
        <input
          id="동메달"
          type="number"
          value={bronzeMedal}
          onChange={(e) => {
            setbronzeMedal(Number(e.target.value));
          }}
          required
        ></input>
      </div>
      <div>

      
      <button type="submit">국가 추가</button>
      <button type="button" onClick={handleUpdate}>업데이트</button>
      </div>
    </form>
  );
};

export default InputForm;
