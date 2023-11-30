import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

export default function TelaDrawer3() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Tela Drawer3</Text>
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
