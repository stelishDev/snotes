import { Text, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";

export type ActionItemProps = {
  title: string;
  subTitle?: string;
  onPress: () => void;
  onClose: () => void;
  style?: string;
};

export const ActionItem: React.FC<ActionItemProps> = ({
  title,
  subTitle,
  onPress,
  onClose,
  style,
}: ActionItemProps) => {
  return (
    <View className="grid grid-cols-2 items-center bg-[#f2f1f8] p-4 pl-8 rounded-full">
      <View className="flex flex-row items-center space-x-4">
        <AntDesign
          name="notification"
          size={24}
          color="#998ea1"
        />
        <View>
          <Text className="font-semibold text-lg truncate">{title}</Text>
          <Text className="text-[#998ea1] backdrop:truncate">{subTitle}</Text>
        </View>
      </View>
      <View className="flex flex-row space-x-2 justify-end">
        <View className="bg-[#998ea1] w-[42px] h-[42px] rounded-full">
          <AntDesign
            className="-mt-[2px]"
            name="checkcircle"
            size={42}
            color="white"
            onPress={onPress}
          />
        </View>

        <View className="bg-[#998ea1] w-[42px] h-[42px] rounded-full">
          <AntDesign
            className="-mt-[2px]"
            name="closecircle"
            size={42}
            color="white"
            onPress={onClose}
          />
        </View>
      </View>
    </View>
  );
};
