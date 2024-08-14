import { Link, useRouteError } from "react-router-dom";
import styles from "./style.module.css";

interface IRouterError {
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.errorPage}>
      {/* <NotFoundIcon className={styles.icon} /> */}
      <h1>Oops! Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p className={styles.errorMessage}>
        <i>
          {(error as IRouterError)?.statusText ||
            (error as IRouterError)?.message}
        </i>
      </p>
      <Link to="/" className={styles.homeLink}>
        Go back to the homepage
      </Link>
    </div>
  );
}
