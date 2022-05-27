import React, {useState, useEffect} from 'react';
import { Searchbar } from 'react-native-paper';
import { FlatList } from 'react-native';
import { PlacesContent } from '../PlacesContent';

const Search = ({ allPlaces, navigation }) => {
  
  const [showAutoComplete, setShowAutoComplete] = useState(false)
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

  const renderItem = ({ item }) => (
    <PlacesContent item={item} navigation={navigation}/>
  );

  return (
    <>
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
      {showAutoComplete&&<FlatList
          data={dataFilter}
          renderItem={renderItem}
          keyExtractor={item => item.id}
      />}
    </>
  );
};

export default Search;
