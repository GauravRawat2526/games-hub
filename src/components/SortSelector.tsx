import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BiChevronDown } from "react-icons/bi";

interface Props{
    onSelectSortOrder : (order : string) => void,
    sortOrder : string
}

const SortSelector = ({onSelectSortOrder , sortOrder} : Props) => {
  const sortOrders = [
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        Order by : {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem key={order.value} value={order.value} onClick={() => onSelectSortOrder(order.value) }>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
