import { ToastAndroid, StyleSheet, View, Dimensions } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import { Button } from '../../components/MyButton';
import React, {  useState, useCallback, useMemo} from "react";
import { Calendar } from 'react-native-calendars';


const { height } = Dimensions.get('window')

export function AddCalendar({ 
  visible, 
  setVisible,  
  setDate,
}) {
  const INITIAL_DATE = new Date();
  const [selected, setSelected] = useState(INITIAL_DATE)
  const containerStyle = {backgroundColor: 'white', paddingBottom:40, height:height};
  const hideModal = () => setVisible(false);
    
  const confirmDate = () => {
    setDate(selected)
    ToastAndroid.show('Saved Date', ToastAndroid.SHORT);
    setVisible(false)
  }
 
  const onDayPress = useCallback(day => {
    setSelected(day.dateString);
  }, []);
  const marked = useMemo(() => {
    return {
      [selected]: { selected: true, disableTouchEvent: true, selectedColor: '#f75f6a', selectedTextColor: 'white'}
    };
  }, [selected]);
    
  return (
      <Portal > 
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} >
        <Calendar enableSwipeMonths style={styles.calendar} onDayPress={onDayPress} markedDates={marked} />
          <View style={styles.container}>
          <View style={styles.containerButton}>
            <Button 
              text={'Save Date'}
              onPress={confirmDate}
            />
          </View >
          <View style={styles.containerButton}>
            <Button 
              text={'Cancel'} 
              color={'gray'}
              onPress={() => setVisible(false)}
            />
          </View > 
          </View>
        </Modal>
      </Portal>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row', 
      justifyContent: "flex-end",
      alignItems: "center",
      position:'absolute',
      bottom: 100,
    },
    containerButton: {
      width: "50%",
      padding:15,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });
  