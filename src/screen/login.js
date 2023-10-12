import { useNavigation } from '@react-navigation/native';
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function login() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            {/*IMAGE DE LOGIN*/}
            <ScrollView>
                <View style={styles.viewLoginImage}>
                    <Image
                        style={styles.loginImage}
                        source={require('../image/login.png')}
                    />
                </View>

                <Text
                    style={styles.texto}> LOGIN </Text>

                <View style={styles.loginBar}>
                    <View style={styles.textBarImputEmail}>
                        <MaterialIcons name='email' size={20} color={'#999'} />
                        <TextInput
                            style={styles.textImput}
                            placeholderTextColor='#999'
                            placeholder='E-mail'
                            keyboardType='email-address' />
                    </View>

                    <View style={styles.textBarImputSecret}>
                        <MaterialIcons name='form-textbox-password' size={20} color={'#999'} />
                        <TextInput
                            style={styles.textImput}
                            placeholder='Senha'
                            placeholderTextColor='#999'
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

                <View style={styles.containerBarLoginWith}>
                    <View style={styles.barLoginWith}>
                    </View>
                    <Text style={styles.textLoginWith}>
                        ACESSAR COM OUTRAS REDES
                    </Text>
                    <View style={styles.barLoginWith}>
                    </View>
                </View>

                <View style={styles.viewLoginWith}>
                    <TouchableOpacity style={styles.btnLoginWith}>
                        <Image
                            source={require('../image/google.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnLoginWith}>
                        <Image
                            source={require('../image/facebook.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.viewCreateAccont}>
                    <Text style={styles.textCreateAccont}>
                        Não possue uma conta?
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('createUser');
                        }}
                    >
                        <Text style={styles.btnCreateAccont}>
                            CRIE UM
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
    viewLoginImage: {
        alignItems: 'center',
    },
    loginImage: {
        width: 300,
        height: 250,
    },
    texto: {
        marginLeft: '3%',
        fontSize: 28,
        fontWeight: '800',
        color: '#333',
        marginBottom: 20,
    },
    loginBar: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBarImputEmail: {
        flexDirection: 'row',
        width: '90%',
        paddingBottom: 10,
        marginBottom: 25,
        borderBottomColor: '#999',
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    textBarImputSecret: {
        flexDirection: 'row',
        width: '90%',
        paddingBottom: 10,
        marginBottom: 35,
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
        backgroundColor: '#3F79F9b',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 6,
    },
    containerBarLoginWith: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        marginTop: 20,
    },
    barLoginWith: {
        margin: '1%',
        width: '20%',
        borderColor: '#999',
        borderBottomWidth: 1,
    },
    textLoginWith: {
        color: '#999',
    },
    viewLoginWith: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnLoginWith: {
        margin: 15,
        padding: 6,
        borderWidth: 2,
        borderColor: '#999',
        borderRadius: 100,
    },
    viewCreateAccont: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    btnCreateAccont: {
        fontSize: 16,
        fontWeight: '800',
        color: '#3F79F9b',
        textAlign: 'center',
    },
    textCreateAccont: {
        fontSize: 16,
        fontWeight: '500',
        color: '#999',
        textAlign: 'center',
        marginRight: 10,
    },
});
