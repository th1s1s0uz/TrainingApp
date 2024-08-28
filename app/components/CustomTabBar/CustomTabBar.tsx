import React from 'react';
import { View, TouchableOpacity, SafeAreaView } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { styles } from './CustomTabBar.style';

interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const Icon = options.tabBarIcon;
          const iconProps: TabBarIconProps = {
            focused: isFocused,
            color: isFocused ? 'blue' : 'gray', 
            size: 24 
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={[styles.tab, isFocused && styles.activeTab]}
            >
              {Icon && <Icon {...iconProps} />}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default CustomTabBar;
