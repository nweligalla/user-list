import styles from '../../styles/View.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: { users: data }
    };
}

const TestAll = ({ users }) => {
    return (
        <div>
            <h1>All Users /</h1>
            {
                users.map(user => (
                    <Link key={user.id} href={`/pages/${user.id}`}>
                        <a className={styles.single}>
                            <h3>{user.name}</h3>
                        </a>
                    </Link>
                ))
            }
        </div>
    );
}

export default TestAll;