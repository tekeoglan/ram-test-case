import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/styles';

export default function WideCard(props: WideCardProps) {
  return (
    <View key={props.episode} style={styles.container}>
      <View style={styles.innerLeftContainer}>
        <Text style={styles.textHead}>{props.episode}</Text>
      </View>
      <View style={styles.innerRightContainer}>
        <Text numberOfLines={1} style={styles.text}>{`${props.name}`}</Text>
        <Text style={styles.text}>{`${props.air_date}`}</Text>
      </View>
    </View>
  );
}

type WideCardProps = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  url: string;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.Color.Secondary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: GlobalStyles.Border.Radius.Small,
    shadowColor: GlobalStyles.Border.ShadowColor,
    borderWidth: GlobalStyles.Border.Width.Small,
    minHeight: 50,
    alignSelf: 'stretch',
    flexGrow: 0,
    margin: GlobalStyles.Spacing.Medium,
  },
  innerLeftContainer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: GlobalStyles.Spacing.Medium,
  },
  innerRightContainer: {
    flex: 0.8,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: GlobalStyles.Spacing.Large,
  },
  text: {
    color: GlobalStyles.Color.ForeGround,
    fontSize: GlobalStyles.FontSize.Large,
    fontWeight: GlobalStyles.FontWeight.Normal,
  },
  textHead: {
    color: GlobalStyles.Color.BackGround,
    fontSize: GlobalStyles.FontSize.Large,
    fontWeight: GlobalStyles.FontWeight.Bold,
  }
});
