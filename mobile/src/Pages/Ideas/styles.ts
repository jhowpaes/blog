import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fafcff;
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
`;

export const AddBtn = styled.TouchableOpacity`
  align-items: flex-end;
`;

export const IdeasList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  margin-bottom: 15px;
  border-radius: 4px;
`;
