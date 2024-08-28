import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import {styles} from './InfoPopup.style'

interface PopupProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  buttonText: string;
}

const InfoPopup = ({ visible, onClose, title, buttonText }: PopupProps) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.popupContainer}>
          <Text style={styles.popupText}>{title}</Text>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default InfoPopup;
