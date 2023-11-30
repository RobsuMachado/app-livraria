import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

export default function TelaDrawer2() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Tela Drawer2</Text>
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
