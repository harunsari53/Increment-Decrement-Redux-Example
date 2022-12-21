import { Button, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addition, substraction } from './Store/action';

const Counter = (props) => {
    const data = useSelector((state)=>state.counter);
    const dispatch = useDispatch();

  return (
    <View style= {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title= 'Add Count' onPress={()=>dispatch(addition())} />
        <Text> {data} </Text>
        <Button title= 'Substract Count' onPress={()=>dispatch(substraction())} />
    </View>
  )
}

export default React.memo(Counter);

