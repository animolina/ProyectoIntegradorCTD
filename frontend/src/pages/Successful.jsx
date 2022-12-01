import styles from '../styles/successfulReservation.module.css';
import iconSuccess from '../assets/icons/iconSuccess.svg';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

export default function Successful({ type }) {
	const navigate = useNavigate();

	return (
		<div className={styles.successfulReservation}>
			<div className={styles.modal}>
				<img
					src={iconSuccess}
					className={styles.iconSuccess}
					alt='Ícono de chequeado'
				/>
				<span className={styles.textGratitude}>¡Muchas gracias!</span>
				<span className={styles.textConfirm}>
					Tu{' '}
					{type === 'property'
						? 'propiedad se ha creado '
						: 'reserva se ha realizado '}
					con éxito
				</span>

				<Button
					handleClick={() => navigate('/')}
					type={'outline'}
					innerText={'ok'}
				/>
			</div>
		</div>
	);
}