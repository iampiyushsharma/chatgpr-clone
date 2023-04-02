import React from 'react'
import {Box, Typography,Card, Stack} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import DescriptionRounded from '@mui/icons-material/DescriptionRounded'
import FormatAlignLeftOutlined from '@mui/icons-material/FormatAlignLeftOutlined'
import ChatRounded from '@mui/icons-material/ChatRounded'
import Image from '@mui/icons-material/Image'
import Code from '@mui/icons-material/Code'
const Homepage = () => {
  const  navigate = useNavigate()
  return (
    <>
    <Box sx={{display:'flex',flexDirection:'row'}}>
    <Box p={2}>
      <Typography variant='h4' mb={2} fontWeight="bold">
        Text Generation
      </Typography>
      <Card onClick={()=> navigate('/summary')}
      sx={{boxShadow:2, borderRadius:5, height:190,width:200, '&:hover':{border:2, boxShadow:0, borderColor:"primary.dark", cursor:' '} }}>
      <DescriptionRounded sx={{fontSize:80,color:'primary.main',mt:2,ml:2}}/>
      <Stack p={3} pt={0}>
        <Typography fontWeight="bold" variant='h5'>TEXT SUMMARY</Typography>
        <Typography  variant='h6'>Summarize long text into short sentences</Typography>
      </Stack>
      </Card>
    </Box>
    <Box p={2}>
      <Typography variant='h4' mb={2} fontWeight="bold">
        Paragraph
      </Typography>
      <Card onClick={()=> navigate('/paragraph')}
      sx={{boxShadow:2, borderRadius:5, height:190,width:200, '&:hover':{border:2, boxShadow:0, borderColor:"primary.dark", cursor:' '} }}>
      <FormatAlignLeftOutlined sx={{fontSize:80,color:'primary.main',mt:2,ml:2}}/>
      <Stack p={3} pt={0}>
        <Typography fontWeight="bold" variant='h5'>Paragraph</Typography>
        <Typography  variant='h6'>Generate Paragraph from words</Typography>
      </Stack>
      </Card>
    </Box>
    <Box p={2}>
      <Typography variant='h4' mb={2} fontWeight="bold">
        AI Chatbot
      </Typography>
      <Card onClick={()=> navigate('/chatbot')}
      sx={{boxShadow:2, borderRadius:5, height:190,width:200, '&:hover':{border:2, boxShadow:0, borderColor:"primary.dark", cursor:' '} }}>
      <ChatRounded sx={{fontSize:80,color:'primary.main',mt:2,ml:2}}/>
      <Stack p={3} pt={0}>
        <Typography fontWeight="bold" variant='h5'>TEXT SUMMARY</Typography>
        <Typography  variant='h6'>Summarize long text into short sentences</Typography>
      </Stack>
      </Card>
    </Box>
    <Box p={2}>
      <Typography variant='h4' mb={2} fontWeight="bold">
        js-code
      </Typography>
      <Card onClick={()=> navigate('/js-converter')}
      sx={{boxShadow:2, borderRadius:5, height:190,width:200, '&:hover':{border:2, boxShadow:0, borderColor:"primary.dark", cursor:' '} }}>
      <Code sx={{fontSize:80,color:'primary.main',mt:2,ml:2}}/>
      <Stack p={3} pt={0}>
        <Typography fontWeight="bold" variant='h5'>Javascript converter</Typography>
        <Typography  variant='h6'>translate  english to javascript code</Typography>
      </Stack>
      </Card>
    </Box>
    <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            AI SCIFI Images
          </Typography>
          <Card
            onClick={() => navigate("/scifi-image")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <Image
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Scifi Image
              </Typography>
              <Typography variant="h6">Generate Scifi images</Typography>
            </Stack>
          </Card>
        </Box>
    
    </Box>
    </>
  )
}

export default Homepage