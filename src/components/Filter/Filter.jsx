import PropTypes from 'prop-types';
import { Label, Input,  } from "./Filter.styled";

const Filter = ({value, onChange}) => (
  <div>
    <Label htmlFor="filter">Find contacts by name</Label>
    <Input
      name="filter"
      placeholder="Search..."
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
