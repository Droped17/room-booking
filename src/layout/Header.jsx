import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const handleLogo = () => {
    navigate("/");
  }
  return (
    <div className="p-3 bg-primary text-white flex justify-between">
      <p onClick={handleLogo} className="cursor-pointer">LOGO</p>
      <div className="flex gap-2">
        <p>profile</p>
        <p>CART</p>
      </div>
    </div>
  );
}
