import { useSession } from "next-auth/client";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import SideRow from "./SideRow";
function Sidebar() {
  const [session, loading] = useSession();

  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SideRow src={session.user.image} title={session.user.name} />
      <SideRow Icon={UsersIcon} title="Friends" />
      <SideRow Icon={UserGroupIcon} title="Groups" />
      <SideRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SideRow Icon={DesktopComputerIcon} title="Watch" />
      <SideRow Icon={CalendarIcon} title="Events" />
      <SideRow Icon={ClockIcon} title="Memories" />
      <SideRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
