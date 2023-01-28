import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StatusBar, FlatList, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data1: {
                imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',

                title: 'Bondi Beach',
                location: '1.2Km away',
                review: 4.9,
                visited: '+5 visited',

                profile1: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
                profile2: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80',
                profile3: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',

                tide: 5.8,
                weather: 36,
                wind: 7.8,

                deskripsi: 'Indonesia is a maritime country that has a lot of coastal tourist attractions the thousands of beaches  Indonesia some of them deserve to be called the most beautiful beach resorts Indonesia beauty even deserves to be compared with'
            },

            data2: {
                imageUrl: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',

                title: 'Santa Beach',
                location: '1.5Km away',
                review: '4.8',
                visited: '+7 visited',

                profile1: 'https://plus.unsplash.com/premium_photo-1661255373874-f7585966a77a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80',
                profile2: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
                profile3: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',

                tide: 5.7,
                weather: 35,
                wind: 7.7,

                deskripsi: 'Of the many tourist attractions in Indonesia, the beach is indeed one of the peoples favorites.You certainly know Bali, right? This island is even famous to foreign countries thanks to its beach tourism and cultural tourism.'
            },

            data3: {
                imageUrl: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',

                title: 'Ocean Beach',
                location: '1.7Km away',
                review: '4.7',
                visited: '+3 visited',

                profile1: 'https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                profile2: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1976&q=80',
                profile3: 'https://images.unsplash.com/photo-1545996124-0501ebae84d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',

                tide: 5.6,
                weather: 34,
                wind: 7.6,

                deskripsi: 'Because of the vast territory in Indonesia, you may not be able to easily reach these locations.Therefore, you need a partner to plan a fun vacation.Salsa Wisata is the best solution for your vacation.'
            },

            data4: {
                imageUrl: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',

                title: 'Cocoa Beach',
                location: '2.4Km away',
                review: '4.9',
                visited: '+14 visited',

                profile1: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80',
                profile2: 'https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                profile3: 'https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',

                tide: 5.5,
                weather: 33,
                wind: 7.5,

                deskripsi: 'If we talk about the famous beaches in Indonesia, Raja Ampat is a name that we cannot ignore. The area is filled with amazing small islands. The beaches in Raja Ampat are also very amazing.'
            },

            data5: {
                imageUrl: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

                title: 'South Beach',
                location: '2.2Km away',
                review: '5.0',
                visited: '+10 visited',

                profile1: 'https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                profile2: 'https://images.unsplash.com/photo-1591973669966-52d2534d9087?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                profile3: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',

                tide: 5.4,
                weather: 32,
                wind: 7.4,

                deskripsi: 'So good, the beauty of Raja Ampat beach has entered the world level and has received appreciation from the Indonesian Ministry of Tourism, you know. This most beautiful beach in Indonesia deserves to be lined up with other beautiful beaches from around the world. Whats more, access to Raja Ampat which is quite complicated keeps the beauty of this beach awake'
            },
        }
    }

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#f8f9fd', padding: 24 }} showsVerticalScrollIndicator={false}>

                <StatusBar backgroundColor='#f8f9fd' barStyle='dark-content' />

                {/* start header */}
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../public/assets/img/header/bars.png')}
                            style={{ height: 23, width: 23 }}
                        />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                        <Text style={{ color: '#a8abb0', fontSize: 13, marginTop: 3, marginHorizontal: 10 }}>Nearby</Text>

                        <TouchableOpacity>
                            <Image
                                source={require('../../public/assets/img/header/compas.png')}
                                style={{ height: 60, width: 60, marginTop: -15 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* end header */}



                {/* start user profile */}
                <View>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#000', marginTop: 10 }}>Discover</Text>

                    <View style={{ flexDirection: 'row', marginTop: 30, backgroundColor: '#eaeff3', padding: 20, borderRadius: 16, elevation: 1 }}>
                        <TouchableOpacity>
                            <Image
                                source={require('../../public/assets/img/main/user.png')}
                                style={{ height: 50, width: 50, borderRadius: 50 }}
                            />
                        </TouchableOpacity>

                        <Text style={{ width: 200, marginLeft: 15, marginTop: 7, color: '#6f7c84' }}>Maria invited you to surt at Canggu with 6 others</Text>
                    </View>
                </View>
                {/* end user profile */}



                {/* start categories */}
                <View style={{ marginTop: 30 }}>
                    <Text style={{ color: '#444b54', fontSize: 20, fontWeight: 'bold' }}>Categories</Text>

                    <View style={{ marginTop: 20 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                            <TouchableOpacity style={styles.tombolCategory}>
                                <Image
                                    source={require('../../public/assets/img/main/user.png')}
                                    style={{ height: 35, width: 35, borderRadius: 50 }}
                                />
                                <Text style={styles.nameCategory}>Locations</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.tombolCategory}>
                                <Image
                                    source={require('../../public/assets/img/main/calender.png')}
                                    style={{ height: 35, width: 35, borderRadius: 50 }}
                                />
                                <Text style={styles.nameCategory}>Events</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.tombolCategory}>
                                <Image
                                    source={require('../../public/assets/img/main/bag.png')}
                                    style={{ height: 35, width: 35, borderRadius: 50 }}
                                />
                                <Text style={styles.nameCategory}>Shopping</Text>
                            </TouchableOpacity>

                        </ScrollView>

                    </View>

                </View>
                {/* end categories */}



                {/* start list */}
                <View style={{ marginTop: 30 }}>
                    <Text style={{ color: '#444b54', fontSize: 20, fontWeight: 'bold' }}>Near you</Text>

                    {/* start list 1 */}
                    <TouchableOpacity
                        style={styles.menu}
                        onPress={() => this.props.navigation.navigate('Detail', {
                            title: this.state.data1.title,
                            imageUrl: this.state.data1.imageUrl,
                            location: this.state.data1.location,
                            review: this.state.data1.review,
                            tide: this.state.data1.tide,
                            weather: this.state.data1.weather,
                            wind: this.state.data1.wind,
                            deskripsi: this.state.data1.deskripsi,
                        })}
                    >

                        <Image
                            source={{ uri: this.state.data1.imageUrl }}
                            style={styles.image_prime}
                        />
                        <Text style={styles.title_list}>{this.state.data1.title}</Text>


                        <View style={styles.home_deskripsi}>
                            <Icon name="compass" size={20} color="#1E9BDF" />
                            <Text style={styles.location}>{this.state.data1.location}</Text>
                            <Icon name="star" size={16} color="#E4A942" style={styles.bintang} />
                            <Text style={styles.review}>{this.state.data1.review}</Text>
                        </View>


                        <View style={styles.home_visited}>
                            <Image
                                source={{ uri: this.state.data1.profile1 }}
                                style={styles.img_visited}
                            />

                            <Image
                                source={{ uri: this.state.data1.profile2 }}
                                style={styles.img_visited}
                            />

                            <Image
                                source={{ uri: this.state.data1.profile3 }}
                                style={styles.img_visited}
                            />

                            <Text style={styles.jml_visited}>{this.state.data1.visited}</Text>
                        </View>

                    </TouchableOpacity>
                    {/* end list 1 */}


                    {/* start list 2 */}
                    <TouchableOpacity
                        style={styles.menu}
                        onPress={() => this.props.navigation.navigate('Detail', {
                            title: this.state.data2.title,
                            imageUrl: this.state.data2.imageUrl,
                            location: this.state.data2.location,
                            review: this.state.data2.review,
                            tide: this.state.data2.tide,
                            weather: this.state.data2.weather,
                            wind: this.state.data2.wind,
                            deskripsi: this.state.data2.deskripsi,
                        })}
                    >

                        <Image
                            source={{ uri: this.state.data2.imageUrl }}
                            style={styles.image_prime}
                        />
                        <Text style={styles.title_list}>{this.state.data2.title}</Text>


                        <View style={styles.home_deskripsi}>
                            <Icon name="compass" size={20} color="#1E9BDF" />
                            <Text style={styles.location}>{this.state.data2.location}</Text>
                            <Icon name="star" size={16} color="#E4A942" style={styles.bintang} />
                            <Text style={styles.review}>{this.state.data2.review}</Text>
                        </View>


                        <View style={styles.home_visited}>
                            <Image
                                source={{ uri: this.state.data2.profile1 }}
                                style={styles.img_visited}
                            />

                            <Image
                                source={{ uri: this.state.data2.profile2 }}
                                style={styles.img_visited}
                            />

                            <Image
                                source={{ uri: this.state.data2.profile3 }}
                                style={styles.img_visited}
                            />

                            <Text style={styles.jml_visited}>{this.state.data2.visited}</Text>
                        </View>

                    </TouchableOpacity>
                    {/* end list 2 */}


                    {/* start list 3 */}
                    <TouchableOpacity
                        style={styles.menu}
                        onPress={() => this.props.navigation.navigate('Detail', {
                            title: this.state.data3.title,
                            imageUrl: this.state.data3.imageUrl,
                            location: this.state.data3.location,
                            review: this.state.data3.review,
                            tide: this.state.data3.tide,
                            weather: this.state.data3.weather,
                            wind: this.state.data3.wind,
                            deskripsi: this.state.data3.deskripsi,
                        })}
                    >

                        <Image
                            source={{ uri: this.state.data3.imageUrl }}
                            style={styles.image_prime}
                        />
                        <Text style={styles.title_list}>{this.state.data3.title}</Text>


                        <View style={styles.home_deskripsi}>
                            <Icon name="compass" size={20} color="#1E9BDF" />
                            <Text style={styles.location}>{this.state.data3.location}</Text>
                            <Icon name="star" size={16} color="#E4A942" style={styles.bintang} />
                            <Text style={styles.review}>{this.state.data3.review}</Text>
                        </View>


                        <View style={styles.home_visited}>
                            <Image
                                source={{ uri: this.state.data3.profile1 }}
                                style={styles.img_visited}
                            />

                            <Image
                                source={{ uri: this.state.data3.profile2 }}
                                style={styles.img_visited}
                            />

                            <Image
                                source={{ uri: this.state.data3.profile3 }}
                                style={styles.img_visited}
                            />

                            <Text style={styles.jml_visited}>{this.state.data3.visited}</Text>
                        </View>

                    </TouchableOpacity>
                    {/* end list 3 */}


                    {/* start list 4 */}
                    <TouchableOpacity
                        style={styles.menu}
                        onPress={() => this.props.navigation.navigate('Detail', {
                            title: this.state.data4.title,
                            imageUrl: this.state.data4.imageUrl,
                            location: this.state.data4.location,
                            review: this.state.data4.review,
                            tide: this.state.data4.tide,
                            weather: this.state.data4.weather,
                            wind: this.state.data4.wind,
                            deskripsi: this.state.data4.deskripsi,
                        })}
                    >

                        <Image
                            source={{ uri: this.state.data4.imageUrl }}
                            style={styles.image_prime}
                        />
                        <Text style={styles.title_list}>{this.state.data4.title}</Text>


                        <View style={styles.home_deskripsi}>
                            <Icon name="compass" size={20} color="#1E9BDF" />
                            <Text style={styles.location}>{this.state.data4.location}</Text>
                            <Icon name="star" size={16} color="#E4A942" style={styles.bintang} />
                            <Text style={styles.review}>{this.state.data4.review}</Text>
                        </View>


                        <View style={styles.home_visited}>
                            <Image
                                source={{ uri: this.state.data4.profile1 }}
                                style={styles.img_visited}
                            />

                            <Image
                                source={{ uri: this.state.data4.profile2 }}
                                style={styles.img_visited}
                            />

                            <Image
                                source={{ uri: this.state.data4.profile3 }}
                                style={styles.img_visited}
                            />

                            <Text style={styles.jml_visited}>{this.state.data4.visited}</Text>
                        </View>

                    </TouchableOpacity>
                    {/* end list 4 */}


                    {/* start list 5 */}
                    <TouchableOpacity
                        style={styles.menu}
                        onPress={() => this.props.navigation.navigate('Detail', {
                            title: this.state.data5.title,
                            imageUrl: this.state.data5.imageUrl,
                            location: this.state.data5.location,
                            review: this.state.data5.review,
                            tide: this.state.data5.tide,
                            weather: this.state.data5.weather,
                            wind: this.state.data5.wind,
                            deskripsi: this.state.data5.deskripsi,
                        })}
                    >

                        <Image
                            source={{ uri: this.state.data5.imageUrl }}
                            style={styles.image_prime}
                        />
                        <Text style={styles.title_list}>{this.state.data5.title}</Text>


                        <View style={styles.home_deskripsi}>
                            <Icon name="compass" size={20} color="#1E9BDF" />
                            <Text style={styles.location}>{this.state.data5.location}</Text>
                            <Icon name="star" size={16} color="#E4A942" style={styles.bintang} />
                            <Text style={styles.review}>{this.state.data5.review}</Text>
                        </View>


                        <View style={styles.home_visited}>
                            <Image
                                source={{ uri: this.state.data5.profile1 }}
                                style={styles.img_visited}
                            />

                            <Image
                                source={{ uri: this.state.data5.profile2 }}
                                style={styles.img_visited}
                            />

                            <Image
                                source={{ uri: this.state.data5.profile3 }}
                                style={styles.img_visited}
                            />

                            <Text style={styles.jml_visited}>{this.state.data5.visited}</Text>
                        </View>

                    </TouchableOpacity>
                    {/* end list 5 */}

                </View>
                {/* end list */}

                <View style={{ marginBottom: 50 }}></View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    // start category
    tombolCategory: {
        backgroundColor: '#fff',
        elevation: 1,
        padding: 8,
        flexDirection: 'row',
        height: 50,
        borderRadius: 20,
        marginHorizontal: 5
    },

    nameCategory: {
        marginLeft: 7,
        marginTop: 8,
        fontWeight: 'bold',
    },
    // end category


    // start list
    menu: {
        flexDirection: 'row', backgroundColor: '#fff', borderRadius: 15, marginTop: 20
    },

    image_prime: {
        height: 105, width: 80, borderRadius: 15
    },

    title_list: {
        fontSize: 17, fontWeight: 'bold', margin: 10
    },

    home_deskripsi: {
        flexDirection: 'row', marginTop: 40, marginLeft: -105
    },

    location: {
        color: '#6DB2A9', marginLeft: 5
    },

    bintang: {
        marginTop: 3, marginLeft: 20
    },

    review: {
        color: "#E4A942", marginTop: 1, marginLeft: 5
    },

    home_visited: {
        flexDirection: 'row', marginTop: 70, marginLeft: -152
    },

    img_visited: {
        height: 23, width: 23, borderRadius: 50, marginLeft: -7
    },

    jml_visited: {
        color: '#A5A6A8', marginLeft: 8, marginTop: 3
    }
    // end list
})


export default Home