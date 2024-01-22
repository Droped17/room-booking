import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import { StepConnector } from "@mui/material";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MySelectDateTime from "../components/MySelectDateTime";

export default function MyStepper() {
  const steps = ["1", "2", "3"];
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [day, setDay] = useState(0);
  const [people, setPeople] = useState(0);

  const handleDay = (e) => {
    setDay(e.target.value);
  };

  const handlePeople = (e) => {
    setPeople(e.target.value);
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={activeStep}
        connector={<StepConnector sx={{ backgroundColor: "green" }} />}
      >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}></StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 0 ? (
        <>
          <MySelectDateTime />
          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </>
      ) : activeStep === 1 ? (
        <>
          <p>ข้อมูลส่วนตัว</p>
          <div className="flex flex-col gap-2">
            <FormControl variant="filled">
              <InputLabel htmlFor="firstname">FirstName</InputLabel>
              <FilledInput id="firstname" defaultValue="" />
            </FormControl>
            <FormControl variant="filled">
              <InputLabel htmlFor="lastname">LastName</InputLabel>
              <FilledInput id="lastname" defaultValue="" />
            </FormControl>
            <FormControl variant="filled">
              <InputLabel htmlFor="phone">Phone</InputLabel>
              <FilledInput id="phone" defaultValue="" />
            </FormControl>
          </div>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </>
      ) : activeStep === 2 ? (
        <>
          <section className="flex">
            <div className="w-80">
              <img
                src="https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div>
              <strong>Banking Detail</strong>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, blanditiis.</p>
            </div>
          </section>
          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </>
      ) : (
        <div className="text-center">
          <Button onClick={handleReset} variant="contained">
            Confirm
          </Button>
        </div>
      )}
    </Box>
  );
}
