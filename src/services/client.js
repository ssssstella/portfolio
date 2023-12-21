import {createClient} from "@sanity/client";

export default createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: process.env.REACT_APP_SANITY_DATASET,
    apiVersion: 'v2022-03-07',
    useCdn: false
})