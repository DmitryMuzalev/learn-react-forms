import { Controller, useForm } from "react-hook-form";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";

function App() {
  const { register, handleSubmit, reset, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      className="feedback-form"
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="feedback-form__item feedback-form__row">
        <TextField
          variant="outlined"
          type="text"
          label="Name"
          required
          sx={{ width: "100%" }}
          {...register("name")}
        />
        <TextField
          variant="outlined"
          type="email"
          label="Email"
          required
          sx={{ width: "100%" }}
          {...register("email")}
        />
      </div>
      <div className="feedback-form__item">
        <TextField
          variant="outlined"
          type="tel"
          label="Phone"
          required
          sx={{ width: "100%" }}
          {...register("phone")}
        />
      </div>
      <div className="feedback-form__item">
        <TextField
          label="Message"
          multiline
          rows={4}
          sx={{ width: "100%" }}
          {...register("message")}
        />
      </div>
      <div className="feedback-form__item">
        <FormControlLabel
          control={
            <Controller
              name="subscribe"
              control={control}
              render={({ field }) => {
                const value = field["value"] ?? false;
                return <Checkbox {...field} checked={value} />;
              }}
            />
          }
          label="Keep me up to date with news and offers from time to time by email"
        />
      </div>
      <div className="feedback-form__item">
        <Button
          type="submit"
          variant="contained"
          sx={{ width: "100%", marginTop: "25px" }}
        >
          Send Message
        </Button>
      </div>
    </form>
  );
}

export default App;
