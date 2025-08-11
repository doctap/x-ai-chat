import Form from 'next/form';
import { Label } from './ui/label';
import { Input } from './ui/input';

export const SubscriptionForm = ({
  action,
  children,
}: {
  action: NonNullable<
    string | ((formData: FormData) => void | Promise<void>) | undefined
  >;
  children: React.ReactNode;
}) => {
  return (
    <Form action={action} className="flex flex-col gap-4 px-4 sm:px-16">
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="card-number"
          className="text-zinc-600 font-normal dark:text-zinc-400"
        >
          Card Number
        </Label>

        <Input
          id="card-number"
          name="card-number"
          className="bg-muted text-md md:text-sm"
          type="number"
          placeholder="0000 0000 0000 0000"
          required
          autoFocus
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label
          htmlFor="expiration-date"
          className="text-zinc-600 font-normal dark:text-zinc-400"
        >
          Expiration Date
        </Label>

        <Input
          id="expiration-date"
          name="expiration-date"
          className="bg-muted text-md md:text-sm"
          type="number"
          placeholder="00/00"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label
          htmlFor="cvv"
          className="text-zinc-600 font-normal dark:text-zinc-400"
        >
          CVV
        </Label>

        <Input
          id="cvv"
          name="cvv"
          className="bg-muted text-md md:text-sm"
          type="number"
          required
        />
      </div>

      {children}
    </Form>
  );
};
