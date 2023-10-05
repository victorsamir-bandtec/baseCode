import { fetchWrapper } from '@/functions/fetch';

type AdviceRequestProps = {
  slip: {
    id: number;
    advice: string;
  };
};
export default async function UsersPage() {
  const { slip } = await fetchWrapper<AdviceRequestProps>('/advice');

  return (
    <>
      <h1>Users</h1>

      <div>{slip.advice}</div>
    </>
  );
}
