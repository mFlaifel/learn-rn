import { useGlobalStyles } from '@/hooks/useGlobalStyles';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CustomButtonProps {
  onPress: () => void;
  style?: object;
  text?: string;
  textStyle?: object;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  style,
  text = '',
  textStyle,
  disabled = false,
}) => {
  const { text: textGlobalStyle } = useGlobalStyles();
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && styles.disabledButton]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <Text
        style={[
          styles.text,
          textGlobalStyle,
          textStyle,
          disabled && styles.disabledText,
        ]}
      >
        {text}
      </Text>
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
  disabledButton: {
    borderColor: '#a9a9a9',
    // backgroundColor: '#d3d3d3',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  disabledText: {
    color: '#a9a9a9',
  },
});

export default CustomButton;
