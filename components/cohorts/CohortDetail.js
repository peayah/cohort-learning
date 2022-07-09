import { Fragment } from "react";
import classes from "./CohortDetail.module.css"

function CohortDetail(props) {
    return (
        <section className={classes.detail}>
            <img 
            src={props.image} 
            alt={props.title}
            />
            <h1>{props.title}</h1>
            <p>{props.day}</p>
            <p>{props.time}</p>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
    );
}

export default CohortDetail;
