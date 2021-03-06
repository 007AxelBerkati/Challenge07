import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { colors, fonts } from '../../../utils';
import BtnIconSend from './BtnIconSend';
import FloatingButton from './FloatingButton';
import IconButton from './IconButton';
import IconOnly from './IconOnly';

export default function ButtonComponent({
  type, title, onPress, icon, disable, nonButton, iconHeight, iconWidth, label,
}) {
  if (type === 'btn-icon-send') {
    return <BtnIconSend disable={disable} onPress={onPress} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (type === 'floating-btn') {
    return <FloatingButton icon={icon} onPress={onPress} />;
  }

  if (type === 'icon-button') {
    return (
      <IconButton
        onPress={onPress}
        nonButton={nonButton}
        iconHeight={iconHeight}
        iconWidth={iconWidth}
        label={label}
      />
    );
  }

  if (disable) {
    return (
      <View style={styles.disableBG}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor:
      type === 'secondary' ? colors.button.secondary.background : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  disableBG: {
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.disable.background,
  },
  disableText: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.disable.text,
    textAlign: 'center',
  },
  text: (type) => ({
    fontSize: 16,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: type === 'secondary' ? colors.button.secondary.text : colors.button.primary.text,
  }),
});
