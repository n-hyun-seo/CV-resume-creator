export default function Circles(props) {
  const title = props.title.split(" ").join("");
  return (
    <div className={`${title} circles`}>
      <div className="circle one" onClick={circleLogic}></div>
      <div className="circle two" onClick={circleLogic}></div>
      <div className="circle three" onClick={circleLogic}></div>
      <div className="circle four" onClick={circleLogic}></div>
      <div className="circle five" onClick={circleLogic}></div>
    </div>
  );

  function circleLogic(e) {
    const parent = e.target.parentNode;
    const targetClass = e.target.classList;
    const description = parent.parentNode.children[1];

    unfillCircles();
    if (targetClass.contains("one")) {
      fillCircles(1);
    } else if (targetClass.contains("two")) {
      fillCircles(2);
    } else if (targetClass.contains("three")) {
      fillCircles(3);
    } else if (targetClass.contains("four")) {
      fillCircles(4);
    } else if (targetClass.contains("five")) {
      fillCircles(5);
    }

    function fillCircles(num) {
      for (let i = 0; i < num; i++) {
        parent.children[i].classList.add("fill");
      }

      switch (num) {
        case 1:
          description.textContent = "Poor";
          break;
        case 2:
          description.textContent = "Passing";
          break;
        case 3:
          description.textContent = "Average";
          break;
        case 4:
          description.textContent = "Proficient";
          break;
        case 5:
          description.textContent = "Professional";
          break;
        default:
          break;
      }
    }

    function unfillCircles() {
      for (let i = 0; i < 5; i++) {
        parent.children[i].classList.remove("fill");
      }
    }
  }
}
