import { ApolloServer, gql } from 'apollo-server'
import GraphQLJSON from 'graphql-type-json';
import axios from 'axios'
import config from '../config/index';
import { buildFederatedSchema } from '@apollo/federation';

const typeDefs = gql`
    scalar JSON
    extend type OrganisationAccount @key(fields: "nodeId") {
        nodeId: ID! @external
        specialField: String!
    }
    extend type Query {
        getYouTubeChannels(id: String!): YouTubeResponse
    }
    type YouTubeResponse {

    }
`;

const resolvers = {
    // example of extending postgraphile defined type
    OrganisationAccount: {
        specialField: () => 'phil'
    },
    // example of adding new top level queries
    Query: {
        async getYouTubeChannels(_, args) {
            const url = `https://www.googleapis.com/youtube/v3/channels?part=id%2Csnippet%2Cstatistics%2CcontentDetails%2CtopicDetails&id=${args.channel}&key=${YOUTUBE_API_KEY}`;
            const td = await axios.get(url);
            if (td.data.items.length > 0) {
                const channel_id = td.data.items[0].id
                const url2 = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${channel_id}&part=snippet,id&order=date&maxResults=20&type=video`;
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


server.listen(config.api.port).then(({ url }) => {
    console.log(`:rocket: Server ready at ${url}`);
});