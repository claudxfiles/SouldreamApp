import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../theme';
import { StyledText } from './StyledText';

interface BadgeProps {
  value?: number | string;
  color?: string;
  style?: ViewStyle;
  dot?: boolean;
}

export function Badge({
  value,
  color,
  style,
  dot = false,
}: BadgeProps) {
  const theme = useTheme();

  if (dot) {
    return (
      <View
        style={[
          styles.dot,
          {
            backgroundColor: color || theme.colors.error,
          },
          style,
        ]}
      />
    );
  }

  if (!value) return null;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: color || theme.colors.error,
        },
        style,
      ]}
    >
      <StyledText
        variant="caption"
        style={[styles.text, { color: '#FFFFFF' }]}
      >
        {value}
      </StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
}); 