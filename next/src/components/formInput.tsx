import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from './ui/form';
import { Input, InputProps } from './ui/input';

type FormInputProps = {
  name: string;
  label?: string;
} & InputProps;

export default function FormInput({ label, name, ...rest }: FormInputProps) {
  const { control } = useFormContext();

  return (
    <FormField
      defaultValue=""
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="h-24">
          <FormLabel>{label}</FormLabel>

          <FormControl>
            <Input {...rest} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
