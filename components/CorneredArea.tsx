import classNames from "classnames";
import { View, StyleSheet } from "react-native";

export enum CorneredAreaColours {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
}

export type CorneredAreaProps = {
  children: React.ReactNode;
  mode: CorneredAreaColours;
};

export const CorneredArea: React.FC<CorneredAreaProps> = ({
  children,
  mode,
}: CorneredAreaProps) => {
  return (
    <View
      id="cornered-area"
      className={classNames(
        "relative block rounded-bl-[64px] w-full -mb-[64px] pt-[32px] pb-[64px] px-[64px]",
        mode === CorneredAreaColours.Primary && "bg-indigo-500 z-20",
        mode === CorneredAreaColours.Secondary && "bg-white z-10 text-black",
        mode === CorneredAreaColours.Tertiary && "bg-green-300",
      )}
    >
      {children}
    </View>
  );
};
