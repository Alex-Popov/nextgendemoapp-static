//import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './global.css';
import './print.css';

import { createTheme } from '@material-ui/core/styles';
import variables from './variables.module.css';



const themeConfig = createTheme({
    breakpoints: {
        values: { // bootstrap
            xs: 0,
            sm: parseInt(variables['breakpoint-sm'], 10),
            md: parseInt(variables['breakpoint-md'], 10),
            lg: parseInt(variables['breakpoint-lg'], 10),
            xl: parseInt(variables['breakpoint-xl'], 10)
        },
        //up: key => `@media (min-width:${values[key]}px)`
    },
    palette: {
        primary: {
            main: variables['color-primary']
        },
        secondary: {
            main: variables['color-secondary']
        },
/*
        error: {
            main: variables['color-error']
        },
        warning: {
            main: variables['color-warning']
        },
        info: {
            main: variables['color-info']
        },
        success: {
            main: variables['color-success']
        },
*/
        background: {
            default: variables['colorBackground-default'],
            paper: variables['colorBackground-paper']
        },

        text: {
            primary: variables['colorText-primary'],
            secondary: variables['colorText-secondary'],
            disabled: variables['colorText-disabled'],
            hint: variables['colorText-hint']
        },

        divider: variables['color-border'],

        actions: {
            active: variables['colorAction-active'],
            hover: variables['colorAction-hover'],
            selected: variables['colorAction-selected'],
            focus: variables['colorAction-focus']
        }
    },
    typography: {
        fontFamily: variables['fontFamily-default'],
//        fontSize: 10,
        h1: {
            fontSize: '2rem',
            color: variables['colorText-heading']
        },
        h2: {
            fontSize: '1.75rem',
            color: variables['colorText-heading']
        },
        h3: {
            fontSize: '1.5rem',
            color: variables['colorText-heading'],
            //fontWeight: 300
        },
        h4: {
            fontSize: '1.2rem',
            color: variables['colorText-heading'],
            //fontWeight: 300
        },
        h5: {
            fontSize: '1rem',
            color: variables['colorText-heading'],
            //fontWeight: 300,
            //textTransform: 'uppercase'
        },
        h6: {
            fontSize: '0.875rem',
            color: variables['colorText-heading'],
            //fontWeight: 300,
            //textTransform: 'uppercase'
        },

        subtitle1: {
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: 1.2,
            letterSpacing: 0
        },
        subtitle2: {
            fontWeight: 500,
            fontSize: '0.75rem',
            lineHeight: 1.2,
            letterSpacing: 0
        },

        overline: {
            fontSize: '0.7125rem',
            opacity: .6
        }
    },
    zIndex: {
        mobileStepper: parseInt(variables['zIndex-mobileStepper'], 10),
        speedDial: parseInt(variables['zIndex-speedDial'], 10),
        appBar: parseInt(variables['zIndex-appBar'], 10),
        drawer: parseInt(variables['zIndex-drawer'], 10),
        modal: parseInt(variables['zIndex-modal'], 10),
        snackbar: parseInt(variables['zIndex-snackbar'], 10),
        tooltip: parseInt(variables['zIndex-tooltip'], 10)
    },
    shadows: [...Array(25).keys()].map(i => variables['shadow-'+i])
});


themeConfig.components = {

    //
    // global calculated styles
    //

    MuiCssBaseline: {
        styleOverrides: {
            // size scale
            html: {
                fontSize: '16px',
                [themeConfig.breakpoints.up('md')]: {
                    fontSize: '14px'
                }
            },

            // CSS tokens
            ':root': Object.fromEntries(Object.keys(variables).map(k => ['--'+k, variables[k]]))
        }
    },


    // Dialog

    MuiDialog: {
        styleOverrides: {
            paper: {
                backgroundImage: 'none',
                [themeConfig.breakpoints.down('sm')]: {
                    width: '100% !important',
                    height: '100%',
                    margin: 0,
                    maxWidth: '100% !important',
                    maxHeight: 'none !important',
                    borderRadius: 0
                }
            }
        }
    },
    MuiDialogTitle: {
        styleOverrides: {
            root: {
                padding: `${variables['padding-3']} ${variables['padding-4']}`
            }
        }
    },
    MuiDialogContent: {
        styleOverrides: {
            root: {
                padding: 0
            },
            dividers: {
                ':first-of-type': {
                    borderTop: 'none'
                },
                ':last-child': {
                    borderBottom: 'none'
                },
                padding: 0
            }
        }
    },
    MuiDialogActions: {
        styleOverrides: {
            root: {
                padding: `${variables['padding-3']} ${variables['padding-4']}`,
                [themeConfig.breakpoints.down('sm')]: {
                    justifyContent: 'space-between'
                }
            },
            spacing: {
                '@global': {
                    ' > :not(:first-of-type)': {
                        marginLeft: variables['padding-3']
                    }
                }
            }
        }
    },


    // Chip

    MuiChip: {
        styleOverrides: {
            root: {
                height: '20px',
                fontSize: '0.65rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                borderRadius: '3px',
                cursor: 'inherit'
            },
            label: {
                paddingLeft: '8px',
                paddingRight: '8px'
            }
        }
    },


    // Chip

    MuiAlert: {
        styleOverrides: {
            filledInfo: {
                fontWeight: 400
            },
            filledWarning: {
                color: variables['colorText-primary'],
                fontWeight: 400
            },
            filledError: {
                fontWeight: 400
            },
            filledSuccess: {
                fontWeight: 400
            }
        }
    },


    // List

    MuiListItem: {
        styleOverrides: {
            root: {
                '&$selected': {
                    backgroundColor: variables['color-primary'],
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: variables['color-primary'],
                    }
                }
            }
        }
    },
    MuiListItemText: {
        styleOverrides: {
            primary: {
                fontSize: '0.875rem',
            }
        }
    },
    MuiListItemIcon: {
        styleOverrides: {
            root: {
                minWidth: 0,
                marginRight: '1rem',
                color: 'inherit'
            }
        }
    },


    // Input / Select

    MuiOutlinedInput: {
        defaultProps: {
            size: 'small'
        },
        styleOverrides: {
            root: {
                backgroundColor: variables['colorBackground-control']
            }
        }
    },
    MuiTextField: {
        defaultProps: {
            size: 'small',
            margin: 'dense'
        }
    },
    MuiNativeSelect: {
        styleOverrides: {
            select: {
                color: 'inherit',
                '&:focus': {
                    color: '#000'
                }
            },
            icon: {
                color: 'inherit'
            }
        }
    },
    MuiSelect: {
        styleOverrides: {
            outlined: {
                padding: '9px 14px',
                '&:focus': {
                    backgroundColor: '#fff'
                }
            }
        }
    },
/*    MuiInputLabel: {
        styleOverrides: {
            outlined: {
            }
        }
    },*/
/*    MuiInputAdornment: {
styleOverrides: {
        positionStart: {
            marginRight: 0
        },
        positionEnd: {
            marginLeft: 0
        }
        }
    },*/


    // Button

    MuiButtonBase: {
        defaultProps: {
            disableRipple: true,
            disableTouchRipple: true
        }
    },

    MuiButton: {
        defaultProps: {
            variant: 'outlined'
        },
        styleOverrides: {
            root: {
                minWidth: 0
            },
            containedSizeLarge: {
                padding: '12px 22px'
            },
            outlinedSizeLarge: {
                padding: '12px 22px'
            },
            startIcon: {
                marginRight: '4px'
            },
            endIcon: {
                marginLeft: '4px'
            }
        }
    },
    MuiIconButton: {
        styleOverrides: {
            root: {
                '&$disabled': {
                    color: 'inherit',
                    opacity: .2
                }
            }
        }
    },
};


export default themeConfig;