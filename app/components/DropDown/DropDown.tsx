import React, {useRef} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {colors, screenWidth} from '../Consts/Const';
import {styles} from './DropDown.style';

interface SimpleDropdownProps {
  items: {label: string; value: string | number}[];
  placeholder: string;
  selectedValue: string | number | null;
  onValueChange: (value: string | number) => void;
  containerStyle?: StyleProp<ViewStyle>;
  dropdownStyle?: StyleProp<ViewStyle>;
  borderWidth?: number;
  width?: any;
  borderRadius?: number;
}

const SimpleDropdown: React.FC<SimpleDropdownProps> = ({
  items,
  placeholder,
  selectedValue,
  onValueChange,
  containerStyle,
  dropdownStyle,
  borderWidth = 1,
  width = 300,
  borderRadius = 6,
}) => {
  const dropdownRef = useRef<DropDown | null>(null);

  const handlePress = () => {
    Keyboard.dismiss();
    if (dropdownRef.current) {
      dropdownRef.current.open();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.touchableContainer, containerStyle]}>
        <View
          style={[
            styles.dropdownContainer,
            {borderWidth, width, borderRadius},
          ]}>
          <Dropdown
            ref={dropdownRef}
            data={items}
            labelField="label"
            valueField="value"
            placeholder={placeholder}
            value={items.find(item => item.value === selectedValue) || null}
            onChange={item => onValueChange(item.value)}
            style={[styles.dropdown, dropdownStyle, {width}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            mode="modal"
            iconColor={colors.Pink}
            itemTextStyle={{fontSize: 14}}
            containerStyle={{width: screenWidth / 1.5}}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SimpleDropdown;
