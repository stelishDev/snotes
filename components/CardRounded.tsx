import classNames from "classnames";
import { View } from "react-native";

export type CardRoundedProps = {
  children: React.ReactNode;
  style: string;
};

export const CardRounded: React.FC<CardRoundedProps> = ({
  children,
  style,
}: CardRoundedProps) => {
  return (
    <View className={classNames("rounded-3xl py-3 px-4", style)}>
      {children}
    </View>
  );
};
