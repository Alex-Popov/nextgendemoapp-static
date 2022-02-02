import React from 'react';

import css from './Dashboard.module.css';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
/*import Button from '@material-ui/core/Button';
import Search from '../components/Search';
import Select from '../components/Select';
import DatePicker from '../components/DatePicker';
import IconButtonStateful from '../components/IconButtonStateful';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import MuiSelect from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import Card from '@material-ui/core/Card';*/

import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
//@material-ui/icons/

function Dashboard() {
    return <>
        <div className={css.header}>
            <div className="d-flex align-items-center">
                <IconButton color="inherit" className={css.menu} edge="start">
                    <MenuRoundedIcon fontSize="inherit" />
                </IconButton>

                <div className={css.logo}>
                    <img alt="BMW" src="/img/logo300.png" />
                </div>

                <div className={css.separator}></div>
                <div className={css.title}>NEXTGen Supplier Risk Sensing Platform</div>
            </div>

            <div className="d-flex align-items-center">
                <IconButton color="primary" className={css.icon}>
                    <SearchIcon fontSize="inherit" />
                </IconButton>
                <IconButton color="primary" className={css.icon}>
                    <NotificationsOutlinedIcon fontSize="inherit" />
                </IconButton>

                <div className="d-flex align-items-center ml-4">
                    <div className={css.avatar}></div>
                    <div>
                        <Typography variant="h3" component="div">Michael Williams</Typography>
                        <Typography variant="h4" component="div">Category Manager</Typography>
                    </div>
                </div>
            </div>
        </div>

        <div className={css.wrapper}>
            <div className={css.body}>
                <iframe src="https://20.84.57.69:3443/guest?key=2ba4e3b3&populate=visualizationId&item_id=27" className={css.iframe}></iframe>
            </div>
        </div>
    </>;
/*
        <div className="p-4">
        <Typography variant="h1" component="div">Dashboard</Typography>
        <br/>
        <Search value="test" onChange={() => {}} />
        <div style={{width: '300px'}}>
        <DatePicker />
        </div>
        <IconButtonStateful isActive={true}>
            <CloseIcon fontSize="small" />
        </IconButtonStateful>
        <IconButtonStateful isActive={false}>
            <CloseIcon fontSize="small" />
        </IconButtonStateful>
        <br/>
        <br/>
        <div>
            <IconButton>
                <CloseIcon fontSize="small" />
            </IconButton>
            <IconButton size="small">
                <CloseIcon fontSize="small" />
            </IconButton>
            <IconButton size="medium">
                <CloseIcon fontSize="small" />
            </IconButton>
            <IconButton size="large">
                <CloseIcon fontSize="small" />
            </IconButton>
        </div>
        <br/>
        <br/>
        <TextField
            label="Search"
        />
        <br/>
        <OutlinedInput
            placeholder="Search"
        />
        <br/>
        <Input
            disableUnderline
            placeholder="Search"
        />
        <br/>
        <InputBase
            required
            placeholder="Search"
        />
        <br/>
        <div>
            <InputLabel>Label</InputLabel>
            <MuiSelect
                native
            >
                <option value="1">All</option>
                <option value="2">TRUE only</option>
                <option value="3">FALSE Only</option>
            </MuiSelect>
        </div>
        <br/><br/>

        <div>
            <InputLabel>Label</InputLabel>
            <NativeSelect>
                <option value="1">All</option>
                <option value="2">TRUE only</option>
                <option value="3">FALSE Only</option>
            </NativeSelect>
        </div>
        <br/><br/>
        <Select label="Select Label">
            <option value="1">TRUE and ALL</option>
            <option value="2">TRUE only</option>
            <option value="3">FALSE Only</option>
        </Select>

        <br/><br/>
        <InputLabel>Label</InputLabel>
        <InputLabel variant="standard">Label</InputLabel>
        <InputLabel variant="outlined">Label</InputLabel>
        <br/><br/><br/>
        <div className="b-t"></div>
        <br/>

        <Card className="p-4 mb-4">
            <Typography sx={{ mb: 1.5 }} color="text.secondary">Adjective</Typography>
            <Typography variant="body2">well meaning and kindly a benevolent smile</Typography>
            <br/><br/>
            <Button size="small">Learn More</Button>
            <Button variant="contained" className="ml-2">Learn More</Button>
        </Card>
        <Card className="p-4 mb-4" elevation={0}>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">Adjective</Typography>
            <div>well meaning and kindly a benevolent smile</div>
            <br/>
            <Typography variant="body2">well meaning and kindly a benevolent smile</Typography>
            <Typography variant="subtitle1">well meaning and kindly a benevolent smile</Typography>
            <Typography variant="subtitle2">well meaning and kindly a benevolent smile</Typography>
            <Typography variant="overline">well meaning and kindly a benevolent smile</Typography>
            <br/><br/>
            <Button size="small">Learn More</Button>
            <Button variant="contained" className="ml-2">Learn More</Button>
        </Card>
        <Card className="p-4" variant="outlined">
            <Typography sx={{ mb: 1.5 }} color="text.secondary">Adjective</Typography>
            <Typography variant="body2">well meaning and kindly a benevolent smile</Typography>
            <br/><br/>
            <Button size="small">Learn More</Button>
            <Button variant="contained" className="ml-2">Learn More</Button>
        </Card>


        <div style={{marginBottom:'1500px'}}></div>
    </div>;*/
}

export default Dashboard;