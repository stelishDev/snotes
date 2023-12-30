import classNames from "classnames";
import { View } from "react-native";

export type CardStandardProps = {
    children: React.ReactNode;
    style: string;
};

export const CardStandard: React.FC<CardStandardProps> = ({
    children,
    style,
}: CardStandardProps) => {
    return (
        <View className={classNames("py-3 px-4", style)}>
            {children}
        </View>
    );
}
