import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup';
import Button from '../../components/Button';
import InputControled from '../../components/Input/Controled';

// import { Container } from './styles';

type FormInputs = {
  username: string;
  password: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Por favor informe seu username'),
    password: Yup.string().required('Por favor informe sua senha'),
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log(data);

    // if (response.success) {
    //   toast.success(response.message);
    //   setTimeout(() => {
    //     navigate('/home');
    //   }, 1000);
    //   return;
    // }

    toast.error('error');
  };

  return (
    <>
      <div className="h-full grid place-items-center">
        <div className="flex h-[80%] w-[90%] rounded-lg shadow-lg">
          <div className="w-full sm:w-[30%] flex-col justify-center p-6 rounded shadow-md bg-zinc-50">
            <h1 className="text-4xl mb-1 text-violet-900 font-semibold">
              Máquina de Posts
            </h1>

            <h4 className="text-sm mb-2 text-zinc-600">
              Faça login ou cadastre-se para obter acesso a nossa plataforma
            </h4>

            <form className="h-[65%] flex flex-col justify-center space-y-3 mb-2">
              <h2 className="text-2xl mb-2 font-semibold">Login</h2>

              <InputControled
                name="username"
                id="username"
                type="text"
                label="Username"
                placeholder="Digite seu nome de usuario"
                control={control}
                errorMsg={errors.username?.message}
              />

              <InputControled
                password
                name="password"
                id="password"
                label="Senha"
                placeholder="Digite a sua senha"
                control={control}
                errorMsg={errors.password?.message}
              />

              <Button
                label="Entrar"
                loading={isSubmitting}
                onClick={handleSubmit(onSubmit)}
              />
            </form>

            <p className="font-semibold">
              Ainda não possui cadastro ?{' '}
              <span
                onClick={() => navigate('/register')}
                className="text-blue-800 font-semibold cursor-pointer"
              >
                Cadastre-se aqui
              </span>
            </p>
          </div>
          <div className="flex-1 bg-cover bg-login"></div>
        </div>
      </div>

      <ToastContainer theme="dark" />
    </>
  );
};

export default Login;
