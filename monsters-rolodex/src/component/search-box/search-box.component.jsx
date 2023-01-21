import "./search-box.styles.css";

const Searcbox = ({ className, placeholder, onChangeHandler }) => (
  <input
    className="search-box"
    type={`search-box ${className}`}
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default Searcbox;
