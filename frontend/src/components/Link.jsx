import styles from '../styles/link.module.css';

export default function CustomLink({ path, text, openOnNewTab }) {
	return (
		<a
			href={path}
			className={styles.link}
			target={openOnNewTab ? '_blank' : '_parent'}
			rel='noreferrer'
		>
			{text}
		</a>
	);
}
