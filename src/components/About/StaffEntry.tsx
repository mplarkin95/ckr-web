import { Staff } from "@/types/Staff";
import Markdown from "marked-react";

const StaffEntry = ({ staff }: { staff: Staff }) => {
  return (
    <div className="flex my-2">
      <div className="w-1/3 mx-2">
        <img src={`https:${staff.profilePicture}`} className="w-full" />
      </div>
      <div className="flex-col w-fit p-2">
        <div className="font-bold text-xl">{staff.name}</div>
        <Markdown>{staff.bio}</Markdown>
      </div>
    </div>
  );
};

export default StaffEntry;
