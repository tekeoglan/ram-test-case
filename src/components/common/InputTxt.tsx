import { StyleSheet, TextInput } from "react-native"

export const InputTxt = ({ onEdit, placeholder }: InputTxtProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onEndEditing={onEdit}
      maxLength={32}
      inputMode="text"
      numberOfLines={1}
    ></TextInput>
  )
}

type InputTxtProps = {
  onEdit: (e: any) => void
  placeholder: string
}

const styles = StyleSheet.create({
  input: {
    width: 250,
    minHeight: 20,
    margin: 5,
    borderWidth: 1,
    padding: 3,
  }
})
