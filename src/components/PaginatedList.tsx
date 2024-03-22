import { FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Empty } from '../components';
import { Loading } from '../components/ui';
import { GlobalStyles } from '../constants/styles';
import { useEffect, useState } from 'react';

export default function PaginatedList({ header, data, shape, pageSize, isLoading, loadMore }: PaginatedListProps) {
  const [rendered, setRendered] = useState<any>([]);

  useEffect(() => {
    if (!data || data.length == 0) {
      return
    }

    let batchSize = rendered.length + pageSize;
    if (batchSize > data.length) {
      batchSize = data.length;
    }
    setRendered([...data.slice(0, batchSize)]);

  }, [data])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => shape({ ...item })}
        ListHeaderComponent={<Text style={styles.headerText}>{header}</Text>}
        ListHeaderComponentStyle={styles.header}
        ListEmptyComponent={<Empty />}
        ListFooterComponent={isLoading ? <Loading /> : null}
        onEndReached={!isLoading ? loadMore : null}
        onEndReachedThreshold={0.5}
      >
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

type PaginatedListProps = {
  header: string
  data: Array<any>
  shape: (props: any) => React.JSX.Element
  pageSize: number
  isLoading: boolean
  loadMore: () => void
}
