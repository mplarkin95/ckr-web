import { Staff } from "@/types/Staff";

const StaffEntry = ({ staff }: { staff: Staff }) => {
  return (
    <div>
      <h2>{staff.name}</h2>
      <p>{staff.bio}</p>
    </div>
  );
};

export default StaffEntry;
