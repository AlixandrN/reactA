// InputSearch1.jsx
import useDebounce from "../../../hooks/useDebounce";
import historyLS from "../../ls/historyLS";
import s from "./Input.module.css";
import PropTypes from "prop-types";

const InputSearch1 = ({ query }) => {
  function getInputInWork(text) {
    const currentDate = new Date().toLocaleDateString();
    query(text);
    historyLS(text, currentDate);
  }

  const debouncedInput = useDebounce(getInputInWork, 1000);

  return (
    <input
      type="text"
      placeholder="search movie"
      className={s.search1}
      onChange={(e) => debouncedInput(e.target.value)}
    />
  );
};

InputSearch1.propTypes = {
  query: PropTypes.func
};

export default InputSearch1;
