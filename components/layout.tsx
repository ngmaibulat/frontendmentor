import styles from './layout.module.css';
import Link from 'next/link';

type Props = {
    // name: string;
    // country: string;
    children: React.ReactNode; // 👈️ added type for children
};

const Layout = (props: Props) => {
    return (
        <div className={styles.container}>
            <div>
            <Link href="/">Home</Link>
            </div>
            {props.children}
        </div>
    );
};

export default Layout;
