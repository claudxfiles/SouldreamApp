import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../theme';
import { StyledText } from './StyledText';
import { Spacer } from './Spacer';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  style?: ViewStyle;
  titleStyle?: ViewStyle;
  subtitleStyle?: ViewStyle;
  contentStyle?: ViewStyle;
}

export function Section({
  title,
  subtitle,
  children,
  style,
  titleStyle,
  subtitleStyle,
  contentStyle,
}: SectionProps) {
  const theme = useTheme();

  return (
    <View style={[styles.container, style]}>
      {(title || subtitle) && (
        <View style={styles.header}>
          {title && (
            <StyledText
              variant="h4"
              style={[
                styles.title,
                { color: theme.colors.text },
                titleStyle,
              ]}
            >
              {title}
            </StyledText>
          )}
          {subtitle && (
            <>
              <Spacer size="xs" />
              <StyledText
                variant="caption"
                style={[
                  styles.subtitle,
                  { color: theme.colors.text },
                  subtitleStyle,
                ]}
              >
                {subtitle}
              </StyledText>
            </>
          )}
        </View>
      )}
      <View style={[styles.content, contentStyle]}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    fontWeight: '600',
  },
  subtitle: {
    opacity: 0.7,
  },
  content: {
    width: '100%',
  },
}); 