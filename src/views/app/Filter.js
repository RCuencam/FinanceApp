import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Filter = ({setToggleFilter}) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className="filter">
      <DropdownToggle caret color="transparent">
        Todo
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={()=>setToggleFilter('todo')}>Todo</DropdownItem>
        <DropdownItem onClick={()=>setToggleFilter('soles')}>Soles</DropdownItem>
        <DropdownItem onClick={()=>setToggleFilter('dolar')}>Dólares</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Filter;