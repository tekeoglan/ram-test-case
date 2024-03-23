import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

export function MessageModal({ message, visible, onClose }: MessageModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        onClose()
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{message}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => onClose()}>
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    minWidth: 200,
    margin: GlobalStyles.Spacing.Medium,
    backgroundColor: GlobalStyles.Color.BackGround,
    borderRadius: GlobalStyles.Border.Radius.Small,
    padding: GlobalStyles.Spacing.Large,
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
    color: GlobalStyles.Color.BackGround,
    fontSize: GlobalStyles.FontSize.Large,
    fontWeight: GlobalStyles.FontWeight.Bold,
    textAlign: 'center',
  },
  modalText: {
    color: GlobalStyles.Color.ForeGround,
    fontSize: GlobalStyles.FontSize.Large,
    fontWeight: GlobalStyles.FontWeight.Normal,
    marginBottom: 15,
    textAlign: 'center',
  },
});

type MessageModalProps = {
  message: string
  visible: boolean
  onClose: () => void
}
