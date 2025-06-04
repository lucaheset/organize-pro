import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type DropdownComponentProps = {
  dropdownValue: string;
  setDropdownValue: React.Dispatch<React.SetStateAction<string>>;
};

export function DropdownComponent({
  dropdownValue,
  setDropdownValue,
}: DropdownComponentProps) {
  const handleSelect = (value: string) => {
    setDropdownValue((prev) => (prev === value ? "" : value));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">
          {dropdownValue || "Select Category"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Categories</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={dropdownValue === "Study"}
          onCheckedChange={() => handleSelect("Study")}
        >
          Study
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={dropdownValue === "Work"}
          onCheckedChange={() => handleSelect("Work")}
        >
          Work
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={dropdownValue === "Others"}
          onCheckedChange={() => handleSelect("Others")}
        >
          Others
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
