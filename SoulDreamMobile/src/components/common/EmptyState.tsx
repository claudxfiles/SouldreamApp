import React from 'react';
import { StyleSheet, View, ViewStyle, Image } from 'react-native';
import { useTheme } from '../../theme';
import { StyledText } from './StyledText';
import { Button } from './Button';

interface EmptyStateProps {
  title: string;
  description?: string;
  image?: any;
  action?: {
    label: string;
    onPress: () => void;
  };
  style?: ViewStyle;
}

export function EmptyState({
  title,
  description,
  image,
  action,
  style,
}: EmptyStateProps) {
  const theme = useTheme();

  return (
    <View style={[styles.container, style]}>
      {image && (
        <Image
          source={image}
          style={[styles.image, { tintColor: theme.colors.text }]}
          resizeMode="contain"
        />
      )}
      <StyledText
        variant="h4"
        style={[styles.title, { color: theme.colors.text }]}
      >
        {title}
      </StyledText>
      {description && (
        <StyledText
          variant="body"
          style={[styles.description, { color: theme.colors.text }]}
        >
          {description}
        </StyledText>
      )}
      {action && (
        <Button
          label={action.label}
          onPress={action.onPress}
          style={styles.button}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 24,
    opacity: 0.5,
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    textAlign: 'center',
    opacity: 0.7,
    marginBottom: 24,
  },
  button: {
    minWidth: 200,
  },
}); 