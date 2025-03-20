"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

export function DropdownMenuRadioGroupDemo({ id, currentStatus, onStatusChange }) {
  const [status, setStatus] = useState(currentStatus);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    onStatusChange(id, newStatus); 
  
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">...</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel>Package Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={status} onValueChange={handleStatusChange}>
          <DropdownMenuRadioItem value="Delivered">Delivered</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Pending">Pending</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="In Transit">In Transit</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

