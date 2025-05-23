import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { useTheme } from '../../theme';

interface StyledTextProps extends TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'button';
  color?: string;
}

export function StyledText({
  variant = 'body',
  color,
  style,
  ...props
}: StyledTextProps) {
  const theme = useTheme();

  return (
    <Text
      style={[
        styles.base,
        styles[variant],
        { color: color || theme.colors.text },
        style,
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    fontFamily: 'System',
  },
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
  },
  h4: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontSize: 14,
    lineHeight: 20,
  },
  button: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
}); 