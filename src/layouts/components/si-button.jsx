import { usePopover } from 'minimal-shared/hooks';

import IconButton from '@mui/material/IconButton';

import { Iconify } from 'src/components/iconify';
// ----------------------------------------------------------------------

export function SocialIconBtn({ data = [], sx, ...other }) {
  const { open, onClose, onOpen, anchorEl } = usePopover();

  const renderButton = () => (
    <IconButton
      sx={[
        {
          p: 0,
          width: 40,
          height: 40,
        },
      ]}
    >
      <Iconify icon="lineicons:discord" sx={{ color: '#5865F2' }} size={25} />
    </IconButton>
  );

  return <>{renderButton()}</>;
}
