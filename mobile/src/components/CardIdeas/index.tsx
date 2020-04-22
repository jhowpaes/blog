import {useNavigation} from '@react-navigation/native';
import {formatRelative, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ColorGuide, FontGuide} from '../../Utils/styleGuide';
import {CardIdeaStyle as styles} from './styles';

const CardIdea = ({data, edit, submitDel}: any) => {
  const navigation = useNavigation();

  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);

  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Icon name="lightbulb" size={25} color={ColorGuide.primary} />
        {edit ? (
          <>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('IdeaStack');
              }}>
              <Icon name="pencil-alt" size={20} color={ColorGuide.primary} />
            </TouchableOpacity>
            <TouchableOpacity onPress={submitDel}>
              <Icon name="trash" size={20} color={ColorGuide.error} />
            </TouchableOpacity>
          </>
        ) : (
          <></>
        )}
      </View>
      <View style={styles.bg}>
        <View style={styles.header}>
          <Text style={FontGuide.h3}>{data.user.name}</Text>
          <Text style={FontGuide.span}>{dateParsed}</Text>
        </View>
        <View style={styles.content}>
          <Text style={FontGuide.p}>{data.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardIdea;
