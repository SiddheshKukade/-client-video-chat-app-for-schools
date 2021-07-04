import React, { useState, useEffect } from 'react'
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import styles from "../AddStudyMaterialPanel/AddStudyMaterialPanel.module.css";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import axios from "axios";
import { useSelector } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        height: " 73vh",
        width: "59vw",
        overflowY: "scroll"
    },
    table: {
        minWidth: 650,
    },
}));

const ShowHomeWork = ({ hwCode }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [submissionDataFromServer, setSubmissionDataFromServer] = useState([])

    const downloadMaterial = (fileName) => {
        console.log();
        axios({
            url: process.env.REACT_APP_BACKEND_URL + `homework/download${fileName}`,
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            console.log(fileName)
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'homeworkFromStudent.pdf'); //or any other extension
            document.body.appendChild(link);
            link.click();
        });
    }
    const requestSubmissionDataFromServer = () => {
        console.log("requesting Submision data ", hwCode)
        axios.post(process.env.REACT_APP_BACKEND_URL + "homework/getHomeWorkSubmissions", {
            hwCode: hwCode
        }).then(res => { console.log(res.data); setSubmissionDataFromServer(res.data) }).catch((err) => console.log(err))
    }
    useEffect(() => {
        requestSubmissionDataFromServer()
        return () => {
            // cleanup
            setSubmissionDataFromServer([])
        }
    }, [submissionDataFromServer])
    // const requestHW = async (filename) => {
    //     // /homework/downloadsample.pdf
    //     try {
    //         const result = await axios.get(process.env.REACT_APP_BACKEND_URL + `homework/download${filename}`, {
    //             responseType: 'blob'
    //         })
    //         return download(result, "HomweWork", "application/pdf")

    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
    return (
        <div className={styles.container} >

            <div className={classes.paper}>
                <div className={styles.header}>Students who Submitted this Homework</div>
                <TableContainer component={Paper}  >
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell> Name </TableCell>
                                <TableCell  > E-mail</TableCell>
                                <TableCell  >File</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={1}>
                                <TableCell  >{"submission"}</TableCell>
                                <TableCell  >{"submission"}</TableCell>
                                <TableCell title="Download the Work of the Student" onClick={() => downloadMaterial("sample.pdf")}   > <FileCopyIcon /></TableCell>
                            </TableRow>

                            {submissionDataFromServer ?
                                submissionDataFromServer.map(submission => (
                                    <TableRow key={submission.name}>
                                        <TableCell  >{submission.name}</TableCell>
                                        <TableCell  >{submission.email}</TableCell>
                                        <TableCell title="Download the Work of the Student" onClick={() => downloadMaterial("1625263836055--sample.pdf")}   > <FileCopyIcon /></TableCell>
                                    </TableRow>
                                )) : null}
                            <TableRow key="1">
                                <TableCell  >Siddhesh Kukade</TableCell>
                                <TableCell  > siddheshkukade2003@gmail.com </TableCell>
                                <TableCell title="Download the Work of the Student" onClick={() => downloadMaterial("1625263836055--sample.pdf")}   > <FileCopyIcon /></TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell>Eshaan Patil</TableCell>
                                <TableCell >patileshan@gmail.com</TableCell>
                                <TableCell title="Download the Work of the Student" onClick={() => downloadMaterial("1625263836055--sample.pdf")}   > <FileCopyIcon /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div >)
}

export default ShowHomeWork

// // Sample Code for Getting the Student Name email and FIles
// submissionDataFromServer.map(submission =>
// {
    // submission.
// }
// )
