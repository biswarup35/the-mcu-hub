import "./Form.scss";
import { Button, Stack } from "../../components";
import { FC } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  thread?: [];
  parentId: string;
  onCancel?: () => void;
}

const Form: FC<IForm> = ({ thread, parentId, onCancel }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        parentId,
        comment: {
          user: data.user,
          text: data.text,
        },
      }),
    };
    fetch(`${process.env.REACT_APP_BASE_URL}/comments`, options)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={2}>
        <input
          {...register("user", { required: true })}
          type="text"
          placeholder="Your Name"
        />
        <textarea
          {...register("text", { required: true })}
          placeholder="Remember, be gentle"
        ></textarea>
        <Stack direction="row">
          <Button
            type="submit"
            className="py-1 radius-1 bg-tertiary full-width"
          >
            Comment
          </Button>
          {onCancel && (
            <Button
              onClick={onCancel}
              className="py-1 radius-1 bg-tertiary full-width"
            >
              Cancel
            </Button>
          )}
        </Stack>
      </Stack>
    </form>
  );
};

export default Form;
