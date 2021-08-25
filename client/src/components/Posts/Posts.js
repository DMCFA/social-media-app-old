import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper
} from '@material-ui/core'

function Post({ post }) {

    const styles = useStyles()

    return(
        <div className='container'>
            <div className='post'>
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Link to={`posts/${post.id}`}>
                                        <i>{post.title}</i>
                                        <i>{post.author}</i>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )

}
