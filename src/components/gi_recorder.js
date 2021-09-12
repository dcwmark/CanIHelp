import {
    Container,
    Typography,
} from '@material-ui/core';

import RecorderGrid from './RecorderGrid';

import './gi_recorder.css';

const gi_recorder = () => {
  return (
    <Container>
      <Typography
        id="company_logo"
        variant="h4"
        align="center"
        color="primary"
      >
        Lucidus Iter
      </Typography>

      <RecorderGrid />
    </Container>
  );
}

  export default gi_recorder;
