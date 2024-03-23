import { Modal, Pressable, Text, View, StyleSheet } from "react-native"
import { GlobalStyles } from "../../constants/styles";
import { useReducer } from "react";
import { InputTxt } from "../common";

export function FindModal({ visible, onClose, onFind }: FindModalProps) {
  const [filter, dispatch] = useReducer(filterReducer, initialFilter)

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
          <Text style={styles.modalText}>
            {"Find a character"}
          </Text>
          <InputTxt
            onEdit={(e) => dispatch({ type: 'name', payload: e.nativeEvent.text })}
            placeholder="Name"
          />
          <InputTxt
            onEdit={(e) => dispatch({ type: 'status', payload: e.nativeEvent.text })}
            placeholder="Status (alive, dead or unknown)"
          />
          <InputTxt
            onEdit={(e) => dispatch({ type: 'species', payload: e.nativeEvent.text })}
            placeholder="Species"
          />
          <InputTxt
            onEdit={(e) => dispatch({ type: 'type', payload: e.nativeEvent.text })}
            placeholder="Type"
          />
          <InputTxt
            onEdit={(e) => dispatch({ type: 'gender', payload: e.nativeEvent.text })}
            placeholder="Gender (male, female, genderless or unknown)"
          />
          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.button, styles.buttonFind]}
              onPress={() => onFind(filter)}>
              <Text style={styles.textStyle}>O</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onClose}>
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

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
    paddingVertical: 10,
    paddingHorizontal: 24,
    elevation: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    minWidth: '50%',
  },
  buttonClose: {
    backgroundColor: GlobalStyles.Color.Red,
  },
  buttonFind: {
    backgroundColor: GlobalStyles.Color.Green,
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
    marginBottom: 4,
    textAlign: 'center',
  },
});

export type Filter = {
  name: string
  status: string
  species: string
  type: string
  gender: string
}

type FilterAction = {
  type: string
  payload: string
}

type FindModalProps = {
  visible: boolean
  onFind: (filter: Filter) => void
  onClose: () => void
}

const initialFilter: Filter = {
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
}

const filterReducer = (state: Filter, action: FilterAction) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload }
    case 'status':
      return { ...state, status: action.payload }
    case 'species':
      return { ...state, species: action.payload }
    case 'type':
      return { ...state, type: action.payload }
    case 'gender':
      return { ...state, gender: action.payload }
    default:
      return state
  }
}
