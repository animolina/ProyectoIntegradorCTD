import Link from '../components/Link';
import FormField from '../components/FormField';
import Button from '../components/Button';
import styles from '../styles/auth.module.css';
import { validateEmail } from '../utils';
import { useState } from 'react';

const nameFieldConfig = {
	fieldType: 'input',
	id: 'name',
	label: 'Nombre',
	type: 'text',
};

const lastNameFieldConfig = {
	fieldType: 'input',
	id: 'lastName',
	label: 'Apellido',
	type: 'text',
};

const emailFieldConfig = {
	fieldType: 'input',
	id: 'email',
	label: 'Correo electrónico',
	type: 'email',
};

const passwordFieldConfig = {
	fieldType: 'input',
	id: 'password',
	label: 'Contraseña',
	type: 'password',
};

const passwordConfirmFieldConfig = {
	fieldType: 'input',
	id: 'password-confirm',
	label: 'Confirmar contraseña',
	type: 'password',
};

export default function SignUp() {
	const [nameError, setNameError] = useState();
	const [lastNameError, setLastNameError] = useState();
	const [emailError, setEmailError] = useState();
	const [passwordError, setPasswordError] = useState();
	const [passwordConfirmError, setPasswordConfirmError] = useState();
	const [isFormValid, setIsFormValid] = useState();

	const submitSignUpForm = () => {
		const name = document.querySelector('#name');
		const lastName = document.querySelector('#lastName');
		const email = document.querySelector('#email');
		const password = document.querySelector('#password');
		const passwordConfirm = document.querySelector('#password-confirm');

		validateEmptyField('name', name);
		validateEmptyField('lastName', lastName);
		validateEmptyField('email', email);
		validateEmptyField('password', password);
		validateEmptyField('password-confirm', passwordConfirm);

		if (!validateEmail(email.value)) {
			setEmailError('Ingresa un correo electrónico válido');
		} else {
			setEmailError(null);
			setIsFormValid(true);
		}

		if (password.value.length <= 6) {
			setPasswordError('La contraseña debe tener más de 6 caracteres');
			setIsFormValid(false);
		} else {
			setPasswordError(null);
			setIsFormValid(true);
		}

		if (passwordConfirm.value !== password.value) {
			setPasswordError('Las contraseñas deben coincidir');
			setIsFormValid(false);
		} else {
			setPasswordError(null);
			setIsFormValid(true);
		}

		if (isFormValid) {
			window.location.href = '/';
		}
	};

	const validateEmptyField = (fieldName, field) => {
		if (!field.value || !field.value.trim()) {
			setFieldError(fieldName, 'Este campo es requerido');
			setIsFormValid(false);
		} else {
			setFieldError(fieldName, null);
			setIsFormValid(true);
		}
	};

	const setFieldError = (fieldName, error) => {
		switch (fieldName) {
			case 'name':
				setNameError(error);
				break;
			case 'lastName':
				setLastNameError(error);
				break;
			case 'email':
				setEmailError(error);
				break;
			case 'password':
				setPasswordError(error);
				break;
			case 'passwordConfirm':
				setPasswordConfirmError(error);
				break;
			default:
				break;
		}
	};

	return (
		<div className={styles.mainContainer}>
			<h1 className={styles.title}>Crear Cuenta</h1>
			<form className={styles.formContainer}>
				{/* Name and LastName */}
				<div className={styles.rowContainer}>
					<FormField config={nameFieldConfig} error={nameError}></FormField>
					<FormField
						config={lastNameFieldConfig}
						error={lastNameError}
					></FormField>
				</div>

				{/* Email */}
				<FormField config={emailFieldConfig} error={emailError}></FormField>

				{/* Password */}
				<FormField
					config={passwordFieldConfig}
					error={passwordError}
				></FormField>

				{/* Confirm Password */}
				<FormField
					config={passwordConfirmFieldConfig}
					error={passwordConfirmError}
				></FormField>
			</form>

			<Button handleClick={submitSignUpForm} innerText='Crear Cuenta'></Button>

			<span>
				¿Ya tienes una cuenta?{' '}
				<Link path={'login'} text={'Iniciar Sesión'}></Link>
			</span>
		</div>
	);
}
