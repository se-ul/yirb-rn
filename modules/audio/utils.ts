import { Audio } from "expo-av";
import {
  INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
  INTERRUPTION_MODE_IOS_DO_NOT_MIX,
} from "expo-av/build/Audio";

export function initAudio() {
  Audio.setAudioModeAsync({
    playsInSilentModeIOS: true,
    staysActiveInBackground: true,
    interruptionModeIOS: INTERRUPTION_MODE_IOS_DO_NOT_MIX,
    interruptionModeAndroid: INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
  });
}
