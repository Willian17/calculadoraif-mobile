import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Linking } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';


export default function CustomDrawerContent(props: any) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Versão Web"
                onPress={() => Linking.openURL('https://calculator-if-angular.web.app/')}
                icon={({ size, color }) => (<FontAwesome5 name="desktop" size={size} color={color} />)}
            />
        </DrawerContentScrollView>
    );
}