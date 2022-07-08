import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewCohortForm.module.css';

function NewCohortForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const timeInputRef = useRef();
    const dayInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredDay = dayInputRef.current.value;
        const enteredTime = timeInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const cohortData = {
            title: enteredTitle,
            image: enteredImage,
            day: enteredDay,
            time: enteredTime,
            address: enteredAddress,
            description: enteredDescription,
        };

        props.onAddCohortp(cohortData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Cohort Title</label>
                    <input type='text' required id='title' ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Cohort Image</label>
                    <input type='url' required id='image' ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='day'>Day</label>
                    <input type='text' required id='day' ref={dayInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='time'>Address</label>
                    <input type='text' required id='time' ref={timeInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea
                    id='description'
                    required
                    rows='5'
                    ref={descriptionInputRef}
                    ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Cohort</button>
                </div>
            </form>
        </Card>
    );
}

export default NewCohortForm;
