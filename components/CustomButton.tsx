import { useGlobalStyles } from '@/hooks/useGlobalStyles';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CustomButtonProps {
  onPress: () => void;
  style?: object;
  text?: string;
  textStyle?: object;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  style,
  text = '',
  textStyle,
}) => {
  const { text: textGlobalStyle } = useGlobalStyles();
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, textGlobalStyle, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderLeftColor: 'red',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default CustomButton;
