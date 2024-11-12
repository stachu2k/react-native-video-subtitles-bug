import {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Video, {TextTrackType} from 'react-native-video';

function App() {
  const [state, setState] = useState({
    currentTime: 0,
    duration: 0,
  });

  return (
    <SafeAreaView style={styles.container}>
      <Video
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        }}
        textTracks={[
          {
            title: 'English',
            language: 'en',
            type: TextTrackType.VTT,
            uri: 'https://raw.githubusercontent.com/1c7/vtt-test-file/refs/heads/master/vtt%20files/1.%20Contain%20Index%20Number%20like%201%202%203%20.vtt',
          },
        ]}
        selectedTextTrack={{
          type: 'title',
          value: 'English',
        }}
        controls={true}
        style={{
          aspectRatio: 16 / 9,
        }}
        onLoad={({duration}: {duration: number}) => {
          setState(prevState => ({
            currentTime: prevState.currentTime,
            duration,
          }));
        }}
        onProgress={({currentTime}: {currentTime: number}) => {
          setState(prevState => ({
            currentTime,
            duration: prevState.duration,
          }));
        }}
      />
      <View style={styles.text}>
        <Text>Time: {Math.floor(state.currentTime)}</Text>
        <Text>Duration: {Math.floor(state.duration)}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    margin: 10,
  },
});

export default App;
