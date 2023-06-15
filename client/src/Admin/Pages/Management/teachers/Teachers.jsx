import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useState } from 'react';

const columns = [
	{ field: 'id', headerName: 'ID', width: 90, flex: 1 },
	{
		field: 'firstName',
		headerName: 'First name',
		width: 150,
		editable: true,
		flex: 1
	},
	{
		field: 'lastName',
		headerName: 'Last name',
		width: 150,
		editable: true,
		flex: 1
	},
	{
		field: 'department',
		headerName: 'Department',
		width: 110,
		editable: true,
		flex: 1
	},
	{
		field: 'course',
		headerName: 'Course',
		width: 250,
		editable: true,
		flex: 1
	},
	{
		field: 'semester',
		headerName: 'Semester',
		width: 250,
		editable: true,
		flex: 1
	},
	{
		field: 'subject',
		headerName: 'Subject',
		width: 250,
		editable: true,
		flex: 1
	},
	
	{
		field: 'email',
		headerName: 'Email',
		width: 250,
		editable: true,
		flex: 1
	},
	{
		field: 'mobile_no',
		headerName: 'Mobile No',
		width: 250,
		editable: true,
		flex: 1
	},
];

const Teachers = () => {
	const [teachers, setTeachers] = useState([
		{ id: 'CUCSEMT1', lastName: 'Khatua', firstName: 'Sunirmal', department: "CSE", course: 'M.Tech', semester:'2nd', subject: 'Mobile Computing', email: 'example1@gmail.com', mobile_no: '1236546835' },
		{ id: 'CUCSEMT2', lastName: 'Chaki', firstName: 'Nabendu', department: "CSE", course: 'M.Tech', semester:'2nd', subject: 'Topics in DBMS', email: 'example2@gmail.com', mobile_no: '1236549321' },
		{ id: 'CUCSEMT3', lastName: 'Setua', firstName: 'Sanjit', department: "CSE", course: 'M.Tech', semester:'2nd', subject: 'Real Time System', email: 'example3@gmail.com', mobile_no: '1236546835' },
		{ id: 'CUCSEMT4', lastName: 'Choudhury', firstName: 'Sankhayan', department: "CSE", course: 'M.Tech', semester:'2nd', subject: 'Wireless Network', email: 'example4@gmail.com', mobile_no: '1236546835' },
		{ id: 'CUCSEMT5', lastName: 'Banerjee', firstName: 'Pritha', department: "CSE", course: 'M.Tech',semester:'1st', subject: 'Algorithm', email: 'example5@gmail.com', mobile_no: '1236546835' },
		{ id: 'CUCSEMT6', lastName: 'Das', firstName: 'Rajib', department: "CSE", course: 'M.Tech',semester:'1st', subject: 'Statistics & Probability', email: 'example6@gmail.com', mobile_no: '1236546835' },
		{ id: 'CUCSEMT7', lastName: 'Saha', firstName: 'Banani', department: "CSE", course: 'M.Tech', semester:'1st', subject: 'Image Processing', email: 'example7@gmail.com', mobile_no: '1236546835' },
		{ id: 'CUCSEMT3', lastName: 'Setua', firstName: 'Sanjit', department: "CSE", course: 'M.Tech', semester:'1st', subject: 'Machine Learning', email: 'example3@gmail.com', mobile_no: '1236546835' },
		
	]);

	return (
		<div >
		<Box sx={{ height: 400, width: '100%' }}>
			<DataGrid
				rows={teachers}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5,
						},
					},
				}}
				slots={{ toolbar: GridToolbar}}
				pageSizeOptions={[5]}
				checkboxSelection
				disableRowSelectionOnClick
			/>

		</Box>
		<Button 
			color="primary" 
			variant='contained' 
			onClick={() =>{
				console.log("Button Clicked");
			}}
		>
			Add Teachers
		</Button>
		</div>
	)
};

export default Teachers;