/* eslint-disable @typescript-eslint/no-explicit-any */
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { StyledTableContainer } from './styles';
// import { Job } from '../../types/Job';

const JobList = ({ jobs }: any) => {
    console.log(jobs)
    return (
        <>
        {jobs.map((jobSet: any, setIndex: number) => (
  <div key={setIndex}> {/* Use um índice único para a chave da div */}
    <Typography variant="h6" gutterBottom>
      Grupo {setIndex + 1}
    </Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Descrição</TableCell>
          <TableCell>Data Máxima de Conclusão</TableCell>
          <TableCell>Tempo Estimado</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {jobSet.map((job: any, jobIndex: number) => (
          <TableRow key={`${job.ID}-${setIndex}-${jobIndex}`}>
            <TableCell>
              <Typography variant="body1" component="p">
                {job.ID}
              </Typography>
            </TableCell>
            <TableCell>{job.Descrição}</TableCell>
            <TableCell>{job['Data Máxima de conclusão']}</TableCell>
            <TableCell>{job['Tempo estimado']}</TableCell>
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
