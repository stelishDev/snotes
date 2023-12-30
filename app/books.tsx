import { View, Text } from "react-native";
import { useBibleBooksHook } from "../hooks/useBibleBooks";

export default function BookScreen() {
  const {data} = useBibleBooksHook();
  return (
    <View className="p-6 w-full h-full bg-black">
      <Text className="text-3xl text-white">Books</Text>
      {data.map((item) => (
        <Text className="text-white" key={item.id}>
          {item.name}
        </Text>
      ))}
    </View>
  );
}
