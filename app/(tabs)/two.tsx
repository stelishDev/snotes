import { Pressable, View } from "react-native";

import { StackActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { AnimatedFAB } from "react-native-paper";
import { ActionItem } from "../../components/ActionItem";
import {
  CorneredArea,
  CorneredAreaColours,
} from "../../components/CorneredArea";
import { ListNoteItem } from "../../components/ListNoteItem";
import { Text } from "../../components/Themed";
import { useLatestSermonNotes } from "../../hooks/useLatestSermonNotes";

export default function TabTwoScreen() {
  const navigation = useNavigation();
  const { notes } = useLatestSermonNotes();

  const handleFabAction = () => {
    navigation.dispatch(StackActions.push("books"));
  };

  return (
    <View className="relative block -mt-[64px]">
      <CorneredArea mode={CorneredAreaColours.Primary}>
        <View className="pt-[64px]">
          <Text className="text-3xl font-semibold">Primary Section</Text>
        </View>
      </CorneredArea>
      <CorneredArea mode={CorneredAreaColours.Secondary}>
        <View className="pt-[64px]">
          <ActionItem
            title="Action Item"
            subTitle="Sub Title"
            onPress={() => console.log("Pressed")}
            onClose={() => console.log("Closed")}
          />
        </View>
      </CorneredArea>
      <View className="flex space-y-8 px-[32px] pt-[116px]">
        {notes.map((note, index) => (
          <ListNoteItem key={index} sermonNote={note} />
        ))}
      </View>
      <Pressable>
        {({ pressed }) => (
          <AnimatedFAB
            icon={"plus"}
            label={"Label"}
            extended={pressed}
            onPress={handleFabAction}
            visible
            animateFrom={"right"}
            iconMode={"static"}
            style={{
              position: "fixed",
              margin: 16,
              right: 0,
              bottom: 0,
            }}
          />
        )}
      </Pressable>
    </View>
  );
}
