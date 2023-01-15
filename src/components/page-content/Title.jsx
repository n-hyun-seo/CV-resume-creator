import { useState } from "react";

export default function Title(props) {
  const setArr = props.setArr;
  const arr = props.arr;
  const title = props.title.split(" ").join("");
  let [counter, setCounter] = useState(1);

  return (
    <div className={`${title} titlecontainer`}>
      <h1 className="title">{`${props.title}`}</h1>{" "}
      {props.title !== "Personal Info" && (
        <button type="button" className={`${title}-add`} onClick={work}>
          +
        </button>
      )}
    </div>
  );

  function work() {
    setArr([...arr, counter]);
    setCounter(counter + 1);
  }
}
