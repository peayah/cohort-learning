import NewCohortForm from "../../components/cohorts/NewCohortForm";
import { useRouter} from "next/router";

function NewCohortPage() {
const router = useRouter();

    async function addCohortHandler(enteredCohortData) {
        const response  = await fetch('/api/new-meetup', { 
            method: "POST",
            body: JSON.stringify(enteredCohortData),
            headers: {
                "Content-Type":"application/json"
            }
        });
        const data = await response.json();
        console.log(data)
        router.push("/")
    }
    return <NewCohortForm onAddCohort={addCohortHandler}/>
}
export default NewCohortPage;