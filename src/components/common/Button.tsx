import { Pressable, StyleSheet, Text } from "react-native"
import { GlobalStyles } from "../../constants/styles"

export function Button({ text, onBtn, color }: ButtonProps) {
  return (
    <Pressable
      style={[styles.button, { backgroundColor: color === 'green' ? GlobalStyles.Color.Green : GlobalStyles.Color.Red }]}
      onPress={onBtn}>
      <Text style={styles.textStyle}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    color: GlobalStyles.Color.BackGround,
    fontSize: GlobalStyles.FontSize.Large,
    fontWeight: GlobalStyles.FontWeight.Bold,
    textAlign: 'center',
  },
  button: {
    borderRadius: GlobalStyles.Border.Radius.Small,
    padding: 10,
    elevation: 2,
  },
})

type ButtonProps = {
  text: string
  color: 'red' | 'green'
  onBtn: () => void
}
