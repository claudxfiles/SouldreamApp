import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ViewStyle,
  StatusBar,
  Platform,
} from 'react-native';
import { useTheme } from '../../theme';
import { StyledText } from './StyledText';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  rightComponent?: React.ReactNode;
  leftComponent?: React.ReactNode;
  containerStyle?: ViewStyle;
  transparent?: boolean;
}

export function Header({
  title,
  showBack = false,
  rightComponent,
  leftComponent,
  containerStyle,
  transparent = false,
}: HeaderProps) {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: transparent
            ? 'transparent'
            : theme.colors.background,
          borderBottomColor: theme.colors.border,
        },
        containerStyle,
      ]}
    >
      <StatusBar
        barStyle={theme.colors.background === '#FFFFFF' ? 'dark-content' : 'light-content'}
        backgroundColor={transparent ? 'transparent' : theme.colors.background}
        translucent
      />
      <View style={styles.content}>
        <View style={styles.leftContainer}>
          {showBack && (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <StyledText variant="body" color={theme.colors.primary}>
                ←
              </StyledText>
            </TouchableOpacity>
          )}
          {leftComponent}
        </View>

        <StyledText
          variant="h4"
          style={[
            styles.title,
            { color: theme.colors.text },
          ]}
          numberOfLines={1}
        >
          {title}
        </StyledText>

        <View style={styles.rightContainer}>
          {rightComponent}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: Platform.OS === 'ios' ? 44 : StatusBar.currentHeight,
  },
  content: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 40,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 40,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 8,
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
}); 