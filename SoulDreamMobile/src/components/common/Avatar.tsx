import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../../theme';
import { StyledText } from './StyledText';

interface AvatarProps {
  source?: ImageSourcePropType;
  size?: number;
  name?: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export function Avatar({
  source,
  size = 40,
  name,
  onPress,
  style,
}: AvatarProps) {
  const theme = useTheme();
  const Container = onPress ? TouchableOpacity : View;

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getBackgroundColor = (name: string) => {
    const colors = [
      theme.colors.primary,
      theme.colors.secondary,
      theme.colors.success,
      theme.colors.warning,
      theme.colors.error,
    ];
    const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  return (
    <Container
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: source
            ? 'transparent'
            : name
            ? getBackgroundColor(name)
            : theme.colors.border,
        },
        style,
      ]}
      onPress={onPress}
    >
      {source ? (
        <Image
          source={source}
          style={[
            styles.image,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
            },
          ]}
        />
      ) : name ? (
        <StyledText
          variant="body"
          style={[
            styles.initials,
            {
              color: '#FFFFFF',
              fontSize: size * 0.4,
            },
          ]}
        >
          {getInitials(name)}
        </StyledText>
      ) : null}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  initials: {
    fontWeight: '600',
  },
}); 