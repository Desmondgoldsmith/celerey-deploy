import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../../schema";

const SignInForm = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(signInSchema),
  });
  //@ts-expect-error something here
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-sm mx-auto"
    >
      <Input
        {...register("email")}
        type="email"
        placeholder="Email"
        className="w-full"
      />
      <Input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="w-full"
      />
      <Button type="submit" className="w-full">
        Sign in
      </Button>
    </form>
  );
};

export default SignInForm;
