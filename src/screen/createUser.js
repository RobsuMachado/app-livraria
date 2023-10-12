import { useNavigation } from '@react-navigation/native';
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function createUser() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            {/*IMAGE DE LOGIN*/}
            <ScrollView>
                <View style={styles.viewCreateImage}>
                    <Image
                        style={styles.createImage}
                        source={require('../image/registration.png')}
                    />
                </View>

                <Text
                    style={styles.titlePage}> CADASTRO </Text>

                <View style={styles.createBar}>
                    <View style={styles.textBarImput}>
                        <MaterialIcons name='email' size={20} color={'#999'} />
                        <TextInput
                            style={styles.textImput}
                            placeholderTextColor='#999'
                            placeholder='E-mail'
                            keyboardType='email-address' />
                    </View>

                    <View style={styles.textBarImput}>
                        <MaterialIcons name='form-textbox-password' size={20} color={'#999'} />
                        <TextInput
                            style={styles.textImput}
                            placeholder='Senha'
                            placeholderTextColor='#999'
                            keyboardType='password'
                            secureTextEntry={true} />
                    </View>
                    <View style={styles.textBarImput}>
                        <MaterialIcons name='form-textbox-password' size={20} color={'#999'} />
                        <TextInput
                            style={styles.textImput}
                            placeholder='Confimar Senha'
                            placeholderTextColor='#999'
                            keyboardType='password'
                            secureTextEntry={true} />
                    </View>
                </View>


                <TouchableOpacity>
                    <Text
                        style={styles.textButton}>
                        CADASTRO
                    </Text>
                </TouchableOpacity>

                <View style={styles.viewLoginAccont}>
                    <Text style={styles.textLoginAccont}>
                        Já possue uma conta?
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('login');
                        }}
                    >
                        <Text style={styles.btnLoginAccont}>
                            ENTRAR
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    viewCreateImage: {
        alignItems: 'center',
        padding: 20,
    },
    createImage: {
        width: 260,
        height: 210,
    },
    titlePage: {
        marginLeft: '3%',
        fontSize: 28,
        fontWeight: '800',
        color: '#333',
        marginBottom: 25,
    },
    createBar: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    textBarImput: {
        flexDirection: 'row',
        width: '90%',
        paddingBottom: 10,
        marginBottom: 20,
        borderBottomColor: '#999',
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    textImput: {
        color: '#333',
        marginLeft: '3%',
    },
    textButton: {
        marginLeft: '4%',
        marginRight: '4%',
        fontSize: 16,
        fontWeight: '800',
        color: '#FFF',
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#3F79F9',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 6,
    },
    viewLoginAccont: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    btnLoginAccont: {
        fontSize: 16,
        fontWeight: '800',
        color: '#3F79F9',
        textAlign: 'center',
    },
    textLoginAccont: {
        fontSize: 16,
        fontWeight: '500',
        color: '#999',
        textAlign: 'center',
        marginRight: 10,
    },
});
