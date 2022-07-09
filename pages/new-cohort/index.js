import NewCohortForm from "../../components/cohorts/NewCohortForm";

function NewCohortPage() {
    function addCohortHandler(enteredCohortData) {
        console.log(enteredCohortData)
    }
        return <NewCohortForm onAddCohort={addCohortHandler}/>
    }
export default NewCohortPage;