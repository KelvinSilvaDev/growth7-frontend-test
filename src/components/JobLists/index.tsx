/* eslint-disable @typescript-eslint/no-explicit-any */
import {  Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { StyledTableContainer } from './styles';



const JobList = ({ jobs }: any) => {
    console.log(jobs)
    return (
        <>
            {jobs.map((jobSet: any, setIndex: number) => (
                <StyledTableContainer key={setIndex}>
                    <Typography variant="h6" gutterBottom className='group-label'>
                        Grupo {setIndex + 1}
                    </Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className="white-text">ID</TableCell>
                                <TableCell className="white-text">Descrição</TableCell>
                                <TableCell className="white-text">Data Máxima de Conclusão</TableCell>
                                <TableCell className="white-text">Tempo Estimado</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {jobSet.map((job: any, jobIndex: number) => (
                                <TableRow key={`${job.ID}-${setIndex}-${jobIndex}`}>
                                    <TableCell>
                                        <Typography variant="body1" component="p" className="white-text">
                                            {job.ID}
                                        </Typography>
                                    </TableCell>
                                    <TableCell className='cell'>
                                        <Typography variant="body1" component="p" className="white-text">
                                            {job.Descrição}
                                        </Typography>
                                    </TableCell>
                                    <TableCell className="cell">
                                        <Typography variant="body1" component="p" className="white-text cell">
                                            {new Date(job['Data Máxima de conclusão']).toLocaleString(
                                                'pt-BR',
                                                {
                                                    day: '2-digit',
                                                    month: '2-digit',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit',

                                                }
                                            ).replace(', ', '\n')}
                                        </Typography>
                                    </TableCell>
                                    <TableCell className="cell">
                                        <Typography variant="body1" component="p" className="white-text">
                                            {job['Tempo estimado']}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </StyledTableContainer>
            ))}


        </>
    );
};

export default JobList;
