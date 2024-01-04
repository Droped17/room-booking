import TitleName from "../components/MyTitleName";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function HomePage() {
  const roomDataLeft = [
    { id: 1, roomNo: 1, floor: 1, roomDetail: "detail", status: "ok" },
    { id: 2, roomNo: 2, floor: 1, roomDetail: "detail", status: "ok" },
    { id: 3, roomNo: 3, floor: 1, roomDetail: "detail", status: "ok" },
    { id: 4, roomNo: 4, floor: 1, roomDetail: "detail", status: "not ok" },
    { id: 5, roomNo: 5, floor: 1, roomDetail: "detail", status: "ok" },
    { id: 6, roomNo: 6, floor: 1, roomDetail: "detail", status: "not ok" },
    { id: 7, roomNo: 7, floor: 1, roomDetail: "detail", status: "not ok" },
    { id: 8, roomNo: 15, floor: 2, roomDetail: "detail", status: "ok" },
    { id: 9, roomNo: 16, floor: 2, roomDetail: "detail", status: "ok" },
    { id: 10, roomNo: 17, floor: 2, roomDetail: "detail", status: "ok" },
    { id: 11, roomNo: 18, floor: 2, roomDetail: "detail", status: "not ok" },
    { id: 12, roomNo: 19, floor: 2, roomDetail: "detail", status: "ok" },
    { id: 13, roomNo: 20, floor: 2, roomDetail: "detail", status: "not ok" },
    { id: 14, roomNo: 21, floor: 2, roomDetail: "detail", status: "not ok" },
  ];

  const leftSideFloorOne = roomDataLeft.filter((item) => item.floor === 1);
  const leftSideFloorTwo = roomDataLeft.filter((item) => item.floor === 2);

  const roomDataRight = [
    { id: 1, roomNo: 8, floor: 1, roomDetail: "detail", status: "ok" },
    { id: 2, roomNo: 9, floor: 1, roomDetail: "detail", status: "ok" },
    { id: 3, roomNo: 10, floor: 1, roomDetail: "detail", status: "ok" },
    { id: 4, roomNo: 11, floor: 1, roomDetail: "detail", status: "not ok" },
    { id: 5, roomNo: 12, floor: 1, roomDetail: "detail", status: "ok" },
    { id: 6, roomNo: 13, floor: 1, roomDetail: "detail", status: "not ok" },
    { id: 7, roomNo: 14, floor: 1, roomDetail: "detail", status: "not ok" },
    { id: 1, roomNo: 22, floor: 2, roomDetail: "detail", status: "ok" },
    { id: 2, roomNo: 23, floor: 2, roomDetail: "detail", status: "ok" },
    { id: 3, roomNo: 24, floor: 2, roomDetail: "detail", status: "ok" },
    { id: 4, roomNo: 25, floor: 2, roomDetail: "detail", status: "not ok" },
    { id: 5, roomNo: 26, floor: 2, roomDetail: "detail", status: "ok" },
    { id: 6, roomNo: 27, floor: 2, roomDetail: "detail", status: "not ok" },
    { id: 7, roomNo: 28, floor: 2, roomDetail: "detail", status: "not ok" },
  ];

  const rightSideFloorOne = roomDataRight.filter((item) => item.floor === 1);
  const rightSideFloorTwo = roomDataRight.filter((item) => item.floor === 2);

  const [day, setDay] = useState(0);
  const [people, setPeople] = useState(0);
  const [floor, setFloor] = useState(false);

  const handleDay = (e) => {
    setDay(e.target.value);
  };

  const handlePeople = (e) => {
    setPeople(e.target.value);
  };

  const handleSelectFloor = () => {
    setFloor(!floor);
  };

  return (
    <div className="px-40 ">
      <section className="flex flex-col gap-4">
        <TitleName title={`HOMEPAGE`} />
        <article className="bg-gray-200 p-5 flex justify-around">
          <Box sx={{ minWidth: 120 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">จำนวนวัน</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={day}
                label="Age"
                onChange={handleDay}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">count</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={people}
                label="Age"
                onChange={handlePeople}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </article>
      </section>

      <section>
        <article className="flex text-center">
          {floor ? (
            <div>
              {leftSideFloorOne.map((item, index) => (
                <div
                  className={`${
                    item.status === "not ok"
                      ? "p-5 border bg-red-200"
                      : "p-5 border bg-orange-300"
                  }`}
                >
                  <p>{item.roomNo}</p>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {leftSideFloorTwo.map((item, index) => (
                <div
                  className={`${
                    item.status === "not ok"
                      ? "p-5 border bg-red-200"
                      : "p-5 border bg-orange-300"
                  }`}
                >
                  <p>{item.roomNo}</p>
                </div>
              ))}
            </div>
          )}
          <div className="flex-1 flex items-center justify-center bg-green-200">
            <p>Garden</p>
          </div>
          {floor ? (
            <div>
              {rightSideFloorOne.map((item, index) => (
                <div
                  className={`${
                    item.status === "not ok"
                      ? "p-5 border bg-red-200"
                      : "p-5 border bg-orange-300"
                  }`}
                >
                  <p>{item.roomNo}</p>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {rightSideFloorTwo.map((item, index) => (
                <div
                  className={`${
                    item.status === "not ok"
                      ? "p-5 border bg-red-200"
                      : "p-5 border bg-orange-300"
                  }`}
                >
                  <p>{item.roomNo}</p>
                </div>
              ))}
            </div>
          )}
        </article>

        <article className="flex justify-between">
          <p>Date</p>
          <button onClick={handleSelectFloor}>Select Floor</button>
        </article>
      </section>
    </div>
  );
}
