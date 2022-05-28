import { FlatList } from 'react-native';
import React, {useState, useEffect} from 'react';
import HeaderBar from '../../components/Header-bar';
import { Provider } from 'react-native-paper'
import { ModalFood } from '../../components/ModalFood';
import { getFoods } from '../../services/servicesFood';

export const FoodScreen = () => {
  
  const [allFoods, setAllFoods] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  const getAllFoods = async () => {
    setRefreshing(true);
    
    const foods = await getFoods();
 
    let tempFoods = [];
    await foods.docs.forEach(async foods => {
      await tempFoods.push({id: foods.id, ...foods.data()});
    });
    await setAllFoods([...tempFoods]);

    setRefreshing(false);
  };
  
  useEffect(() => {
    getAllFoods();
  }, []);

  const renderItem = ({ item }) => (
    <ModalFood item={item}/>
  )

  return (
    <Provider>
      <HeaderBar title={"Food"} color={"white"}  style={{ backgroundColor: '#ff825c' }} /> 
      <FlatList
        data={allFoods}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />                                                                                             
    </Provider>
  )
}
