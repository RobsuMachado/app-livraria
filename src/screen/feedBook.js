import { useNavigation } from '@react-navigation/native';
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FeedBook() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.panelBook}>
                    <View style={styles.imageBook}></View>
                    <View style={styles.describeBook}>
                        <Text style={styles.titleBook}>Historia do tempo</Text>
                        <Text style={styles.authorBook}>Robson Henrique</Text>

                        <View style={styles.priceBookView}>
                            <Text style={styles.priceBook}>R$79,99</Text>
                            <Text style={styles.priceOriginalBook}>De: R$99,99</Text>
                        </View>
                            <Text style={styles.percentpriceBook}>(   19%  de  desconto   )</Text>
                            <TouchableOpacity>
                    <Text
                        style={styles.textButton}
                        onPress={() => {
                            navigation.navigate('FeedBook');
                        }}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    panelBook: {
        flexBasis: '100%',
        flexDirection: 'row',
        height: 180,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 40,
        borderTopLeftRadius: 10,
        backgroundColor: '#eee',
    },
    imageBook: {
        width: 120,
        height: '100%',
        borderBottomLeftRadius: 40,
        borderTopLeftRadius: 10,
        backgroundColor: '#00b2ff',
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
    priceBookView:{
        flexDirection:'row',
        marginLeft: '5%',
        marginTop: '5%',
    },
    priceOriginalBook: {
        fontSize: 14,
        fontWeight: '500',
        color: '#FF0000',
        marginBottom: 0,
        textDecorationLine: 'line-through',
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
        marginLeft: '2%',
        marginRight: '2%',
        fontSize: 10,
        fontWeight: '800',
        color: '#FFF',
        padding: 8,
        textAlign: 'center',
        backgroundColor: '#3F79F9',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 6,
    },
});