import StaffContainer from "@/components/About/StaffContainer";
import { getStaff } from "@/data/queries/about";
import { transformStaffFull } from "@/data/transformers/about";
import { Staff } from "@/types/Staff";

const About = ({ staff }: { staff: Staff[] }) => {
  return (
    <div className="flex-col h-full">
      <StaffContainer staff={staff} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await getStaff();
  const staff = transformStaffFull(res);
  return {
    props: { staff },
  };
}

export default About;
