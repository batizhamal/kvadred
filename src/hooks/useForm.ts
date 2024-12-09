import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { object, Schema, ValidationError } from 'yup';

interface Props<T> {
	values: T;
	schema?: Schema;
	onSubmit?: () => void;
}

type FormErrors<T> = {
	[key in keyof T]?: string;
};

type Touched<T> = {
	[key in keyof T]?: boolean;
};

interface UseForm<T> extends Pick<Props<T>, 'values'> {
	pending: boolean;
	errors: FormErrors<T>;
	setPending: Dispatch<SetStateAction<boolean>>;
	onChange: (value: T[keyof T], key: keyof T) => void;
	validate: (schema?: Schema) => boolean;
	setValues: (values: Partial<T>) => void;
	setErrorMessage: (message: FormErrors<T>) => void;
	resetForm: () => void;
}

export function useForm<T extends Record<string, any>>(props: Props<T>): UseForm<T> {
	const { values: propsValues, schema, onSubmit } = props;
	const [pending, setPending] = useState<boolean>(false);
	const [values, setValues] = useState<T>(propsValues);
	const [errors, setErrors] = useState<FormErrors<T>>({});
	const [touched, setTouched] = useState<Touched<T>>({});

	const updateValues = useCallback((partialValues: Partial<T>) => {
		setValues((prevValues) => ({
			...prevValues,
			...partialValues,
		}));
		setTouched((prevTouched) => ({
			...prevTouched,
			...Object.keys(partialValues).reduce((acc, key) => {
				acc[key as keyof T] = true;
				return acc;
			}, {} as Touched<T>),
		}));
	}, []);

	const resetForm = useCallback(() => {
		setValues(propsValues);
		setErrors({});
		setTouched({});
	}, [propsValues]);

	const updateErrors = useCallback((message: FormErrors<T>) => {
		setErrors((prevValues) => ({
			...prevValues,
			...message,
		}));
	}, []);

	const onChange = useCallback(
		(value: T[keyof T], key: keyof T) => {
			if (!!value && errors[key]) {
				setErrors((prevErrors) => ({
					...prevErrors,
					[key]: undefined,
				}));
			}

			setValues((prevValues) => ({
				...prevValues,
				[key]: value,
			}));

			setTouched((prevTouched) => ({
				...prevTouched,
				[key]: true,
			}));
		},
		[errors],
	);

	const validate = useCallback(
		(schemaToValidate?: Schema) => {
			try {
				const touchedValues = Object.keys(values).reduce((acc, key) => {
					if (touched[key as keyof T]) {
						acc[key as keyof T] = values[key as keyof T];
					}
					return acc;
				}, {} as Partial<T>);

				(schema || schemaToValidate || object().shape({})).validateSync(
					touchedValues,
					{
						abortEarly: false,
					},
				);

				return true;
			} catch (e) {
				const tempErrors: FormErrors<T> = {};

				(e as ValidationError).inner.forEach((error: ValidationError) => {
					if (touched[error.path as keyof T]) {
						tempErrors[error.path as keyof T] = error.errors[0];
					}
				});

				setErrors(tempErrors);

				return false;
			}
		},
		[schema, values],
	);

	useEffect(() => {
		const keyDownHandler = (event: KeyboardEvent) => {
			if (!!onSubmit && event.key === 'Enter') {
				event.preventDefault();
				onSubmit();
			}
		};

		document.addEventListener('keydown', keyDownHandler);

		return () => {
			document.removeEventListener('keydown', keyDownHandler);
		};
	}, [onSubmit]);

	return {
		pending,
		values,
		errors,
		onChange,
		setPending,
		setErrorMessage: updateErrors,
		validate,
		setValues: updateValues,
		resetForm,
	};
}
