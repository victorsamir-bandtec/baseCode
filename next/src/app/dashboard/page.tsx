'use client';
import { useRouter } from 'next/navigation';

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

export default function Dashboard() {
  const router = useRouter();
  const handleLogout = () => {
    Cookie.remove('auth_token');
    router.push('/');
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Logout</CardTitle>
          <CardDescription>Deseja sair do nosso aplicativo</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="destructive" className="w-52" onClick={handleLogout}>
            Logout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
