import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../theme';

interface SpacerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  horizontal?: boolean;
  style?: ViewStyle;
}

export function Spacer({
  size = 'md',
  horizontal = false,
  style,
}: SpacerProps) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.spacer,
        {
          [horizontal ? 'width' : 'height']: theme.spacing[size],
        },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  spacer: {
    flex: 0,
  },
}); 