import CohortItem from './CohortItem';
import classes from './CohortList.module.css';

function CohortList(props) {
    return (<ul className= {
            classes.list
        }
        > {
            props.cohorts.map((cohort)=> (<CohortItem 
                    key = { cohort.id }
                    id = { cohort.id }
                    image = { cohort.image }
                    title = { cohort.title }
                    day = { cohort.day }
                    time = { cohort.time }
                    address = { cohort.address }
                    />))
        }

        </ul>);
}

export default CohortList;