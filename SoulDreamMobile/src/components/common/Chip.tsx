import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ViewStyle,
  ImageSourcePropType,
  Image,
} from 'react-native';
import { useTheme } from '../../theme';
import { StyledText } from './StyledText';

interface ChipProps {
  label: string;
  onPress?: () => void;
  style?: ViewStyle;
  color?: string;
  icon?: ImageSourcePropType;
  selected?: boolean;
  disabled?: boolean;
}

export function Chip({
  label,
  onPress,
  style,
  color,
  icon,
  selected = false,
  disabled = false,
}: ChipProps) {
  const theme = useTheme();
  const Container = onPress ? TouchableOpacity : View;

  const getBackgroundColor = () => {
    if (disabled) return theme.colors.border;
    if (selected) return color || theme.colors.primary;
    return 'transparent';
  };

  const getTextColor = () => {
    if (disabled) return theme.colors.text;
    if (selected) return '#FFFFFF';
    return color || theme.colors.primary;
  };

  return (
    <Container
      style={[
        styles.container,
        {
          backgroundColor: getBackgroundColor(),
          borderColor: color || theme.colors.primary,
        },
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {icon && (
        <Image
          source={icon}
          style={[
            styles.icon,
            {
              tintColor: getTextColor(),
            },
          ]}
        />
      )}
      <StyledText
        variant="caption"
        style={[
          styles.label,
          {
            color: getTextColor(),
          },
        ]}
      >
        {label}
      </StyledText>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  label: {
    fontWeight: '500',
  },
}); 