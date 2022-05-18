import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { data } from "../Places/data";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => {
    setSearchQuery(query);
    const filteredData = data.filter((el) => {
      if (query === el.name) {
          return el;
        }
        else {
          return console.log('no hay resultados')
        }
    })

    return (
        <ul>
        {filteredData.map((item) => (
          <>
            <p>{item.name}</p>
              <li key={item.id}>{item.name}</li>
          </>
            ))}
        </ul>
    )
  }

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default Search;
