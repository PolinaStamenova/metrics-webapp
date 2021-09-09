/* eslint-disable quotes, jsx-quotes */

import { useSelector } from "react-redux";

const TestDisplay = () => {
  const data = useSelector((state) => state);

  return (
    <div>
      <div>{data.id}</div>
    </div>
  );
};

export default TestDisplay;
