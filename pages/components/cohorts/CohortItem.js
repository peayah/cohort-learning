import Card from '../ui/Card';
import classes from './CohortItem.module.css';

function CohortItem(props) {
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <p>day: {props.day} time: {props.time} </p>
                    <address>{props.address}</address>
                </div>
                <div className={classes.actions}>
                    <button>Show Details</button>
                </div>
            </Card>
        </li>
    );
}

export default CohortItem;
