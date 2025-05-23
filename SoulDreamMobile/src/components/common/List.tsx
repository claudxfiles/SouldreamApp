import React, { useCallback } from 'react';
import {
  FlatList,
  FlatListProps,
  RefreshControl,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { useTheme } from '../../theme';

interface ListProps<T> extends Omit<FlatListProps<T>, 'refreshControl'> {
  refreshing?: boolean;
  onRefresh?: () => void;
  onEndReached?: () => void;
  containerStyle?: ViewStyle;
  showDivider?: boolean;
}

export function List<T>({
  refreshing = false,
  onRefresh,
  onEndReached,
  containerStyle,
  showDivider = true,
  ...props
}: ListProps<T>) {
  const theme = useTheme();

  const renderItem = useCallback(
    ({ item, index, separators }: any) => {
      const isLast = index === (props.data?.length ?? 0) - 1;
      return (
        <View style={[styles.itemContainer, !isLast && showDivider && styles.itemWithDivider]}>
          {props.renderItem?.({ item, index, separators })}
        </View>
      );
    },
    [props.renderItem, showDivider]
  );

  return (
    <FlatList
      {...props}
      renderItem={renderItem}
      refreshControl={
        onRefresh ? (
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[theme.colors.primary]}
            tintColor={theme.colors.primary}
          />
        ) : undefined
      }
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      style={[styles.container, containerStyle]}
      contentContainerStyle={[
        styles.contentContainer,
        props.contentContainerStyle,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  itemContainer: {
    width: '100%',
  },
  itemWithDivider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
}); 