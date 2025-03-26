
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderBarProps {
  title: string;
  subtitle?: string;
}

const HeaderBar = ({ title, subtitle }: HeaderBarProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-4 mb-6">
      <div>
        <h1 className="text-2xl font-semibold text-balance">{title}</h1>
        {subtitle && (
          <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
        )}
      </div>
      <div className="flex items-center gap-2 w-full md:w-auto">
        <div className="relative w-full md:w-60">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-9 w-full"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="relative"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-primary animate-pulse-soft"></span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex flex-col gap-1">
                <p className="font-medium">New candidate application</p>
                <p className="text-sm text-muted-foreground">Sarah Thompson applied for Senior Developer position</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex flex-col gap-1">
                <p className="font-medium">Client meeting reminder</p>
                <p className="text-sm text-muted-foreground">Meeting with UiPath scheduled in 30 minutes</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex flex-col gap-1">
                <p className="font-medium">Revenue goal achieved</p>
                <p className="text-sm text-muted-foreground">Q3 revenue target has been reached</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer justify-center font-medium text-primary">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default HeaderBar;
