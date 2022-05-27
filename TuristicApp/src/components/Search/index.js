import React, {useState, useEffect} from 'react';
import { Searchbar } from 'react-native-paper';
import {TextInput} from 'react-native'

const Search = ({ allPlaces }) => {
  
  const [searchQuery, setSearchQuery] = useState('');
  
  const dataFilter = allPlaces
    .filter(places => places.place.city.includes(searchQuery))
    .slice(0, 3);

  useEffect(() => {
    if (searchQuery.length > 0 && !searchQuery.includes(',')) {
      setShowAutoComplete(true);
    } else {
      setShowAutoComplete(false);
    }
  }, [searchQuery]);


  console.log(dataFilter)

  // const onChangeSearch = query => {
  //   setSearchQuery(query);
  //   const filteredData = allPlaces.place.filter((el) => {
  //     if (query === el.city) {
  //         return el;
  //       }
  //       else {
  //         return console.log('no hay resultados')
  //       }
  //   })

  //   return (
  //       <ul>
  //       {filteredData.map((item) => (
  //         <>
  //           <p>{item.name}</p>
  //             <li key={item.id}>{item.name}</li>
  //         </>
  //           ))}
  //       </ul>
  //   )
  // }

  return (
    <>
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
    </>
  );
};

export default Search;
