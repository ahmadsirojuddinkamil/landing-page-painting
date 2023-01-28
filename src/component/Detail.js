import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <ScrollView style={{ padding: 5, backgroundColor: '#F5F6FB', flex: 1 }} showsVerticalScrollIndicator={false}>

                {/* start image info */}
                <View>

                    <ImageBackground
                        source={{ uri: this.props.route.params.imageUrl }}
                        style={styles.image_prime}
                        resizeMode="cover"
                    />


                    <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>

                        <View>
                            <TouchableOpacity onPress={() => this.props.navigation.pop()} style={styles.icon_navigasi}>
                                <Icon name="arrow-left" size={15} color="#1E9BDF" />
                            </TouchableOpacity>
                        </View>

                        <View >
                            <TouchableOpacity style={styles.icon_navigasi}>
                                <Icon name="heart" size={15} color="#1E9BDF" />
                            </TouchableOpacity>
                        </View>


                    </View>


                    <View style={{ padding: 10, marginTop: 150 }}>

                        <View style={{ flexDirection: 'row', marginHorizontal: 45 }}>
                            <Icon name="compass" size={22} color="#fff" />

                            <Text style={styles.location}>
                                {this.props.route.params.location}
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-around' }}>

                            <Text style={styles.title}>
                                {this.props.route.params.title}
                            </Text>

                            <View style={styles.bintang}>
                                <Icon name="star" size={12} color="#fff" />

                                <Text style={styles.review}>{this.props.route.params.review}</Text>
                            </View>

                        </View>
                    </View>

                </View>
                {/* end image info */}



                {/* start deskripsi */}
                <View style={{ padding: 20 }}>

                    {/* start navigasi */}
                    <View style={styles.info_utils}>

                        <TouchableOpacity style={styles.navigasi}>
                            <Text style={{ color: '#585F65' }}>Overview</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.navigasi}>
                            <Text style={{ color: '#585F65' }}>Reviews</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.navigasi}>
                            <Text style={{ color: '#585F65' }}>Friends</Text>
                        </TouchableOpacity>

                    </View>
                    {/* end navigasi */}



                    {/* start info location */}
                    <View style={styles.info_location}>

                        <Icon name="sort" size={20} color="#1E9BDF" />
                        <View>
                            <Text style={styles.location_info}>Tide</Text>

                            <Text style={styles.text_info}>
                                {this.props.route.params.tide} ft
                            </Text>
                        </View>

                        <Icon name="sun" size={20} color="#1E9BDF" />
                        <View>
                            <Text style={styles.location_info}>Weather</Text>

                            <Text style={styles.text_info}>
                                {this.props.route.params.weather} Sun
                            </Text>
                        </View>

                        <Icon name="wind" size={20} color="#1E9BDF" />
                        <View>
                            <Text style={styles.location_info}>Wind</Text>

                            <Text style={styles.text_info}>
                                {this.props.route.params.wind} kn.
                            </Text>
                        </View>

                    </View>

                    <View style={{ marginTop: 20, alignItems: 'stretch' }}>
                        <Text>
                            {this.props.route.params.deskripsi}
                        </Text>
                    </View>
                    {/* start info location */}

                </View>
                {/* start deskripsi */}




                {/* start action */}
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 12 }}>Take me there</Text>
                </TouchableOpacity>
                {/* end action */}




            </ScrollView>
        );
    }
}

export default Detail;


const styles = StyleSheet.create({
    image_prime: {
        height: 300, width: '100%', position: 'absolute'
    },

    icon_navigasi: {
        backgroundColor: '#fff', padding: 8, borderRadius: 10, justifyContent: 'center'
    },

    location: {
        color: '#fff', fontSize: 12, marginTop: 2, marginLeft: 5, fontWeight: 'bold'
    },

    title: {
        fontWeight: 'bold', fontSize: 28, color: '#fff'
    },

    bintang: {
        marginRight: 5, padding: 5, height: 26, width: 45, backgroundColor: 20, flexDirection: 'row', backgroundColor: '#73706B', alignItems: 'center', borderRadius: 10, marginTop: 6
    },

    review: {
        color: '#fff', fontSize: 12, fontWeight: 'bold', marginLeft: 4, marginTop: -1
    },

    info_utils: {
        flexDirection: 'row', marginTop: 15, justifyContent: 'space-around'
    },

    navigasi: {
        padding: 15, backgroundColor: '#fff', borderRadius: 15, elevation: 1
    },

    info_location: {
        flexDirection: 'row', justifyContent: 'space-around', marginTop: 30
    },

    location_info: {
        marginLeft: -40, marginTop: -10, fontSize: 13, color: '#73706B'
    },

    text_info: {
        marginLeft: -40, fontWeight: 'bold'
    },

    button: {
        backgroundColor: '#1E9BDF', marginHorizontal: 20, alignItems: 'center', padding: 15, borderRadius: 18, marginVertical: 30, elevation: 3
    }
})