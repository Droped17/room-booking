import MyRoom from "./MyRoom";

export default function MyRoomList({rooms,onClick}) {
  return (
    <div>
      {rooms.map((item, index) => (
        <MyRoom
          key={`${item.id} - ${index}`}
          id={item.id}
          index={index}
          status={item.status}
          roomNo={item.roomNo}
          onClick={() => onClick(item.id)}
        />
      ))}
    </div>
  );
}
