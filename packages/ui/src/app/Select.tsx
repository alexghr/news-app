import React from 'react';
import styled from 'styled-components';

type Props = {
  options: ReadonlyArray<{ value: string, label: string }>,
  selected: string;
  onChange: (value: string) => void;
}

const Select: React.FC<Props> = ({ options, selected, onChange }) => {
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (evt) => {
    onChange(evt.target.value);
  }

  return (
    <Element onChange={handleChange} value={selected}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>{label}</option>
      ))}
    </Element>
  );
};

export default Select;

const Element = styled.select``;
