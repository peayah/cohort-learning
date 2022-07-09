import classes from './MainNavigation.module.css';
import Link from "next/link"

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Tech Cohorts</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Cohorts</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Cohort</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
