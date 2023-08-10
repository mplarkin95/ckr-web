import { Staff } from "@/types/Staff";
import StaffEntry from "./StaffEntry";

const StaffContainer = ({ staff }: { staff: Staff[] }) => {
  return (
    <>
      {staff.map((staff) => (
        <StaffEntry staff={staff} key={staff.id} />
      ))}
    </>
  );
};

export default StaffContainer;
