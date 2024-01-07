import TitleName from "../components/MyTitleName";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MyTitleName from "../components/MyTitleName";
import MyRoom from "../components/MyRoom";
import { useNavigate } from "react-router-dom";
import { roomDataLeft,roomDataRight } from "../mockdata/room_data";

export default function HomePage() {
  const leftSideFloorOne = roomDataLeft.filter((item) => item.floor === 1);
  const leftSideFloorTwo = roomDataLeft.filter((item) => item.floor === 2);


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

  const handleDetail = (id) => {
    navigate(`/${id}`);
  };

  const navigate = useNavigate();

  return (
    <div className="px-40 flex flex-col gap-4">
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
                <MyRoom
                  key={`${item.id} - ${index}`}
                  id={item.id}
                  index={index}
                  status={item.status}
                  roomNo={item.roomNo}
                  onClick={()=> handleDetail(item.id)}
                />
              ))}
            </div>
          ) : (
            <div>
              {leftSideFloorTwo.map((item, index) => (
                <MyRoom
                  key={`${item.id} - ${index}`}
                  id={item.id}
                  index={index}
                  status={item.status}
                  roomNo={item.roomNo}
                  onClick={()=> handleDetail(item.id)}
                />
              ))}
            </div>
          )}
          <div className="flex-1 flex items-center justify-center bg-primary">
            <p>Garden</p>
          </div>
          {floor ? (
            <div>
              {rightSideFloorOne.map((item, index) => (
                <MyRoom
                  key={`${item.id} - ${index}`}
                  id={item.id}
                  index={index}
                  status={item.status}
                  roomNo={item.roomNo}
                  onClick={()=> handleDetail(item.id)}
                />
              ))}
            </div>
          ) : (
            <div>
              {rightSideFloorTwo.map((item, index) => (
                <MyRoom
                  key={`${item.id} - ${index}`}
                  id={item.id}
                  index={index}
                  status={item.status}
                  roomNo={item.roomNo}
                  onClick={()=> handleDetail(item.id)}
                />
              ))}
            </div>
          )}
        </article>

        <article className="flex justify-between">
          <p>Date</p>
          <Button variant="contained" onClick={handleSelectFloor}>{floor ? "Floor 2" : "Floor 1"}</Button>
        
        </article>
      </section>

      <section className="mb-5">
        <MyTitleName title={`Detail`} />
        <img
          src="https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </section>
    </div>
  );
}
