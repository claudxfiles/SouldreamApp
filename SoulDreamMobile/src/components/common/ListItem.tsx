import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { useTheme } from '../../theme';
import { StyledText } from './StyledText';

interface ListItemProps {
  title: string;
  subtitle?: string;
  leftIcon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  disabled?: boolean;
  showChevron?: boolean;
}

export function ListItem({
  title,
  subtitle,
  leftIcon,
  rightIcon,
  onPress,
  containerStyle,
  titleStyle,
  subtitleStyle,
  disabled = false,
  showChevron = true,
}: ListItemProps) {
  const theme = useTheme();
  const Container = onPress ? TouchableOpacity : View;

  return (
    <Container
      style={[
        styles.container,
        containerStyle,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {leftIcon && (
        <Image
          source={leftIcon}
          style={[styles.leftIcon, { tintColor: theme.colors.text }]}
        />
      )}
      <View style={styles.content}>
        <StyledText
          style={[
            styles.title,
            titleStyle,
            disabled && styles.disabledText,
          ]}
        >
          {title}
        </StyledText>
        {subtitle && (
          <StyledText
            style={[
              styles.subtitle,
              subtitleStyle,
              disabled && styles.disabledText,
            ]}
          >
            {subtitle}
          </StyledText>
        )}
      </View>
      {rightIcon && (
        <Image
          source={rightIcon}
          style={[styles.rightIcon, { tintColor: theme.colors.text }]}
        />
      )}
      {showChevron && onPress && (
        <Image
          source={require('../../assets/icons/chevron-right.png')}
          style={[styles.chevron, { tintColor: theme.colors.text }]}
        />
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 2,
    opacity: 0.7,
  },
  leftIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  rightIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginLeft: 8,
  },
  chevron: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 8,
    opacity: 0.5,
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    opacity: 0.5,
  },
}); 