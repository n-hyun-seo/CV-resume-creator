import Left from "./left/left-layout/Left-layout";
import Right from "./right/right-layout/Right-layout";

export default function Content() {
  return (
    <div className="page-content">
      <Left />
      <Right />
    </div>
  );
}
