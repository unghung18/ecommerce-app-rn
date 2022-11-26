import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, ImageBackground, Dimensions } from 'react-native';
const SPACING = 10;
const { height } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";

export default function ProductDetail({ route, navigation }) {
    const { detail } = route.params;
    return (
        <>
            <ScrollView>
                <View>
                    <ImageBackground
                        style={{
                            padding: SPACING * 2,
                            height: height / 2.5,
                            padding: SPACING * 2,
                            paddingTop: SPACING * 4,
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                        resizeMode="contain"
                        source={detail.image}
                    >
                        <TouchableOpacity
                            style={{
                                height: SPACING * 4.5,
                                width: SPACING * 4.5,
                                backgroundColor: '#fff',
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: SPACING * 2.5,
                            }}
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons
                                name="arrow-back"
                                size={SPACING * 2.5}
                                color='#666'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                height: SPACING * 4.5,
                                width: SPACING * 4.5,
                                backgroundColor: '#fff',
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: SPACING * 2.5,
                            }}
                        >
                            <Ionicons name="share" size={SPACING * 2.5} color='#666' />
                        </TouchableOpacity>
                    </ImageBackground>
                    <View
                        style={{
                            padding: SPACING * 2,
                            paddingTop: SPACING * 3,
                            marginTop: -SPACING * 3,
                            borderTopLeftRadius: SPACING * 3,
                            borderTopRightRadius: SPACING * 3,
                            backgroundColor: '#fff',
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                marginBottom: SPACING * 3,
                                alignItems: "center",
                            }}
                        >
                            <View style={{ width: "70%" }}>
                                <Text
                                    style={{
                                        fontSize: SPACING * 3,
                                        color: '#000',
                                        fontWeight: "700",
                                    }}
                                >
                                    {detail.name}
                                </Text>
                            </View>
                            <View
                                style={{
                                    padding: SPACING,
                                    paddingHorizontal: SPACING * 3,
                                    backgroundColor: 'yellow',
                                    flexDirection: "row",
                                    borderRadius: SPACING,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {/*   <Ionicons
                                    name="money"
                                    color='#000'
                                    size={SPACING * 1.7}
                                /> */}
                                <Text
                                    style={{
                                        fontSize: SPACING * 1.6,
                                        fontWeight: "600",
                                        marginLeft: SPACING / 2,
                                        color: '#000',
                                    }}
                                >
                                    ${detail.price}
                                </Text>
                            </View>
                        </View>
                        <Text>{detail.cate}</Text>
                        <View>
                            <Text>
                                {detail.description}
                            </Text>
                        </View>
                        {/*  <View
                            style={{ flexDirection: "row", justifyContent: "space-between" }}
                        >
                            <View
                                style={{
                                    padding: SPACING,
                                    paddingHorizontal: SPACING * 2,
                                    backgroundColor: '#fff',
                                    flexDirection: "row",
                                    borderRadius: SPACING,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Ionicons
                                    name="time"
                                    color='#666'
                                    size={SPACING * 1.7}
                                />
                                <Text
                                    style={{
                                        fontSize: SPACING * 1.6,
                                        fontWeight: "600",
                                        marginLeft: SPACING / 2,
                                        color: colors.gray,
                                    }}
                                >
                                    {recipe.time}
                                </Text>
                            </View>
                            <View
                                style={{
                                    padding: SPACING,
                                    paddingHorizontal: SPACING * 2,
                                    backgroundColor: colors.light,
                                    flexDirection: "row",
                                    borderRadius: SPACING,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Ionicons
                                    name="bicycle"
                                    color={colors.gray}
                                    size={SPACING * 1.7}
                                />
                                <Text
                                    style={{
                                        fontSize: SPACING * 1.6,
                                        fontWeight: "600",
                                        marginLeft: SPACING / 2,
                                        color: colors.gray,
                                    }}
                                >
                                    {recipe.del_time}
                                </Text>
                            </View>
                            <View
                                style={{
                                    padding: SPACING,
                                    paddingHorizontal: SPACING * 2,
                                    backgroundColor: colors.light,
                                    flexDirection: "row",
                                    borderRadius: SPACING,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Ionicons
                                    name="restaurant"
                                    color={colors.gray}
                                    size={SPACING * 1.7}
                                />
                                <Text
                                    style={{
                                        fontSize: SPACING * 1.6,
                                        fontWeight: "600",
                                        marginLeft: SPACING / 2,
                                        color: colors.gray,
                                    }}
                                >
                                    {recipe.cooking_time}
                                </Text>
                            </View>
                        </View>
                         <View style={{ marginVertical: SPACING * 3 }}>
                            <Text
                                style={{
                                    fontSize: SPACING * 2,
                                    fontWeight: "700",
                                    color: colors.dark,
                                }}
                            >
                                Ingredients
                            </Text>
                            {recipe.ingredients.map((ingredient) => (
                                <View
                                    style={{
                                        marginVertical: SPACING,
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                    key={ingredient.id}
                                >
                                    <View
                                        style={{
                                            width: SPACING,
                                            height: SPACING,
                                            backgroundColor: colors.light,
                                            borderRadius: SPACING,
                                        }}
                                    />
                                    <Text
                                        style={{
                                            fontSize: SPACING * 1.7,
                                            fontWeight: "600",
                                            color: colors.gray,
                                            marginLeft: SPACING,
                                        }}
                                    >
                                        {ingredient.title}
                                    </Text>
                                </View>
                            ))}
                        </View>
                        <Text
                            style={{
                                fontSize: SPACING * 2,
                                fontWeight: "700",
                                color: colors.dark,
                                marginBottom: SPACING,
                            }}
                        >
                            Description
                        </Text>
                        <Text
                            style={{
                                fontSize: SPACING * 1.7,
                                fontWeight: "500",
                                color: colors.gray,
                            }}
                        >
                            {recipe.description}
                        </Text> */}
                    </View>
                </View>
            </ScrollView>
            <SafeAreaView>
                <View style={{ padding: SPACING * 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Ionicons name='add-circle' size={SPACING * 4}></Ionicons>
                        </TouchableOpacity>
                        <Text style={{ width: 20, alignSelf: 'center' }}>1</Text>
                        <TouchableOpacity>
                            <Ionicons name='remove-circle' size={SPACING * 4}></Ionicons>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={{
                            padding: SPACING * 2,
                            backgroundColor: '#000',
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: SPACING * 2,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: SPACING * 2,
                                color: '#fff',
                                fontWeight: "700",
                            }}
                        >
                            Choose this for
                        </Text>
                        <Text
                            style={{
                                fontSize: SPACING * 2,
                                color: 'yellow',
                                fontWeight: "700",
                                marginLeft: SPACING / 2,
                            }}
                        >
                            $ {detail.price}
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
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