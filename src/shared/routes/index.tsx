import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MinimumThirdAndFourthBimester from '../../screens/MinimumThirdAndFourthBimester';
import MinimumThirdBimester from '../../screens/MinimumThirdBimester';
import { Feather, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import CustomDrawerContent from './CustomDrawerContent';
import MinimumFourthBimester from '../../screens/MinimumFourthBimester';
import MinimumPF from '../../screens/MinimumPF';

const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
        <NavigationContainer >
            <Drawer.Navigator initialRouteName="MinimumThirdAndFourthBimester" drawerContent={CustomDrawerContent} screenOptions={
                {
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: '#FAFAFA',
                    },
                    headerLeftContainerStyle: {
                        marginTop: 20,
                        marginLeft: 10
                    },
                    drawerActiveBackgroundColor: '#69B99D',
                    drawerActiveTintColor: 'white',
                    drawerIcon: ({ color, size }) => (
                        <Feather name="menu" color={color} size={size} />
                    ),
                    
                }}>
                <Drawer.Screen name="MinimumThirdAndFourthBimester" options={{
                    drawerLabel: 'Mínimo no 3° e 4° bimestre',
                    drawerIcon: ({ color, size }) => (
                        <FontAwesome5 name="chart-area" size={size} color={color} />
                    )
                }} component={MinimumThirdAndFourthBimester} />
                <Drawer.Screen name="MinimumThirdBimester" options={{ 
                    drawerLabel: 'Mínimo no 3° bimestre',
                    drawerIcon: ({ color, size }) => (
                        <FontAwesome name="bar-chart" size={size} color={color} />
                    )
                }} component={MinimumThirdBimester} />
                <Drawer.Screen name="MinimumFourthBimester" options={{ 
                    drawerLabel: 'Mínimo no 4° bimestre',
                    drawerIcon: ({ color, size }) => (
                        <FontAwesome5 name="chart-line" size={size} color={color} />
                    )
                }} component={MinimumFourthBimester} />
                <Drawer.Screen name="MinimumPF" options={{ 
                    drawerLabel: 'Mínimo na PF',
                    drawerIcon: ({ color, size }) => (
                        <FontAwesome5 name="gavel" size={size} color={color} />
                    )
                }} component={MinimumPF} />
                <Drawer.Screen name="AverageBimester" options={{ 
                    drawerLabel: 'Média bimestral',
                    drawerIcon: ({ color, size }) => (
                        <FontAwesome5 name="chalkboard-teacher" size={size} color={color} />
                    )
                }} component={MinimumThirdBimester} />
                <Drawer.Screen name="AverageGeneral" options={{ 
                    drawerLabel: 'Média geral',
                    drawerIcon: ({ color, size }) => (
                        <FontAwesome5 name="chart-pie" size={size} color={color} />
                    )
                }} component={MinimumThirdBimester} />
                <Drawer.Screen name="AverageEnd" options={{ 
                    drawerLabel: 'Média final',
                    drawerIcon: ({ color, size }) => (
                        <FontAwesome5 name="chess-queen" size={size} color={color} />
                    )
                }} component={MinimumThirdBimester} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}