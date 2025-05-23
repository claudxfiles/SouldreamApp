import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../theme';

interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  backgroundColor?: string;
  flex?: number;
}

export function Container({
  children,
  style,
  padding = 'md',
  margin = 'none',
  backgroundColor,
  flex,
}: ContainerProps) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          padding: padding === 'none' ? 0 : theme.spacing[padding],
          margin: margin === 'none' ? 0 : theme.spacing[margin],
          backgroundColor: backgroundColor || theme.colors.background,
          flex: flex,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
}); 