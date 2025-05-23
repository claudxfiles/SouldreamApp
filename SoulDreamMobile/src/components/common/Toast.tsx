import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
  ViewStyle,
  Platform,
} from 'react-native';
import { useTheme } from '../../theme';
import { StyledText } from './StyledText';

interface ToastProps {
  visible: boolean;
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onHide?: () => void;
  style?: ViewStyle;
}

export function Toast({
  visible,
  message,
  type = 'info',
  duration = 3000,
  onHide,
  style,
}: ToastProps) {
  const theme = useTheme();
  const translateY = useRef(new Animated.Value(100)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();

      const timer = setTimeout(() => {
        hide();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  const hide = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 100,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onHide?.();
    });
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return theme.colors.success;
      case 'error':
        return theme.colors.error;
      case 'warning':
        return theme.colors.warning;
      default:
        return theme.colors.primary;
    }
  };

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY }],
          opacity,
          backgroundColor: getBackgroundColor(),
        },
        style,
      ]}
    >
      <TouchableOpacity
        style={styles.content}
        onPress={hide}
        activeOpacity={0.8}
      >
        <StyledText
          variant="body"
          style={[styles.message, { color: '#FFFFFF' }]}
        >
          {message}
        </StyledText>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 32 : 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    fontWeight: '500',
  },
}); 