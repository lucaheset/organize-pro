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
  label: string;
  options: { value: string; label: string }[];
};

export function DropdownComponent({
  dropdownValue,
  setDropdownValue,
  label,
  options,
}: DropdownComponentProps) {
  const handleSelect = (value: string) => {
    setDropdownValue((prev) => (prev === value ? "" : value));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Button variant="secondary">
          {dropdownValue
            ? options.find((option) => option.value === dropdownValue)?.label
            : label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {options.map((option) => (
          <DropdownMenuCheckboxItem className="cursor-pointer"
            key={option.value}
            checked={dropdownValue === option.value}
            onCheckedChange={() => handleSelect(option.value)}
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
