import { Shadows, alpha } from "@mui/material/styles";
import { PaletteColorOptions } from "@mui/material/styles";
// Asumiendo que el archivo './palette' exporta un objeto 'palette' de tipo 'Palette'
import { palette } from "./palette";

const color = palette.grey?.[500] ?? "#BDBDBD"; // Proporcionar un valor por defecto para grey[500]

function getColorMain(
  colorOption: PaletteColorOptions | undefined,
  defaultValue: string
): string {
  if (
    typeof colorOption === "object" &&
    colorOption !== null &&
    "main" in colorOption
  ) {
    return colorOption.main ?? defaultValue;
  }
  return defaultValue;
}

export default function customShadows(): Shadows {
  const transparent = alpha(color, 0.16);

  // Usando la función actualizada
  const primary = getColorMain(palette.primary, "#1976D2");
  const info = getColorMain(palette.info, "#2196F3");
  const secondary = getColorMain(palette.secondary, "#9C27B0");
  const success = getColorMain(palette.success, "#4CAF50");
  const warning = getColorMain(palette.warning, "#FFC107");
  const error = getColorMain(palette.error, "#F44336");

  return [
    "none", // z1
    `0 1px 2px 0 ${transparent}`, // z1
    `0 2px 4px 0 ${transparent}`, // z2
    `0 3px 6px 0 ${transparent}`, // z3
    `0 4px 8px 0 ${transparent}`, // z4
    `0 5px 10px 0 ${transparent}`, // z5
    `0 6px 12px 0 ${transparent}`, // z6
    `0 7px 14px 0 ${transparent}`, // z7
    `0 8px 16px 0 ${transparent}`, // z8
    `0 9px 18px 0 ${transparent}`, // z9
    `0 10px 20px 0 ${transparent}`, // z10
    `0 11px 22px 0 ${transparent}`, // z11
    `0 12px 24px 0 ${transparent}`, // z12
    `0 13px 26px 0 ${transparent}`, // z13
    `0 14px 28px 0 ${transparent}`, // z14
    `0 15px 30px 0 ${transparent}`, // z15
    `0 16px 32px 0 ${transparent}`, // z16
    `0 17px 34px 0 ${transparent}`, // z17
    `0 18px 36px 0 ${transparent}`, // z18
    `0 19px 38px 0 ${transparent}`, // z19
    `0 20px 40px 0 ${transparent}`, // z20
    `0 21px 42px 0 ${transparent}`, // z21
    `0 22px 44px 0 ${transparent}`, // z22
    `0 23px 46px 0 ${transparent}`, // z23
    `0 24px 48px 0 ${transparent}`, // z24
  ];
}
