import { View, StyleSheet } from "react-native"
import { Button } from "./common"
import { GlobalStyles } from "../constants/styles"

export function Header({ onSearch, onHome }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Button text="Home" color="green" onBtn={onHome} />
      <Button text="Search" color="red" onBtn={onSearch} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexShrink: 0,
    flexGrow: 0,
    padding: GlobalStyles.Spacing.Medium,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: GlobalStyles.Color.Primary,
  }
})

type HeaderProps = {
  onSearch: () => void
  onHome: () => void
}
