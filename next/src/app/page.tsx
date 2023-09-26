'use client';
import { useRouter } from 'next/navigation';

import { ButtonTheme } from '@/components/buttonTheme';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import Cookie from 'js-cookie';

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    Cookie.set('auth_token', 'sadfsafsdkfksadfksakfsadkfskfsaddfak');
    router.push('/dashboard');
  };

  return (
    <main className="flex flex-col items-center h-[100vh]">
      <div className="flex  w-full h-[40%] justify-end p-12">
        <ButtonTheme />
      </div>

      <Card className="w-96">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Deseja fazer login em nosso aplicativo
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex justify-center">
          <Button className="w-52" onClick={handleLogin}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
