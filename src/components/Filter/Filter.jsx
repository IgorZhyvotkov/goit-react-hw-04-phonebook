

const Filter = ({value, onChange}) => (
  <div className="FilterWrapper">
    <label htmlFor="filter">Find contacts by name</label>
    <input
      name="filter"
      placeholder="Search..."
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);


export default Filter;
