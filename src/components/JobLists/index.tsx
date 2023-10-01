/* eslint-disable @typescript-eslint/no-explicit-any */
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { StyledTableContainer } from './styles';
// import { Job } from '../../types/Job';

const JobList = ({ jobs }: any) => {
    console.log(jobs)
    return (
        <>
            {jobs.map((jobSet: any, setIndex: number) => (
                <div key={setIndex}>
                    <Typography variant="h6" gutterBottom>
                        Grupo {setIndex + 1}
                    </Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className="white-text">ID</TableCell>
                                <TableCell className="white-text">Descrição</TableCell> {/* Aplicando a classe aqui */}
                                <TableCell className="white-text">Data Máxima de Conclusão</TableCell> {/* Aplicando a classe aqui */}
                                <TableCell className="white-text">Tempo Estimado</TableCell> {/* Aplicando a classe aqui */}
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
                                    <TableCell className="white-text">{job.Descrição}</TableCell> {/* Aplicando a classe aqui */}
                                    <TableCell className="white-text">{job['Data Máxima de conclusão']}</TableCell> {/* Aplicando a classe aqui */}
                                    <TableCell className="white-text">{job['Tempo estimado']}</TableCell> {/* Aplicando a classe aqui */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            ))}


        </>
    );
};

export default JobList;
