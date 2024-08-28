// DatePickerModal.tsx

import React from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { colors } from '../Consts/Const';

interface DatePickerModalProps {
  open: boolean;
  date: Date;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
  minimumDate: Date;
}

const CustomDatePicker = ({
  open,
  date,
  onConfirm,
  onCancel,
}: DatePickerModalProps) => {
  return (
    <Modal
      transparent
      visible={open}
      onRequestClose={onCancel}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={onConfirm}
          onCancel={onCancel}
          mode='date'
          theme='dark'
          buttonColor={colors.Pink}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.TransparentBacgkGround, 
  },
});

export default CustomDatePicker;
