import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { Box, Button, MenuItem, Popover, Stack } from '@mui/material';
import React, { MouseEvent, useState } from 'react';

interface Lang {
  value: string
  label: string
  icon: string
}

const LANGS = [
  {
    value: 'es',
    label: 'El Salvador',
    icon: '/assets/icons/countries/ic_flag_sv.svg'
  },
  {
    value: 'cr',
    label: 'Costa Rica',
    icon: '/assets/icons/countries/ic_flag_cr.svg'
  },
  {
    value: 'gt',
    label: 'Guatemala',
    icon: '/assets/icons/countries/ic_flag_gt.svg'
  }
];

const LanguagePopover: React.FC = () => {
  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="outlined"
        sx={{
          padding: 0,
          width: 150,
          height: 45,
          color: 'black',
          borderColor: 'GREY'
        }}
        endIcon={<ArrowDropDownRoundedIcon />}>
        <img src={LANGS[0].icon} alt={LANGS[0].label} style={{ width: '28px', marginRight: '4px' }} />
        {LANGS[0].label}
      </Button>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.5
            }
          }
        }}>
        <Stack spacing={0.75}>
          {LANGS.map(option => (
            <MenuItem key={option.value} selected={option.value === LANGS[0].value} onClick={() => handleClose()}>
              <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </>
  );
};

export default LanguagePopover;
