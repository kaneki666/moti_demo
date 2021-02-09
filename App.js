import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {View as MotiView} from 'moti';
const App = () => {
  return (
    <View>
      <MotiView
        from={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{type: 'timing'}}
      />
    </View>
  );
};

export default App;
