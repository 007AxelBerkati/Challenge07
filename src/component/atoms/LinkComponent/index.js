import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { fonts } from '../../../utils';

export default function LinkComponent({
  title, size, align, onPress, color, disable, style,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={style} disabled={disable}>
      <Text style={styles.text(size, align, color)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: (size, align, color) => ({
    fontFamily: fonts.primary[800],
    fontSize: size,
    color,
    textAlign: align,
  }),

});
