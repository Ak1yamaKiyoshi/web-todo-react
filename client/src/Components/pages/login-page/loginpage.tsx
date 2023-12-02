
import React, { FC, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import * as styles from './loginpage.styles';
import Typography from '@mui/material/Typography'
import axios from 'axios';
import Button from '../../common/button/Button';
interface LoginPageProps  {}
import { ButtonColor, ButtonSize, ButtonVariant } from '../../common/button/types';

const LoginPageProps: FC<LoginPageProps> = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(() => {
        if (buttonClicked) {
            axios.get(`http://localhost:9000/login?login=${login}&password=${password}`, {
            }).then((response) => {
                console.log(response)
            })
            setButtonClicked(false);
        }
    }, [buttonClicked, login, password]);

    const handleLoginInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    }

    const handlePasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }


    return (
        <Box sx={styles.loginPageContainer()}>
            <Box sx={styles.loginPage()}>
                <Typography variant='h3Medium'> Login </Typography>
                <input id='inputloginfield' onChange={handleLoginInputChange}/>
                <input id='inputpasswordfield' onChange={handlePasswordInputChange}/>
                <Button
                    onClick={() => setButtonClicked(true)}
                    sx={{margin: '10px'}}
                    text="Login"
                    color={ButtonColor.LIGHT}
                    variant={ButtonVariant.FILLED}
                    size={ButtonSize.MEDIUM}
                ></Button>
            </Box>
        </Box>
    );
};

export default LoginPageProps;