import React, { useState } from "react";

const InputForm = () => {
  const [nation, setNation] = useState("");
  const [goldMedal, setgoldMedal] = useState(0);
  const [silverMedal, setsilverMedal] = useState(0);
  const [bronzeMedal, setbronzeMedal] = useState(0);

  return (
    <div>
      <label for="국가명">국가명</label><br/>
      <input
        id="국가명"
        type="text"
        value={nation}
        onChange={(e) => {
          setNation(e.target.value.trim);
        }}
      ></input>
      <label for="금메달">금메달</label><br/>
      <input
        id="금메달"
        type="number"
        value={goldMedal}
        onChange={(e) => {
          setgoldMedal(e.target.value.trim);
        }}
      ></input>
      <label for="은메달">은메달</label><br/>
      <input
        id="은메달"
        type="number"
        value={silverMedal}
        onChange={(e) => {
          setsilverMedal(e.target.value.trim);
        }}
      ></input>
      <label for="동메달">동메달</label><br/>
      <input
        id="동메달"
        type="number"
        value={goldMedal}
        onChange={(e) => {
          setgoldMedal(e.target.value.trim);
        }}
      ></input>
    </div>
  );
};

export default InputForm;
