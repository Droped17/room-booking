export default function MyRoom({ status, roomNo,onClick }) {
  return (
    <div className="min-w-[200px]">
      <button
      disabled={status === "not ok" ? true : false}
      onClick={onClick}
        className={`transition w-full ${
          status === "not ok" ? "p-5  bg-red-500" : "p-5 cursor-pointer bg-secondary hover:bg-yellow-500"
        }`}
      >
        <p className="text-white">No.{roomNo}</p>
      </button>
    </div>
  );
}
