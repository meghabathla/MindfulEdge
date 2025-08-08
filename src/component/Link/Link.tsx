import { TbExternalLink } from "react-icons/tb";

export const Link = () => {
  const handleGoogleTab = () => {
    window.location.href = "https://www.google.com"; //
  };
  return (
    <div className="link_section">
      <div className="icon_container">
        <TbExternalLink size={25} />
      </div>
      <div onClick={handleGoogleTab}>Links</div>
    </div>
  );
};
