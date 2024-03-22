import { FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { Empty, MessageModal, WideCard } from '../components';
import { Loading } from '../components/ui';
import { useFetch } from '../hooks';
import { GlobalStyles } from '../constants/styles';

export default function Page() {
  const { fetchData, data, status, error } = useFetch<any>()

  useEffect(() => {
    fetchData('/episode')
  }, [])

  if (status === 'loading') {
    return <Loading />
  }

  if (status === 'error') {
    return <MessageModal message={error.message} />
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.results}
        renderItem={({ item }) => <WideCard {...item} />}
        ListHeaderComponent={<Text style={styles.headerText}>Episodes</Text>}
        ListHeaderComponentStyle={styles.header}
        ListEmptyComponent={<Empty />}>
      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.Color.BackGround,
  },
  header: {
    backgroundColor: GlobalStyles.Color.BackGround,
  },
  headerText: {
    textAlign: 'center',
    fontSize: GlobalStyles.Heading.H1.FontSize,
    fontWeight: GlobalStyles.Heading.H1.FontWeight,
    color: GlobalStyles.Color.ForeGround,
  }
});
