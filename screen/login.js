import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function login() {
    return (
        <SafeAreaView style={styles.container}>
            {/*IMAGE DE LOGIN*/}
            <View>
                <Image
                    style={styles.login}
                    source={require('../assets/image/login.png')}
                />
            </View>

            <Text
                style={styles.texto}> LOGIN </Text>

            <View style={styles.loginBar}>
                <View style={styles.textBar}>
                    <MaterialIcons name='email' size={20} color={'#ccc'} />
                    <TextInput
                        style={styles.textImput}
                        placeholderTextColor='#ccc'
                        placeholder='E-mail'
                        keyboardType='email-address' />
                </View>

                <View style={styles.textBar}>
                    <MaterialIcons name='form-textbox-password' size={20} color={'#ccc'} />
                    <TextInput
                        style={styles.textImput}
                        placeholder='Senha'
                        placeholderTextColor='#ccc'
                        keyboardType='password'
                        secureTextEntry={true} />
                </View>
            </View>


            <TouchableOpacity>
                <Text
                    style={styles.textButton}>
                    LOGIN
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    topo: {
        alignItems: 'center',
    },
    login: {
        width: 350,
    },
    texto: {
        marginLeft: 12,
        fontSize: 28,
        fontWeight: '500',
        color: '#333',
        marginBottom: 30,
    },
    loginBar: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBar: {
        flexDirection: 'row',
        width: '90%',
        paddingBottom: 15,
        marginBottom: 25,
        borderBottomColor: '#00b2ff',
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    textImput: {
        color: '#333',
        marginLeft: 8,
    },
    textButton: {
        margin: 12,
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        backgroundColor: '#00b2ff',
        padding: 10,
        textAlign: 'center',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 6,
    }
});
