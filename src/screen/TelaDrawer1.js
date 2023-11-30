import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

export default function TelaDrawer1() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Tela Drawer1</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
