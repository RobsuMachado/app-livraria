//IMPORTAÇÃO DO MENU DRAWER
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

//IMPORTAÇÃO DAS TELAS NAVEGAVEIS NO DRAWERMENU
import FeedBooks from '../screen/FeedBook'
import TelaDrawer1 from '../screen/TelaDrawer1'
import TelaDrawer2 from '../screen/TelaDrawer2'
import TelaDrawer3 from '../screen/TelaDrawer3'

//CRIAÇÃO DO NAVIGATOR DO DRAWERMENU
const Drawer = createDrawerNavigator();

//CONSTRUÇÃO DE UM FUNCTIONAL COMPONENT
export default function MyDrawer() {

    return (
        <Drawer.Navigator>

            <Drawer.Screen
                name='FeedBooks'
                component={FeedBooks}
                options={
                    {
                        title: 'Feed de livros',
                        headerTitleStyle: {
                            color: 'transparent',
                        }
                    }
                }
            />

            <Drawer.Screen
                name='TelaDrawer1'
                component={TelaDrawer1}
                options={
                    {
                        title: 'TelaDrawer1',
                        headerTitleStyle: {
                            color: 'transparent',
                        }
                    }
                }
            />

            <Drawer.Screen
                name='TelaDrawer2'
                component={TelaDrawer2}
                options={
                    {
                        title: 'TelaDrawer2',
                        headerTitleStyle: {
                            color: 'transparent',
                        }
                    }
                }
            />

            <Drawer.Screen
                name='TelaDrawer3'
                component={TelaDrawer3}
                options={
                    {
                        title: 'TelaDrawer3',
                        headerTitleStyle: {
                            color: 'transparent',
                        }
                    }
                }
            />

        </Drawer.Navigator>
    );
}