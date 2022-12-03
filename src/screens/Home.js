import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import categories from "../config/data";
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width } = Dimensions.get("window");

const SPACING = 10;

const ITEM_WIDTH = width / 2 - SPACING * 3;

const Home = ({ navigation }) => {
    const [user, setUser] = useState('');
    const [textSearch, settextSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState(0);

    const getUserData = async () => {
        let curUser = await AsyncStorage.getItem('curUser');
        curUser = JSON.parse(curUser);
        setUser(curUser);
    };

    const onSearch = () => {
        if (textSearch.trim() !== '') {
            navigation.navigate('Search', { text: textSearch })
        }
    }
    useEffect(() => {
        getUserData();
    }, []);
    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <ScrollView>
                <View style={{ paddingHorizontal: SPACING * 2, paddingVertical: SPACING * 4 }}>
                    <View
                        style={{ flexDirection: "row", justifyContent: "space-between" }}
                    >
                        <View style={{}}>

                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: "400",
                                    color: '#000',
                                }}
                            >
                                Good Morning
                            </Text>
                            <Text
                                style={{
                                    fontSize: 24,
                                    fontWeight: "600",
                                    color: '#000',
                                }}
                            >
                                {user && user.name}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 13.33,
                                    fontWeight: "400",
                                    color: '#000',
                                }}
                            >
                                <Ionicons name="location" color='rgb(120,120,120)' size={SPACING * 2.7} />
                                Sanfancisco, CA

                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image
                                style={{
                                    width: SPACING * 7,
                                    height: SPACING * 7,
                                    borderRadius: SPACING,
                                    marginRight: SPACING,
                                }}
                                source={{ uri: "https://i.pravatar.cc/300" }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            backgroundColor: '#F4F1F9',
                            marginVertical: SPACING * 2,
                            paddingVertical: SPACING,
                            paddingHorizontal: SPACING * 2.5,
                            borderRadius: SPACING * 3,
                        }}
                    >
                        <TextInput
                            placeholder="Search"
                            placeholderTextColor='rgb(120,120,120)'
                            style={{
                                color: 'rgb(120,120,120)',
                                fontSize: SPACING * 1.5,
                                marginRight: SPACING,
                                flex: 1
                            }}
                            onChangeText={settextSearch}
                            value={textSearch}
                            onBlur={onSearch}
                        />
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={onSearch}>
                            <Ionicons name="search" color='#000' size={SPACING * 2.5} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="options" color='#000' size={SPACING * 2.5} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {categories.map((category, index) => (
                            <TouchableOpacity
                                style={{ marginRight: SPACING }}
                                key={index}
                                onPress={() => setActiveCategory(index)}
                            >
                                <Text
                                    style={[
                                        {
                                            paddingVertical: 10,
                                            paddingHorizontal: 20,
                                            borderRadius: 25,
                                            borderWidth: 2,
                                            borderColor: '#D9D9D9',
                                            fontSize: 14
                                        },
                                        activeCategory === index && {
                                            color: '#000',
                                            fontWeight: "700",
                                            fontSize: SPACING * 1.8,
                                        },
                                    ]}
                                >
                                    {category.title}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <View style={{ paddingVertical: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10 }}>
                            <Text style={{ fontSize: 24 }}>Top Products</Text>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 14 }}>Show all</Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                flexWrap: "wrap",
                                justifyContent: "space-between",
                                marginVertical: SPACING * 2,
                            }}
                        >
                            {categories[activeCategory].recipes.map((item, i) => (
                                <TouchableOpacity
                                    style={[
                                        {
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            width: ITEM_WIDTH,
                                            paddingHorizontal: 15,
                                            borderRadius: SPACING,
                                            position: 'relative',
                                        },
                                        i % 2 !== 0 && {
                                            marginTop: SPACING * 4,
                                            backgroundColor: '#FDE6E6'
                                        },
                                        i % 2 === 0 && {
                                            marginBottom: SPACING * 4,
                                            backgroundColor: '#F4F1F9'
                                        },
                                    ]}
                                    key={item.id}
                                    onPress={() => navigation.navigate('ProductDetail', { item: item })}
                                >
                                    <Image
                                        style={{
                                            width: "90%",
                                            height: 120,
                                            borderRadius: SPACING * 2,
                                            resizeMode: 'contain',
                                            alignItems: 'center',
                                            position: 'relative',
                                            top: -30
                                        }}
                                        source={item.image}
                                    />
                                    <View style={{
                                        position: 'relative',
                                        top: -15
                                    }}>
                                        <Text
                                            style={{
                                                fontSize: SPACING * 2,
                                                fontWeight: "700",
                                            }}
                                        >
                                            {item.name}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: SPACING * 1.5,
                                                color: 'rgb(120,120,120)',
                                                marginVertical: SPACING / 2,
                                            }}
                                        >
                                            {item.cate}
                                        </Text>
                                        <Text style={{ fontSize: SPACING * 2, fontWeight: "700" }}>
                                            $ {item.price}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({});