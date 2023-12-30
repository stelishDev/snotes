import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SermonNote } from "../types/notes";

export type ListNoteItemProps = {
  sermonNote: SermonNote;
};

export const ListNoteItem: React.FC<ListNoteItemProps> = ({
  sermonNote,
}: ListNoteItemProps) => {
  return (
    <View className="flex flex-row space-x-6">
      <Feather name="clock" size={24} color="#998ea1" />
      <View className="flex space-y-1">
        <Text className="text-lg font-bold text-white capitalize">{sermonNote.title}</Text>
        <Text className="text-base text-[#998ea1]">Eph 5:1</Text>
        <Text className="text-base text-[#998ea1]">A week ago</Text>
      </View>
    </View>
  );
};
