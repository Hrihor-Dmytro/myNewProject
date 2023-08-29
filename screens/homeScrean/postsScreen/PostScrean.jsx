import { View, Text, Image } from "react-native";

import { userPosts } from "./PostsItem";

export const PostScrean = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {userPosts.map(({ id, title, comments, likes, image }) => {
        return (
          <View key={id}>
            <Text>{title}</Text>
            <Text>{comments}</Text>
            <Text>{likes}</Text>
            <Image source={image} />
          </View>
        );
      })}
    </View>
  );
};
