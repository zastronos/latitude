import { colors, fonts } from '@/constants/theme';
import SongBox from '@/features/music/songbox';
import { Song, useSongs } from '@/features/music/useSongs';
import PageTemplate from '@/shared/pageTemplate/pageTemplate';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const GRID_COLUMNS = 3;

type GridItem =
  | ({ type: 'song' } & Song)
  | { type: 'filler'; id: string };

// FlatList's numColumns lays out a fixed-size row regardless of how many
// real items are left, so an incomplete last row stretches to fill the
// width. Padding with invisible fillers keeps every row's cells the same
// size, however many songs the API ends up returning.
function toGridData(songs: Song[]): GridItem[] {
  const items: GridItem[] = songs.map((song) => ({ type: 'song', ...song }));
  while (items.length % GRID_COLUMNS !== 0) {
    items.push({ type: 'filler', id: `filler-${items.length}` });
  }
  return items;
}

export default function TabTwoScreen() {
  const { songs, loading } = useSongs();
  const gridData = toGridData(songs);

  return (
    <PageTemplate>
      <View style={styles.header}>
        <Text style={styles.title}>MUSIC</Text>
      </View>
      {!loading && (
        <FlatList
          key={GRID_COLUMNS}
          data={gridData}
          keyExtractor={(item) => item.id}
          numColumns={GRID_COLUMNS}
          renderItem={({ item }) =>
            item.type === 'song' ? (
              <SongBox title={item.title} subtitle={item.subtitle} youtubeVideoId={item.youtubeVideoId} />
            ) : (
              <View style={{ flex: 1, marginHorizontal: 20, marginVertical: 30, maxWidth: 340 }} />
            )
          }
          scrollEnabled={false}
          style={styles.grid}
        />
      )}
    </PageTemplate>
  );
}

const styles = StyleSheet.create({
  grid: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
  },

  header: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
  },

  title: {
    color: colors.accent,
    fontFamily: fonts.display,
    fontSize: 64,
    marginBottom: 10,
  }
});