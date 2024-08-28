import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Header from '../../components/Header/Header';
import { colors } from '../../components/Consts/Const';
import SimpleDropdown from '../../components/DropDown/DropDown';
import InfoPopup from '../../components/InfoPopup/InfoPopup';
import {styles} from './ContactUs.style'

interface Reason {
  label: string;
  value: string | number;
}

const ContactUs = () => {
  const [selectedReason, setSelectedReason] = useState<string | number | null>(null);
  const [message, setMessage] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const [popupMessage, setPopupMessage] = useState<string>('');

  const reasons: Reason[] = [
    { label: 'Feedback', value: 'feedback' },
    { label: 'Support', value: 'support' },
    { label: 'Other', value: 'other' },
  ];

  const handleInputChange = (value: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter(value);
    validateForm();
  };

  const validateForm = () => {
    if (selectedReason && message) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = () => {
    if (isFormValid) {
      const formData = [
        { reason: selectedReason },
        { message: message }
      ];

      console.log('Form Data:', formData);

      setPopupMessage('Success! Your message has been sent!');
      setPopupVisible(true);
      setSelectedReason(null);
      setMessage('');
      setIsFormValid(false);
    } else {
      setPopupMessage('Error! Please fill in all fields.');
      setPopupVisible(true);  
    }
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <Header
          title="Contact Us"
          bgColor={colors.Pink}
          titleColor={colors.White}
          backButtonTextColor={colors.White}
        />
        <ScrollView contentContainerStyle={styles.formContainer}>
          <Text style={styles.description}>
            We appreciate your interest in contacting us. Please select the reason for your contact from the dropdown menu and provide your message. Our team will review your submission and get back to you as soon as possible. Thank you for reaching out!
          </Text>
          <Text style={styles.label}>Reason for Contact:</Text>
          <SimpleDropdown
            items={reasons}
            placeholder="Select a reason"
            selectedValue={selectedReason}
            onValueChange={setSelectedReason}
            borderWidth={1}
            width={'100%'}
            borderRadius={4}
          />
          <Text style={styles.label}>Message:</Text>
          <TextInput
            style={styles.messageInput}
            value={message}
            onChangeText={(text) => handleInputChange(text, setMessage)}
            placeholder="Enter your message"
            multiline
          />
          <TouchableOpacity
            style={[styles.button, !isFormValid && styles.buttonDisabled]}
            onPress={handleSubmit}
            disabled={!isFormValid}
          >
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
      <InfoPopup
        visible={popupVisible}
        onClose={closePopup}
        title={popupMessage}
        buttonText="Close"
      />
    </View>
  );
};

export default ContactUs;
