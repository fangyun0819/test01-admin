import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


function Info() {
  return (
    <React.Fragment>
      <Typography variant="title" gutterBottom>
        寫真書基本資訊
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="寫真書名稱"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          </Grid>
       
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="description"
            name="description"
            label="說明"
            fullWidth
          />
          </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Info;