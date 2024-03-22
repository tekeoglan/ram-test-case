import { View, ActivityIndicator } from 'react-native'
import { GlobalStyles } from '../../constants/styles'

export default function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color={GlobalStyles.Color.Primary} />
    </View>
  )
}
