"use client";

import { FC, SyntheticEvent, useState } from "react";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { bottomNavLinks } from "@/constants/constants";
import { useRouter } from "next/navigation";
interface DashboardBottomNavbarProps {}

const DashboardBottomNavbar: FC<DashboardBottomNavbarProps> = ({}) => {
  const theme = useTheme();

  const [value, setValue] = useState(bottomNavLinks[0].label);

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const router = useRouter();

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",

        display: { sm: "none" },
        bottom: 0,
        left: 0,
      }}
    >
      <BottomNavigation value={value} onChange={handleChange} style={{}}>
        {bottomNavLinks.map((link, i) => (
          <BottomNavigationAction
            label={link.label}
            value={link.label}
            icon={<link.icon />}
            onClick={() => router.push(link.href)}
            key={i}
            style={{
              color: "black",
            }}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};

export default DashboardBottomNavbar;
