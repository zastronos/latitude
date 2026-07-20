import FeverDreamingGif from '@/assets/gifs/feverdreaminggif';
import Home from '@/features/home/home';
import PageTemplate from '@/shared/pageTemplate/pageTemplate';
import { StyleSheet, View } from 'react-native';

export default function TabOneScreen() {

  return (
    <View style={{ flex: 1 }}>
      <PageTemplate>
        <View style={styles.titleArea}>
          <Home />
          <View style={styles.gifContainer}>
            <FeverDreamingGif />
          </View>
        </View>
      </PageTemplate>
    </View>
  );
}

const styles = StyleSheet.create({
  titleArea: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  gifContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
});
