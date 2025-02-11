import { LuLoader2, LuLogOut } from "react-icons/lu";
import { CgGym } from "react-icons/cg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { useNavigate } from "react-router-dom";
import useAuthStore from "@/stores/useAuthStore";

function UserBox() {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  if (!user) return <LuLoader2 className="animate-spin" />;

  async function onLogout() {
    try {
      // await auth.signOut();
      // setUser(null);
      // navigate("/auth");
    } catch (error) {
      console.log("error logout");
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarFallback className="uppercase">
            {user.user.login![0]}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="start" forceMount>
        <div className="flex flex-col space-y-4 p-2">
          <p className="text-xs font-medium leading-none text-muted-foreground">
            {user.login}
          </p>
          <div className="flex items-center gap-x-2">
            <div className="rounded-md bg-secondary p-1">
              <Avatar>
                <AvatarImage src={user.user.name!} />
                <AvatarFallback className="uppercase">
                  {user.user.login![0]}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-1">
              <p className="line-clamp-1  text-sm">
                {user.user.name ?? user.user.login}
              </p>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer mb-1">
            <CgGym className="size-4 mr-2" />
            <span>Gym</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer bg-destructive"
            onClick={onLogout}
          >
            <LuLogOut className="size-4 mr-2" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserBox;
