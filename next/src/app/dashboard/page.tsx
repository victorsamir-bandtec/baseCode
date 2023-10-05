'use client';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { useUserStore } from '@/store/users/users';
import Cookie from 'js-cookie';

export default function Dashboard() {
  const router = useRouter();

  const {
    state: { user }
  } = useUserStore();

  const handleLogout = () => {
    Cookie.remove('auth_token');
    router.push('/');
  };

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Logout</CardTitle>

        <CardDescription>
          {user.name} Deseja sair do nosso aplicativo
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-center">
        <Button variant="destructive" className="w-52" onClick={handleLogout}>
          Logout
        </Button>
      </CardFooter>
    </Card>
  );
}
