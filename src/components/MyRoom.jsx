export default function MyRoom({ status, roomNo }) {
  return (
    <div className="min-w-[200px]">
      <button
        className={` hover:bg-orange-500 transition cursor-pointer w-full ${
          status === "not ok" ? "p-5  bg-red-200" : "p-5  bg-orange-300"
        }`}
      >
        <p className="text-white">No.{roomNo}</p>
      </button>
    </div>
  );
}
