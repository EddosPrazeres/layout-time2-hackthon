import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

export const Container = styled.View`
  flex: 1;
  background: #343434;  
`

export const FlatList = styled.FlatList`
  flex: 1;
`

export const ViewItem = styled.ImageBackground`
  justify-content: flex-end;
  height: ${Dimensions.get('window').height / 3};
  width: 100%;
  background-color: red;
  margin-bottom: 1px;
  padding: 16px;
`

export const ViewItemTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`

export const ViewItemDescription = styled.Text`
  font-size: 16px;
`