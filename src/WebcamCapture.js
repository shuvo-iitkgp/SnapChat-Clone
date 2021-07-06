
import React, {useRef, useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import './WebcamCapture.css'
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { setCameraImage } from './features/cameraSlice';
import { useHistory } from 'react-router-dom';
const videoConstraints = {
    width:250, 
    height: 400, 
    facingMode: "user",
};


function WebcamCapture() {
    
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();



    const [image, setImage] = useState(null);
    const capture = useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            // console.timeLog(imageSrc);
            // setImage(imageSrc);
            dispatch(setCameraImage(imageSrc))
            history.push("/preview")

        },
        [webcamRef],
    )
    return (
        <div className = 'webcamCapture'>
            <Webcam className= "webcamCapture__video"
                audio  = {false}
                height = {videoConstraints.height}
                ref = {webcamRef}
                screenshotFormat = "image/jpeg"
                width = {videoConstraints.width}
                videoConstraints = {videoConstraints}
            />

            <RadioButtonUncheckedIcon className = "webcamCapture__button" onClick = {capture} fontSize = "large"/>
            
        </div>
    )
}

export default WebcamCapture
