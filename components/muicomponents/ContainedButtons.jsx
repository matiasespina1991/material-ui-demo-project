// @mui
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Icon } from '@iconify/react';

export default function ContainedButtons() {
  return (
    <div 
      style={{ 
        width: "100%" ,  
        display: 'grid' ,
        gridTemplateColumns: 'max-content max-content max-content',
        placeContent: 'space-evenly',
        gridRowGap: '3rem'
      }}
    >
      <Button variant="contained" color="inherit">
        Default
      </Button>

      <Button variant="contained">
        Primary
      </Button>

      <Button variant="contained" color="secondary">
        Secondary
      </Button>

      <Button variant="contained" disabled>
        Disabled
      </Button>

      <Button variant="contained">
        Link
      </Button>

      <Button variant="contained" color="inherit">
        Default
      </Button>

      <Button variant="contained">
        Primary
      </Button>

      <Button variant="contained" color="secondary">
        Secondary
      </Button>

      <Button variant="contained" color="info">
        Info
      </Button>

      <Button variant="contained" color="success">
        Success
      </Button>

      <Button variant="contained" color="warning">
        Warning
      </Button>

      <Button variant="contained" color="error">
        Error
      </Button>

      <Button
        variant="contained"
        color="error"
        startIcon={<Icon icon="ic:round-access-alarm" />}
      >
        Icon Left
      </Button>

      <Button
        variant="contained"
        color="error"
        endIcon={<Icon icon="ic:round-access-alarm" />}
      >
        Icon Right
      </Button>

      <LoadingButton loading variant="contained">
        Submit
      </LoadingButton>

      <LoadingButton loading loadingIndicator="Loading..." variant="contained">
        Fetch data
      </LoadingButton>

      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<Icon icon="ic:round-access-alarm" />}
        variant="contained"
      >
        Save
      </LoadingButton>

      <Button variant="contained" color="info" size="small">
        Small
      </Button>

      <Button variant="contained" color="info">
        Medium
      </Button>

      <Button variant="contained" color="info" size="large">
        Large
      </Button>
      
    </div>
  );
}
