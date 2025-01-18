import { Button, Menu, MenuItem } from '@mui/material';
import * as React from 'react';
import { User } from '../../../types';
import { useState } from 'react';

interface Props{
  user: User,
}

const UserMenu: React.FC<Props> = ({user}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const hendelClose = () =>{
    setAnchorEl(null);
  }

  return (
    <div>
      <Button color='inherit' onClick={handleClick}>
        Hello, {user?.username}
      </Button>
      <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={hendelClose}>
        <MenuItem>Track History</MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;