import { useForm } from "react-hook-form";
import { ErrorMessage } from "../Task2";
import InputPredefined from "./InputPredefined";
import Textarea from "./Textarea";
import { UserFormWrapper } from "../Task2/styling/userForm-styling";
import Input from "./Input";

const UserFormHook = () => {
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset({ name: "", email: "", bio: "", gender: "", terms: "" });
  };

  const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;

  return (
    <UserFormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("name", { required: true, maxLength: 20 })}
          hasError={errors.name}
          type="text"
        />
        {errors.name && <ErrorMessage>Name input can't be empty.</ErrorMessage>}
        <Input
          {...register("email", {
            required: true,
            minLength: 5,
            pattern: emailPattern,
          })}
          hasError={errors.email}
          type="text"
        />
        {errors.email?.type && <ErrorMessage>Wrong email adress</ErrorMessage>}
        <Textarea
          {...register("bio", { required: true, maxLength: 50, minLength: 10 })}
          hasError={errors.bio}
        />
        {errors.bio && (
          <ErrorMessage>Bio must have at least 10 characters.</ErrorMessage>
        )}
        <InputPredefined
          {...register("gender", { required: true })}
          type="radio"
          label="male"
          value="male"
        />
        <InputPredefined
          {...register("gender", { required: true })}
          type="radio"
          label="female"
          value="female"
        />
        {errors.gender && <ErrorMessage>Choose gender</ErrorMessage>}
        <InputPredefined
          {...register("terms", { required: true })}
          type="checkbox"
          label="terms"
        />
        {errors.terms && <ErrorMessage>Please choose an option</ErrorMessage>}
        <button type="submit">Submit</button>
      </form>
      {isSubmitSuccessful && <p className="success">SUBMIT SUCCESSFUL !</p>}
    </UserFormWrapper>
  );
};

export default UserFormHook;
