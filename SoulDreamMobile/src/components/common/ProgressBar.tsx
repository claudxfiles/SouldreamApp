import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../theme';
import { StyledText } from './StyledText';

interface ProgressBarProps {
  progress: number; // 0 to 1
  color?: string;
  backgroundColor?: string;
  height?: number;
  style?: ViewStyle;
  showPercentage?: boolean;
}

export function ProgressBar({
  progress,
  color,
  backgroundColor,
  height = 8,
  style,
  showPercentage = false,
}: ProgressBarProps) {
  const theme = useTheme();
  const percentage = Math.min(Math.max(progress * 100, 0), 100);

  return (
    <View
      style={[
        styles.container,
        {
          height,
          backgroundColor: backgroundColor || theme.colors.border,
        },
        style,
      ]}
    >
      <View
        style={[
          styles.progress,
          {
            width: `${percentage}%`,
            backgroundColor: color || theme.colors.primary,
          },
        ]}
      />
      {showPercentage && (
        <View style={styles.percentageContainer}>
          <StyledText
            variant="caption"
            style={[
              styles.percentage,
              {
                color: theme.colors.text,
              },
            ]}
          >
            {Math.round(percentage)}%
          </StyledText>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    borderRadius: 4,
  },
  percentageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentage: {
    fontWeight: '600',
  },
}); 