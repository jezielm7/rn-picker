import React, { useState } from 'react';
import { View, Text } from 'react-native';

import {Picker} from '@react-native-community/picker';

import Languages from '../components';

import styles from './styles';

const Home = () => {
  const [pickerLabel, setPickerLabel] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your language</Text>

      <Picker
        selectedValue={pickerLabel}
        mode='dropdown'
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setPickerLabel(itemValue)}
      >
        <Picker.Item color="#1F618D" label="Languages" value={undefined} />

        {Languages && Languages.map(({ id, name }) => (
          <Picker.Item label={name} key={id} value={name} />
        ))}
      </Picker>

      <Text style={styles.SL}>
        Selected Language: <Text style={{ fontWeight: 'bold' }}>{pickerLabel}</Text>
      </Text>
    </View>
  );
}

export default Home;