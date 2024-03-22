import { Text, View, StyleSheet } from 'react-native'
import { GlobalStyles } from '../constants/styles'

export default function Empty() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>There is nothing to see</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: GlobalStyles.Color.ForeGround,
    fontSize: GlobalStyles.FontSize.Large,
    fontWeight: GlobalStyles.FontWeight.Normal,
  }
})
