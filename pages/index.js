import styles from './index.module.css';
import { Router } from 'next/router';

export default function Home() {
  return (
    <div className={styles.container}>
        <h1>This is my homepage</h1>
    </div>
  )
}

// Home.getInitialProps = (context) => {
// 	const country = context.query.country || 'us';

// 	process.browser ?
// 		Router.replace('/[country]',`${country}`) :
// 		context.res.writeHead(302, {location : `${country}`});

// 	context.res.end();
// }