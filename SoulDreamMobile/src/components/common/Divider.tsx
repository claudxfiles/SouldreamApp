import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../theme';

interface DividerProps {
  style?: ViewStyle;
  color?: string;
  thickness?: number;
  margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export function Divider({
  style,
  color,
  thickness = StyleSheet.hairlineWidth,
  margin = 'md',
}: DividerProps) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.divider,
        {
          backgroundColor: color || theme.colors.border,
          height: thickness,
          marginVertical: margin === 'none' ? 0 : theme.spacing[margin],
        },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  divider: {
    width: '100%',
  },
}); 