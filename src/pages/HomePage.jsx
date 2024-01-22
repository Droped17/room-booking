import TitleName from "../components/MyTitleName";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useState } from "react";
import MyTitleName from "../components/MyTitleName";
import { roomDataLeft, roomDataRight } from "../mockdata/room_data";
import MyRoomList from "../components/MyRoomList";
import MySelectDateTime from "../components/MySelectDateTime";

export default function HomePage() {
  const leftSideFloorOne = roomDataLeft.filter((item) => item.floor === 1);
  const leftSideFloorTwo = roomDataLeft.filter((item) => item.floor === 2);

  const rightSideFloorOne = roomDataRight.filter((item) => item.floor === 1);
  const rightSideFloorTwo = roomDataRight.filter((item) => item.floor === 2);

  const [floor, setFloor] = useState(false);

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
        <MySelectDateTime/>
      </section>

      <section>
        <article className="flex text-center">
          <MyRoomList
            rooms={floor ? leftSideFloorTwo : leftSideFloorOne}
            onClick={handleDetail}
          />
          <div className="flex-1 flex items-center justify-center bg-primary">
            <p>Garden</p>
          </div>
          <MyRoomList
            rooms={floor ? rightSideFloorTwo : rightSideFloorOne}
            onClick={handleDetail}
          />
        </article>

        <article className="flex justify-between">
          <p>Date</p>
          <Button variant="contained" onClick={handleSelectFloor}>
            {floor ? "Floor 2" : "Floor 1"}
          </Button>
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
