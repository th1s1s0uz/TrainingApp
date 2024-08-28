import React, { forwardRef, useImperativeHandle, useRef, useEffect, Ref } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView, Keyboard } from 'react-native';
import BottomSheet, { BottomSheetMethods } from '@gorhom/bottom-sheet';
import { styles } from './BottomSheet.style';

interface BottomSheetProps {
  title: string;
  snapPoints: string[];
  children: React.ReactNode;
  onClose: () => void;
}

const BottomSheetComponent = forwardRef<BottomSheetMethods, BottomSheetProps>(
  ({ title, snapPoints, children, onClose }, ref) => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    useImperativeHandle(ref, () => ({
      expand: () => bottomSheetRef.current?.expand(),
      close: () => bottomSheetRef.current?.close(),
      collapse: () => bottomSheetRef.current?.collapse(),
      snapToIndex: (index: number) => bottomSheetRef.current?.snapToIndex(index),
      snapToPosition: (position: number) => bottomSheetRef.current?.snapToPosition(position),
      forceClose: () => bottomSheetRef.current?.forceClose(),
    }));

    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
        bottomSheetRef.current?.expand();
      });

      const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
        bottomSheetRef.current?.collapse();
      });

      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      };
    }, []);

    return (
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose
        onClose={onClose}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <ScrollView
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.body}>
              {children}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </BottomSheet>
    );
  }
);

export default BottomSheetComponent;
