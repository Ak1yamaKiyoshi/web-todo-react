
import React, { FC, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import * as styles from './registerpage.styles.js';
import Typography from '@mui/material/Typography'
import Button from '../../common/button/Button.js';

import { ButtonColor, ButtonSize, ButtonTextColor, ButtonVariant } from '../../common/button/types/index.js';
import userAPI from '../../API/userAPI/index.js';
import { useDispatch, useSelector } from 'react-redux';
import {setUserId } from '../../store/userSlice.js';
import Input from '../../common/input/Input.js';
import { Link } from 'react-router-dom';

interface LoginPageProps  {}

const RegisterPage: FC<LoginPageProps> = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setpasswordRepeat] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);

    const dispatch = useDispatch();
    const [userId, setInnerUserId] = useState(useSelector((state) => state.user.userId));


    useEffect(() => {
        if (buttonClicked) {
            const fetchData = async () => {
                return (await userAPI.register(login, password, passwordRepeat, name, email)).status;
            }
            fetchData().then((status) => {
                if (status !== 200) {
                    console.log(status);
                }
            });
            setButtonClicked(false);
        }
    }, [buttonClicked, login, password, dispatch, userId]);

    const handleLoginInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    }

    const handlePasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handlePasswordRepeatInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setpasswordRepeat(event.target.value);
    }

    const handleNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }



    return (
        <Box sx={styles.registerPageContainer()}>
            <Box sx={styles.registerPage()}>
                <Box sx={styles.registerPageInner()}>
                    <h1> { `${userId??""} `} </h1>
                    <Typography
                        variant='h3Medium'
                        sx={{marginBottom: '35px'}}
                    > Sign Up </Typography>
                    <Input
                        sx={{marginBottom: '15px'}}
                        onChange={handleLoginInputChange}
                        textLabel='Login'
                        textPlaceholder='cooluser'
                    />
                    <Input
                        sx={{marginBottom: '15px'}}
                        onChange={handleNameInputChange}
                        textLabel='Name'
                        textPlaceholder='Dementio'
                    />
                    <Input
                        sx={{marginBottom: '15px'}}
                        onChange={handleEmailInputChange}
                        textLabel='Email'
                        textPlaceholder='example@gmail.com'
                    />
                    <Input
                    sx={{marginBottom: '15px'}}
                        onChange={handlePasswordInputChange}
                        textLabel='Password'
                        textPlaceholder='*****'
                        type='password'
                    />
                    <Input
                    sx={{marginBottom: '15px'}}
                        onChange={handlePasswordRepeatInputChange}
                        textLabel='Repeat Password'
                        textPlaceholder='*****'
                        type='password'
                    />
                    <Link to='/login'>
                        <Typography variant='pRegular' sx={styles.registerlink()}> Sign In </Typography>
                    </Link>
                    <Button
                        onClick={() => setButtonClicked(true)}
                        sx={{marginTop: '15px'}}
                        text="Submit"
                        color={ButtonColor.DARK}
                        textColor={ButtonTextColor.LIGHT}
                        variant={ButtonVariant.OUTLINED}
                        size={ButtonSize.MEDIUM}
                    ></Button>
                </Box>
            </Box>
        </Box>
    );
};

export default RegisterPage;