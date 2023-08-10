import { Staff } from "@/types/Staff";
import StaffEntry from "./StaffEntry";

const StaffContainer = ({ staff }: { staff: Staff[] }) => {
  return (
    <div>
      {staff.map((staff) => (
        <StaffEntry staff={staff} key={staff.id} />
      ))}
    </div>
  );
};

export default StaffContainer;
