import { useNavigation } from '@react-navigation/native';
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Book({titulo, autor, valorPromo, valor, desc}) {
    const navigation = useNavigation();
    return (
        <View style={styles.panelBook}>
            <View style={styles.imageBook}></View>
            <View style={styles.describeBook}>
                <Text style={styles.titleBook}>{titulo}</Text>
                <Text style={styles.authorBook}>{autor}</Text>

                <View style={styles.priceBookView}>
                    <Text style={styles.priceBook}>R${valorPromo}</Text>
                    <Text style={styles.priceOriginalBook}>De: R${valor}</Text>
                </View>
                <Text style={styles.percentpriceBook}>(   {desc}%  de  desconto   )</Text>
                <TouchableOpacity>
                    <Text
                        style={styles.textButton}
                        onPress={() => {
                            navigation.navigate('FeedBook');
                        }}>
                        Detalhes
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    panelBook: {
        flexDirection: 'row',
        height: 180,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 40,
        borderTopLeftRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 10,
        marginBottom: 10,
    },
    imageBook: {
        width: 120,
        height: '100%',
        borderBottomLeftRadius: 40,
        borderTopLeftRadius: 10,
        backgroundColor: '#00b2ff',
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 10,
    },
    describeBook: {
        marginLeft: '5%',
        marginTop: '3%',
        flexDirection: 'column',
    },
    titleBook: {
        fontSize: 20,
        fontWeight: '800',
        color: '#333',
        marginBottom: 0,
    },
    authorBook: {
        fontSize: 14,
        fontWeight: '500',
        color: '#666',
        marginBottom: 0,
    },
    priceBookView: {
        flexDirection: 'row',
        marginLeft: '5%',
        marginTop: '5%',
    },
    priceOriginalBook: {
        fontSize: 12,
        fontWeight: '400',
        color: '#FF0000',
        marginBottom: 0,
        textDecorationLine: 'line-through',
        marginLeft: 10,
        marginTop: 4,
    },
    priceBook: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    percentpriceBook: {
        marginLeft: '3%',
        fontSize: 14,
        fontWeight: '400',
        color: '#68da3e',
        marginBottom: 0,
    },
    textButton: {
        marginHorizontal: '2%',
        fontSize: 16,
        fontWeight: '800',
        color: '#FFF',
        paddingHorizontal: '10%',
        paddingVertical: 4,
        textAlign: 'center',
        backgroundColor: '#3F79F9',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 6,
    },
});