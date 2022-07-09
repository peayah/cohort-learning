import CohortList from "../components/cohorts/CohortList"
import Layout from "../components/layout/Layout"
import Link from "next/link"

const TEST_ARRAY = [
    {
    id: "c1",
    title: "JAM Stack Cohort",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    day: "Monday",
    time: "6pm",
    address: "123 Main Street, CA 12345 Town",
    description: "This is a JAM cohort"
    }, {
        id: "c2",
        title: "JS Cohort",
        image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
        day: "Tuesday",
        time: "6pm",
        address: "123 Main Street, CA 12345 Town",
        description: "This is a JS cohort"
    }, {
        id: "cc3",
        title: "HTML Cohort",
        image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
        day: "Wednesday",
        time: "6pm",
        address: "123 Main Street, CA 12345 Town",
        description: "This is a HTML cohort"
    }, {
        id: "c4",
        title: "API Cohort",
        image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
        day: "Thursday",
        time: "6pm",
        address: "123 Main Street, CA 12345 Town",
        description: "This is a API cohort"
    }
];

function Homepage() {
    <Layout>
    return <CohortList cohorts={TEST_ARRAY}/>
    </Layout>
    }       

export default Homepage;