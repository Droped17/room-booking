import MyStepper from "../components/MyStepper";
import MyTitleName from "../components/MyTitleName";
export default function RoomDetailPage() {
  return (
    <div className="px-40 flex flex-col gap-4">
      <MyTitleName title={`Room Type`} />
      <section>
        <article className="flex">
          <div className="flex-1">
            {" "}
            <img
              className="flex-1"
              src="https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex-1">
            <p className="flex-1">Room Detail</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              deleniti.
            </p>
          </div>
        </article>
      </section>
      <section>
        <MyStepper />
      </section>
    </div>
  );
}
