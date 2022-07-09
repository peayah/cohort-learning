import CohortDetail  from "../../components/cohorts/CohortDetail";

function CohortDetails() {
    return (
        <CohortDetail
            image= "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" 
            title="JS Cohort"
            day="Tuesday"
            time="6pm"
            address="23 Main Street, CA 12345 Town"
            description="This is a JS cohort."
            />
    );
}

export async function getStaticPaths() {
    return{
        fallback:false,
        paths: [
            {
                parems: {
                    cohortId: "c1"
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    // fetch data for single cohort

    return {
        props: {
            cohortData: {
                image: "",
                id: "",
                title: "",
                day: "",
                time: "",
                address: "",
                description: ""
            

            }
        }
    }
}


export default CohortDetails