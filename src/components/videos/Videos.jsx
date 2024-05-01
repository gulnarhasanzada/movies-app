import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function Videos({videos}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        {videos && videos.map((video, index)=>(
            <Tab value={index} label={video.name} key={index} sx={{
                fontSize: {xs:'0.5rem', sm:'0.8rem'},
                color: value === index ? 'secondary.main' : 'primary.light', 
              }}/>
        ))}
      </Tabs>

      {videos && videos.map((video, index)=>{
        if(value === index){
            return <iframe
                        className="youtube"
                        src={`https://www.youtube.com/embed/${video.key}?autoplay=1&mute=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
        }
      })}
    </Box>
  );
}