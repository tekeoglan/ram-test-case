import { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { GlobalStyles } from '../constants/styles';

export default function MessageModal({ message }: MessageModalProps) {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{message}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: GlobalStyles.Spacing.Medium,
    backgroundColor: GlobalStyles.Color.BackGround,
    borderRadius: GlobalStyles.Border.Radius.Small,
    padding: 35,
    alignItems: 'center',
    shadowColor: GlobalStyles.Border.ShadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: GlobalStyles.Border.Radius.Small,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: GlobalStyles.Color.Red,
  },
  textStyle: {
    color: GlobalStyles.Color.ForeGround,
    fontWeight: GlobalStyles.FontWeight.Normal,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

type MessageModalProps = {
  message: string
}
