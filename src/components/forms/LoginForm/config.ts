/* Core */
import * as yup from 'yup';

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'минимальная длина — ${min} символов';
// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'максимальная длина — ${max} символов';

interface IFormLogin {
    email: string,
    password: string,
}

export const loginSchema: yup.SchemaOf<IFormLogin> = yup.object().shape({
    email: yup
        .string()
        .email('почта должна быть настоящей')
        .required('*'),
    password: yup
        .string()
        .min(8, tooShortMessage)
        .max(64, tooLongMessage)
        .required('*'),
});
