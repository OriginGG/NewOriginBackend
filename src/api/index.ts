import { ApolloServer, gql } from 'apollo-server'
import GraphQLJSON from 'graphql-type-json';
import axios from 'axios'
import { buildFederatedSchema } from '@apollo/federation';
import config from '../../config/api';

const { apiPort } = config

const typeDefs = gql`
    scalar JSON
    extend type Query {
        getYouTubeChannels(id: String!): JSON 
    }
`;

const resolvers = {
    Query: {
        async getYouTubeChannels(_, args) {
            const url = `https://www.googleapis.com/youtube/v3/channels?part=id%2Csnippet%2Cstatistics%2CcontentDetails%2CtopicDetails&id=${args.channel}&key=${process.env.YOUTUBE_API_KEY}`;
            const td = await axios.get(url);
            if (td.data.items.length > 0) {
                const channel_id = td.data.items[0].id
                const url2 = `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${channel_id}&part=snippet,id&order=date&maxResults=20&type=video`;
                const td2 = await axios.get(url2);
                return { success: true, channel_info: td.data, video_info: td2.data }
            } else {
                return {}
            }
        }
    },
    JSON: GraphQLJSON
};

const server = new ApolloServer({
    schema: buildFederatedSchema([{ typeDefs, resolvers }])
});


server.listen(apiPort).then(({ url }) => {
    console.log(`:rocket: Server ready at ${url}`);
});