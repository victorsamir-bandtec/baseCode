'use client';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import FormInput from '@/components/formInput';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { useUserStore } from '@/store/users/users';
import { yupResolver } from '@hookform/resolvers/yup';
import Cookie from 'js-cookie';
import * as Yup from 'yup';

export default function Home() {
  const router = useRouter();
  const {
    actions: { addUser }
  } = useUserStore();

  const Schema = Yup.object().shape({
    username: Yup.string().required('Por favor informe seu username')
  });

  type FormProps = Yup.InferType<typeof Schema>;

  const form = useForm<FormProps>({
    resolver: yupResolver(Schema)
  });

  const onSubmit: SubmitHandler<FormProps> = (data) => {
    console.log(data);

    const payload = {
      id: '12345',
      name: data.username
    };

    addUser(payload);

    Cookie.set('auth_token', 'sadfsafsdkfksadfksakfsadkfskfsaddfak');
    router.push('/dashboard');
  };

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Login</CardTitle>

        <CardDescription>
          Deseja fazer login em nosso aplicativo
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-3"
          >
            <FormInput name="username" label="User" placeholder="Digite aqui" />

            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
