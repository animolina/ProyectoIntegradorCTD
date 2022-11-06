import styles from '../styles/productDetailsHeader.module.css';
import backArrow from '../assets/imgs/backArrow.png';

export default function ProductDetailsHeader() {
	return (
		<header className={styles.productDetailsHeader}>
			<div className={styles.container}>
				<p className={styles.productDetailsCategory}>HOTEL</p>
				<h2 className={styles.productDetailsTitle}>Hermitage Hotel</h2>
			</div>
			<img className={styles.backArrow} src={backArrow} alt='' />
		</header>
	);
}