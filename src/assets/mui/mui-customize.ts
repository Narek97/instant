'use client'
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    fontFamily: `Fira Sans, sans-serif`,
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 400,
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        colorPrimary: {
          '&.Mui-checked': {
            color: '#2693e6',
          },
        },
        track: {
          '.Mui-checked.Mui-checked + &': {
            opacity: 1,
            backgroundColor: '#86d3ff',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 400,
        },
        startIcon: {
          marginLeft: 0,
          marginRight: 0,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          height: '16px',
          padding: '8px',
          lineHeight: '16px',
          fontSize: '12px',
          color: '#545e6b',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&::before': {
            borderBottom: '0px !important',
          },
          '&::after': {
            borderBottom: '1px solid #1b87e6',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: '1px',
          background: '#1B87E6',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: '20px',
          padding: '8px 18px 8px 8px',
          textTransform: 'capitalize',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          padding: '12px 24px',
          backgroundColor: 'red',
          '>tr>th': {
            fontFamily: `"FiraSans-Bold", serif`,
          },
        },
      },
    },
  },
})
