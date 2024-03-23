import { FlatList, StyleSheet, Text } from 'react-native';
import { Empty } from './Empty';
import { Loading } from '../ui';
import { GlobalStyles } from '../../constants/styles';
import { useEffect, useState } from 'react';

export function PaginatedList({ header, data, shape, pageSize, isLoading, loadMore, resetBuff, onEmtptyBuff }: PaginatedListProps) {
  const [rendered, setRendered] = useState<any>([]);

  useEffect(() => {
    if (!data || data.length == 0) {
      return
    }

    if (resetBuff) {
      setRendered([]);
      onEmtptyBuff();
    }

    let batchSize = rendered.length + pageSize;
    if (batchSize > data.length) {
      batchSize = data.length;
    }
    setRendered([...data.slice(0, batchSize)]);

  }, [data])

  return (
    <FlatList
      style={styles.container}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.Color.BackGround,
  },
  header: {
    backgroundColor: GlobalStyles.Color.Secondary,
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
  resetBuff: boolean
  onEmtptyBuff: () => void
  loadMore: () => void
}
